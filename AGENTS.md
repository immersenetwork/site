# Agent Notes

- This is a small static site: edit the HTML, CSS, and JS directly.
- Pages live in folders as `index.html` so URLs stay clean (`/about/`).
  Links are relative: root pages use `about/`, pages in a folder use
  `../about/` and `../assets/...`.
- Keep changes narrow and consistent across duplicated page headers — the
  nav and footer are copied into every page and must stay in sync.
- The active nav link is styled from `<body data-page="...">` against the
  `data-nav` attributes on the menu links, in `assets/css/styles.css`.
- All colours come from `assets/css/tokens.css`; do not hand-write hex
  values. `/immerse-color-palette/` reads the tokens back out to render
  the palette sheet.
- The user can do visual checks, so avoid lengthy browser testing unless asked.
- Prefer quick text-level checks such as `rg` and `git diff` after edits.
- Preserve the existing visual style; do not add new frameworks or build tooling.
