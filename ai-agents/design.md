# CCC Design Notes

This file is for future agents and contributors. It documents the current visual direction so new edits stay aligned with the existing site.

## Overall Direction

- Keep the site clean, crisp, and minimal.
- Avoid smoky, muddy, or overly dark treatments.
- Use a white, soft-cream, and red palette with light glass panels.
- Prefer strong structure and restraint over decorative effects.
- When in doubt, remove noise rather than adding more UI.

## Layout

- Desktop layout uses a single shared site width variable in `src/styles.css`.
- Header, main content, mobile-nav container, and footer should feel like one aligned frame.
- Keep desktop widths uniform. Do not make the header much wider or narrower than the body panels.
- Homepage sections should feel like large editorial blocks, not small app cards.

## Typography

- Display font: `League Spartan`.
- Body font: `Segoe UI`, `Helvetica Neue`, sans-serif.
- Use the display font for hero titles, section titles, nav labels, CTA buttons, and other headline UI.
- Use the body font for paragraph copy and supporting text.
- Avoid tiny red micro-labels.
- On homepage content sections, the main title should do the work. Do not reintroduce small eyebrow text above every block unless explicitly requested.
- Homepage `.section-title` needs normal line-height, not the compressed hero line-height.

## Header / Navigation

- Desktop nav is click-to-open, not hover-open.
- Header spacing has been tightened intentionally. Do not add large vertical padding back without a reason.
- Brand in header is `CCC`, not the full party name.
- `Join Movement` acts as a CTA and carries the former local/get-involved submenu.
- `Local / Get Involved` should not return as a separate top-level nav item unless the user asks for it.
- Platform dropdown is concept-level only. Do not dump every subtopic into the nav.

## Homepage

- Hero title text is:
  - `TOGETHER,`
  - `WE BUILD AN IDEAL FUTURE`
- Homepage hero image should use `Civil-Citizens-For-Canada-Party.jpg`.
- The hero image should read large enough to hold its own against the headline.
- Homepage sections after the hero should use simple, bold headings and readable body copy.
- Placeholder image blocks are acceptable until final imagery is provided, but keep them understated.
- The site should feel political/editorial, not like a SaaS dashboard.

## Visual Rules

- Rounded panels are acceptable, but avoid making everything feel pill-heavy.
- Borders should be subtle and red-tinted, not harsh.
- Shadows should stay soft.
- Red is the accent, not the background color for large surfaces.
- Use uppercase sparingly. It works well for nav and major headlines, but not for every small label.

## Content Tone

- Favor serious, direct political language.
- Avoid gimmicky marketing phrasing unless the user explicitly wants it.
- Frame the movement as constructive and system-building, not purely oppositional.

## Images / Social

- Open Graph image is `public/assets/img/CCC-opengraph.jpg`.
- Homepage hero JPG is distinct from the Open Graph image.
- If replacing placeholder visuals, prefer clean civic or campaign imagery that fits the light white/red aesthetic.

## Deployment Notes

- Canonical working tree: `/var/www/civilcitizenscanada`.
- `/home/andy/civil-citizens-for-canada-party` is a symlink to that repo.
- Build in place with `npm run build` from `/var/www/civilcitizenscanada`.

## Anti-Patterns

- Do not bring back the old dark smoky theme.
- Do not add tiny all-caps red section labels across the homepage.
- Do not overpack desktop dropdown menus.
- Do not let header spacing become tall and airy again.
- Do not create mismatched widths between header, body, and footer.