# Instructions for Claude

The Immerse Network website (immersenetwork.org.za). See README.md for the
page list, shared files and how to preview locally.

## Workflow

- Work on the `develop` branch and push your changes there.
- `main` is the live site: GitHub Pages publishes it to immersenetwork.org.za
  within a few minutes of a merge.
- After every change, once it is pushed to `develop`, ask: "Would you like me
  to open a PR into `main` and merge it?" Only open the PR and merge when the
  answer is yes.

## How the site is built

- This is a small static site: edit the HTML, CSS and JS directly.
- Do not add frameworks, build tooling or dependencies.
- Preserve the existing visual style.
- Pages live in folders as `index.html` so URLs stay clean (`/about/`).
  Links are relative: root pages use `about/`, pages in a folder use
  `../about/` and `../assets/...`.
- All colours come from `assets/css/tokens.css`; do not hand-write hex
  values. `/immerse-color-palette/` reads the tokens back out to render the
  palette sheet.
- The active nav link is styled from `<body data-page="...">` against the
  `data-nav` attributes on the menu links, in `assets/css/styles.css`.

## Keep duplicated blocks in sync

- The nav and footer are copied into every page and must stay in sync.
- The podcast block (featured episode plus the Past episodes list) appears on
  both `index.html` and `carmel-retreat/index.html`. Any change to one must be
  made to the other.

## Content notes

- Upcoming events live in `events/index.html`, listed in date order with
  undated (TBC) events last.
- Podcast episodes come from the Immerse Network South Africa show on Spotify
  (show ID `1enVpgWJpcU2Jsn00YFRwv`). In the widget, titles follow the style
  "Carmel Retreat 2026 — Session Title (Speaker)".

## Checking changes

- Prefer quick text-level checks such as `rg` and `git diff` after edits.
- The user can do visual checks, so avoid lengthy browser testing unless asked.
