from __future__ import annotations

from datetime import date
from pathlib import Path
import re


SITE_URL = 'https://civilcitizenscanada.ca'
ROOT = Path(__file__).resolve().parents[1]
DIST_DIR = ROOT / 'dist'
SITEMAP_PATH = DIST_DIR / 'sitemap.xml'
ECONOMIC_POLICY_FILE = ROOT / 'src' / 'data' / 'economicPolicy.js'


STATIC_ROUTES = [
    '/',
    '/about',
    '/about/founding-principles',
    '/about/leadership',
    '/about/leadership/andy-normore',
    '/about/leadership/andy-normore/humans-in-the-singularity',
    '/become-a-civil-citizen',
    '/platform',
    '/platform/agriculture-food',
    '/platform/defense-sovereignty',
    '/platform/energy-infrastructure',
    '/platform/family-society',
    '/platform/governance',
    '/platform/implementation/roadmap',
    '/platform/implementation/restoring-power-to-citizens',
    '/platform/implementation/chambers-of-citizens',
    '/platform/implementation/candidate-selection',
    '/platform/implementation/civil-wallet',
    '/platform/implementation/digital-governance',
    '/platform/implementation/member-growth',
    '/platform/implementation/mp-accountability',
    '/platform/implementation/trust-safety',
    '/platform/immigration',
    '/platform/technology-ai',
    '/platform/economic-foundation',
    '/support-ccc',
    '/support-ccc/donate',
    '/the-civil-app',
    '/news-updates',
]


def get_economic_policy_routes() -> list[str]:
    if not ECONOMIC_POLICY_FILE.exists():
        return []

    text = ECONOMIC_POLICY_FILE.read_text(encoding='utf-8')
    slugs = sorted(set(re.findall(r"slug:\s*'([^']+)'", text)))
    return [f'/platform/economic-foundation/{slug}' for slug in slugs]


def build_xml(routes: list[str]) -> str:
    lastmod = date.today().isoformat()
    url_nodes = []

    for route in routes:
        location = SITE_URL if route == '/' else f'{SITE_URL}{route}'
        url_nodes.append(
            '  <url>\n'
            f'    <loc>{location}</loc>\n'
            f'    <lastmod>{lastmod}</lastmod>\n'
            '  </url>'
        )

    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + '\n'.join(url_nodes)
        + '\n</urlset>\n'
    )


def main() -> None:
    DIST_DIR.mkdir(parents=True, exist_ok=True)
    routes = STATIC_ROUTES + get_economic_policy_routes()
    sitemap = build_xml(routes)
    SITEMAP_PATH.write_text(sitemap, encoding='utf-8')
    print(f'Generated sitemap with {len(routes)} URLs at {SITEMAP_PATH}')


if __name__ == '__main__':
    main()