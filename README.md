IMMERSE NETWORK — website
=========================

Plain static HTML. No build step, no dependencies, nothing to install.

Pages live in folders as index.html so the URLs stay clean (/about/), which
means directory links only resolve over HTTP — not from a double-clicked
file:// page. To preview locally:

    python3 -m http.server 8000     # then open http://localhost:8000

Pages
-----
  index.html ....................... HOME
  about/index.html ................. About (History / Vision / Approach / Values / Team / New Wine)
  carmel-retreat/index.html ........ Carmel Retreat
  events/index.html ................ Upcoming Events
  immerse-color-palette/index.html . Brand colour swatch sheet

Shared files
------------
  assets/css/tokens.css .. brand colours, geometry, font stack. THE one
                           place colours live. Every page loads this first.
  assets/css/styles.css .. every component style on the site. No page has
                           an inline <style> block.
  assets/js/main.js ...... the mobile nav toggle and the podcast episode
                           picker. No page has an inline <script> block.
  assets/images/ ......... logos, team photos and event images.
  favicon.png,
  apple-touch-icon.png ... site icons, at the repository root.

Each page's <head> loads them in this order:

    <link rel="stylesheet" href="assets/css/tokens.css" />
    <link rel="stylesheet" href="assets/css/styles.css" />

and closes with:

    <script src="assets/js/main.js" defer></script>

Linking between pages
---------------------
All links are relative, so the depth of the page decides the prefix:

    from index.html          href="about/"      src="assets/images/hero.jpeg"
    from about/index.html    href="../about/"   src="../assets/images/hero.jpeg"

Editing
-------
* Styles — edit assets/css/styles.css. It applies to every page, so check
  the others before you commit.

* Colours — edit assets/css/tokens.css and nothing else. The whole site
  and the swatch sheet recolour from it; the palette page reads its hex
  captions back out of the tokens, so it can never fall out of date.

* Images in CSS — assets/css/styles.css lives INSIDE assets/css/, so
  url() paths in it are relative to that folder, not to the page:

      url("../images/hero.jpeg")       correct
      url("assets/images/hero.jpeg")   resolves to assets/css/assets/ and 404s

  Paths in the HTML are relative to the page, as usual. The two are not
  interchangeable.

* Behaviour — edit assets/js/main.js. Both features no-op on pages that
  lack the markup they drive, so one file is safe everywhere.

* Which page am I on — each page sets <body data-page="home|about|
  carmel|events">. That drives the highlighted nav link (and the roomier
  vertical rhythm on the three subpages) from CSS. The nav links carry
  data-nav="home|carmel|events" so the highlighting keys off those rather
  than off href values, which differ by page depth.

* STILL DUPLICATED — three blocks are copied between pages. Change one
  and you must paste the identical change into the others:

      <nav> ............ all four pages, identical apart from link depth
      <footer> ......... all four pages, identical apart from link depth
      podcast block .... index.html and carmel-retreat/index.html,
                         identical content (including the 9-episode
                         list). It sits one level deeper on the retreat
                         page, so the indentation and line wrapping
                         differ — compare the text, not the bytes.

  To confirm nav and footer after an edit, compare with the ../ prefixes
  normalised away:

      diff <(awk '/<nav>/,/<\/nav>/' index.html | sed 's|"\.\./|"|g') \
           <(awk '/<nav>/,/<\/nav>/' about/index.html | sed 's|"\.\./|"|g')

  Adding a podcast episode means the same edit in both files.

Brand colours
-------------
Authoritative values live in assets/css/tokens.css; open
/immerse-color-palette/ to see them rendered.

  Deep Teal  #08586F   brand      headings, nav, buttons
  Dark Teal  #05404E   brand-deep footer, hovers, deep panels
  Aqua       #1E9FB3   accent     kickers, markers, highlights
  White      #FFFFFF   page       page background
  Soft Aqua  #EDF5F6   panel      alternating sections & cards
  Ink        #123B44   ink        emphasised / dark text
  Body       #46555A   body       paragraph copy
  Muted      #7C888C   muted      captions, small labels, dates
