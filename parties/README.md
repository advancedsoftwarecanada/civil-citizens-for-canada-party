# Party Data Pulls

This directory stores rendered public-site text pulled from other Canadian federal party websites for comparison and retrieval experiments.

Folders:

- `ppc`
- `ndp`
- `block`
- `green`
- `conservative`
- `liberal`

Each party folder is expected to contain:

- `last_pulled.txt` with the last successful pull timestamp
- `manifest.json` with crawl metadata and page inventory
- `combined.txt` with all pulled page text concatenated
- `pages/` with one text file per crawled page

Run the puller from the repository root:

```bash
python3 scripts/pull_party_sites.py --party all --max-pages 20
```