# Build Notes

This repo serves the built `dist/` output through nginx.

## Rule

- After every prompt that changes code, content, metadata, styles, routing, or assets, run `npm run build` from the repo root.

## Why

- Editing `src/`, `index.html`, or other source files does not update the live site by itself.
- The public site reflects only the latest production build in `dist/`.

## Working Expectation For Future Agents

- Do the requested edit.
- Run `npm run build`.
- Report whether the build passed or failed.
- If the user says changes are not visible, assume build or browser/cache issues first and verify the live output.

## Canonical Repo Path

- `/var/www/civilcitizenscanada`

## Symlink Path Used In Chat

- `/home/andy/civil-citizens-for-canada-party`