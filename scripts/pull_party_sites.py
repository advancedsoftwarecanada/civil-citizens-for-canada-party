#!/usr/bin/env python3

from __future__ import annotations

import argparse
import hashlib
import json
import re
import shutil
import sys
from collections import deque
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import urldefrag, urljoin, urlparse

try:
    from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
    from playwright.sync_api import sync_playwright
except ImportError:  # pragma: no cover - handled at runtime
    print(
        'Playwright for Python is not installed.\n'
        'Install it with:\n'
        '  pip install -r requirements-party-scraper.txt\n'
        '  python3 -m playwright install chromium',
        file=sys.stderr,
    )
    sys.exit(2)


ROOT_DIR = Path(__file__).resolve().parents[1]
PARTIES_DIR = ROOT_DIR / 'parties'
DEFAULT_MAX_PAGES = 20
DEFAULT_TIMEOUT_MS = 45000
DEFAULT_SETTLE_MS = 1200
MAX_DISCOVERED_LINKS_PER_PAGE = 40

PARTY_CONFIG: dict[str, dict[str, Any]] = {
    'ppc': {
        'name': "People's Party of Canada",
        'start_urls': ['https://www.peoplespartyofcanada.ca/'],
        'allowed_domains': ['peoplespartyofcanada.ca', 'www.peoplespartyofcanada.ca'],
    },
    'ndp': {
        'name': 'New Democratic Party',
        'start_urls': ['https://www.ndp.ca/'],
        'allowed_domains': ['ndp.ca', 'www.ndp.ca'],
    },
    'block': {
        'name': 'Bloc Quebecois',
        'start_urls': ['https://www.blocquebecois.org/'],
        'allowed_domains': ['blocquebecois.org', 'www.blocquebecois.org'],
    },
    'green': {
        'name': 'Green Party of Canada',
        'start_urls': ['https://www.greenparty.ca/en'],
        'allowed_domains': ['greenparty.ca', 'www.greenparty.ca'],
    },
    'conservative': {
        'name': 'Conservative Party of Canada',
        'start_urls': ['https://www.conservative.ca/'],
        'allowed_domains': ['conservative.ca', 'www.conservative.ca'],
    },
    'liberal': {
        'name': 'Liberal Party of Canada',
        'start_urls': ['https://liberal.ca/'],
        'allowed_domains': ['liberal.ca', 'www.liberal.ca'],
    },
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description='Pull rendered public text from Canadian federal party websites into local text files.',
    )
    parser.add_argument(
        '--party',
        action='append',
        choices=['all', *PARTY_CONFIG.keys()],
        help='Party slug to pull. Repeat this flag to pull multiple parties. Defaults to all.',
    )
    parser.add_argument('--max-pages', type=int, default=DEFAULT_MAX_PAGES)
    parser.add_argument('--timeout-ms', type=int, default=DEFAULT_TIMEOUT_MS)
    parser.add_argument('--settle-ms', type=int, default=DEFAULT_SETTLE_MS)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    selected_parties = resolve_selected_parties(args.party)
    pulled_at = datetime.now(timezone.utc).replace(microsecond=0).isoformat()

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1440, 'height': 2200})
        page = context.new_page()

        try:
            for party_key in selected_parties:
                crawl_party(
                    page=page,
                    party_key=party_key,
                    config=PARTY_CONFIG[party_key],
                    pulled_at=pulled_at,
                    max_pages=args.max_pages,
                    timeout_ms=args.timeout_ms,
                    settle_ms=args.settle_ms,
                )
        finally:
            context.close()
            browser.close()

    return 0


def resolve_selected_parties(raw_parties: list[str] | None) -> list[str]:
    if not raw_parties or 'all' in raw_parties:
        return list(PARTY_CONFIG.keys())

    ordered_unique: list[str] = []
    for party_key in raw_parties:
        if party_key not in ordered_unique:
            ordered_unique.append(party_key)

    return ordered_unique


def crawl_party(
    *,
    page: Any,
    party_key: str,
    config: dict[str, Any],
    pulled_at: str,
    max_pages: int,
    timeout_ms: int,
    settle_ms: int,
) -> None:
    party_dir = PARTIES_DIR / party_key
    pages_dir = party_dir / 'pages'
    pages_dir.mkdir(parents=True, exist_ok=True)
    clear_existing_pages(pages_dir)

    queue: deque[str] = deque(normalize_url(url) for url in config['start_urls'])
    queued = set(queue)
    visited: set[str] = set()
    results: list[dict[str, Any]] = []
    errors: list[dict[str, str]] = []

    while queue and len(results) < max_pages:
        current_url = queue.popleft()
        queued.discard(current_url)

        if current_url in visited:
            continue

        visited.add(current_url)

        try:
            page.goto(current_url, wait_until='networkidle', timeout=timeout_ms)
            page.wait_for_timeout(settle_ms)
            extracted = extract_page_data(page, current_url)
            page_file = pages_dir / build_page_filename(current_url)
            page_file.write_text(
                build_page_text(
                    party_name=config['name'],
                    pulled_at=pulled_at,
                    url=current_url,
                    title=extracted['title'],
                    text=extracted['text'],
                ),
                encoding='utf-8',
            )

            results.append(
                {
                    'url': current_url,
                    'title': extracted['title'],
                    'text_file': to_repo_relative(page_file),
                    'characters': len(extracted['text']),
                }
            )

            for link in filter_links(extracted['links'], config['allowed_domains']):
                if link in visited or link in queued:
                    continue
                if len(queued) >= max_pages * MAX_DISCOVERED_LINKS_PER_PAGE:
                    break
                queue.append(link)
                queued.add(link)
        except PlaywrightTimeoutError:
            errors.append({'url': current_url, 'error': f'timeout after {timeout_ms} ms'})
        except Exception as error:  # pragma: no cover - defensive runtime handling
            errors.append({'url': current_url, 'error': str(error)})

    write_party_outputs(
        party_dir=party_dir,
        party_key=party_key,
        party_name=config['name'],
        pulled_at=pulled_at,
        results=results,
        errors=errors,
        max_pages=max_pages,
    )


def clear_existing_pages(pages_dir: Path) -> None:
    for child in pages_dir.iterdir():
        if child.is_file():
            child.unlink()
        elif child.is_dir():
            shutil.rmtree(child)


def extract_page_data(page: Any, url: str) -> dict[str, Any]:
    payload = page.evaluate(
                r"""
        () => {
          const bodyText = document.body ? document.body.innerText : '';
          const normalizedText = bodyText
            .replace(/\u00a0/g, ' ')
            .replace(/\t/g, ' ')
            .replace(/\r/g, '')
            .replace(/\n{3,}/g, '\n\n')
            .trim();

          const links = Array.from(document.querySelectorAll('a[href]'))
            .map((anchor) => anchor.href)
            .filter(Boolean);

          return {
            title: document.title || '',
            text: normalizedText,
            links,
          };
        }
        """
    )

    title = clean_line(payload.get('title') or url)
    text = clean_text_block(payload.get('text') or '')

    return {
        'title': title,
        'text': text,
        'links': payload.get('links') or [],
    }


def filter_links(links: list[str], allowed_domains: list[str]) -> list[str]:
    filtered_links: list[str] = []
    seen: set[str] = set()

    for raw_link in links:
        normalized = normalize_url(raw_link)
        parsed = urlparse(normalized)

        if parsed.scheme not in {'http', 'https'}:
            continue
        if parsed.netloc not in allowed_domains:
            continue
        if is_binary_like_path(parsed.path):
            continue
        if normalized in seen:
            continue

        seen.add(normalized)
        filtered_links.append(normalized)

    return filtered_links


def write_party_outputs(
    *,
    party_dir: Path,
    party_key: str,
    party_name: str,
    pulled_at: str,
    results: list[dict[str, Any]],
    errors: list[dict[str, str]],
    max_pages: int,
) -> None:
    last_pulled_file = party_dir / 'last_pulled.txt'
    manifest_file = party_dir / 'manifest.json'
    combined_file = party_dir / 'combined.txt'

    manifest = {
        'party': party_key,
        'name': party_name,
        'pulled_at': pulled_at,
        'max_pages': max_pages,
        'page_count': len(results),
        'pages': results,
        'errors': errors,
    }

    combined_text_parts = [
        f'Party: {party_name}',
        f'Pulled At: {pulled_at}',
        '',
    ]

    for page_entry in results:
        page_path = ROOT_DIR / page_entry['text_file']
        combined_text_parts.append(page_path.read_text(encoding='utf-8').strip())
        combined_text_parts.append('')

    last_pulled_file.write_text(f'{pulled_at}\n', encoding='utf-8')
    manifest_file.write_text(f'{json.dumps(manifest, indent=2)}\n', encoding='utf-8')
    combined_file.write_text('\n'.join(combined_text_parts).strip() + '\n', encoding='utf-8')


def build_page_text(*, party_name: str, pulled_at: str, url: str, title: str, text: str) -> str:
    return (
        f'Party: {party_name}\n'
        f'Pulled At: {pulled_at}\n'
        f'URL: {url}\n'
        f'Title: {title}\n\n'
        f'{text}\n'
    )


def build_page_filename(url: str) -> str:
    parsed = urlparse(url)
    path = parsed.path.strip('/') or 'home'
    slug = re.sub(r'[^a-z0-9]+', '-', path.lower()).strip('-') or 'home'

    if parsed.query:
        query_hash = hashlib.sha1(parsed.query.encode('utf-8')).hexdigest()[:8]
        slug = f'{slug}-{query_hash}'

    return f'{slug}.txt'


def normalize_url(url: str) -> str:
    without_fragment, _ = urldefrag(url.strip())
    parsed = urlparse(without_fragment)
    normalized_path = parsed.path or '/'

    if normalized_path != '/' and normalized_path.endswith('/'):
        normalized_path = normalized_path.rstrip('/')

    rebuilt = parsed._replace(path=normalized_path, params='', fragment='')
    return rebuilt.geturl()


def clean_line(value: str) -> str:
    return re.sub(r'\s+', ' ', value).strip()


def clean_text_block(value: str) -> str:
    value = value.replace('\r', '')
    value = re.sub(r'\n[ \t]+', '\n', value)
    value = re.sub(r'[ \t]{2,}', ' ', value)
    value = re.sub(r'\n{3,}', '\n\n', value)
    return value.strip()


def is_binary_like_path(path: str) -> bool:
    lower_path = path.lower()
    return any(
        lower_path.endswith(extension)
        for extension in (
            '.jpg',
            '.jpeg',
            '.png',
            '.gif',
            '.webp',
            '.svg',
            '.pdf',
            '.zip',
            '.mp4',
            '.mp3',
            '.mov',
            '.avi',
            '.doc',
            '.docx',
            '.xls',
            '.xlsx',
            '.ppt',
            '.pptx',
        )
    )


def to_repo_relative(path: Path) -> str:
    return path.relative_to(ROOT_DIR).as_posix()


if __name__ == '__main__':
    raise SystemExit(main())