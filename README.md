IMMERSE NETWORK — website
=========================

Plain static HTML. No build step, no dependencies, nothing to install.
Open any page in a browser (double-click works); keep every file in the
same folder so the relative links and /assets paths resolve.

Pages
-----
  index.html ................. HOME
  about.html ................. About (History / Vision / Approach / Values / Team / New Wine)
  carmel-retreat.html ........ Carmel Retreat
  events.html ................ Upcoming Events
  immerse-color-palette.html . Brand colour swatch sheet

Shared files
------------
  assets/tokens.css .. brand colours, geometry, font stack. THE one place
                       colours live. Every page loads this first.
  assets/site.css .... every component style on the site. No page has an
                       inline <style> block.
  assets/site.js ..... the mobile nav toggle and the podcast episode
                       picker. No page has an inline <script> block.
  assets/ ............ logos, team photos and event images.

Each page's <head> loads them in this order:

    <link rel="stylesheet" href="assets/tokens.css" />
    <link rel="stylesheet" href="assets/site.css" />

and closes with:

    <script src="assets/site.js" defer></script>

Editing
-------
* Styles — edit assets/site.css. It applies to every page, so check the
  others before you commit.

* Colours — edit assets/tokens.css and nothing else. The whole site and
  the swatch sheet recolour from it; immerse-color-palette.html reads its
  hex captions back out of the tokens, so it can never fall out of date.

* Images in CSS — assets/site.css lives INSIDE assets/, so url() paths
  in it are relative to that folder, not to the page:

      url("hero.jpeg")          correct
      url("assets/hero.jpeg")   resolves to assets/assets/ and 404s

  Paths in the HTML (src="assets/hero.jpeg") are relative to the page,
  as usual. The two are not interchangeable.

* Behaviour — edit assets/site.js. Both features no-op on pages that
  lack the markup they drive, so one file is safe everywhere.

* Which page am I on — each page sets <body data-page="home|about|
  carmel|events">. That drives the highlighted nav link (and the roomier
  vertical rhythm on the three subpages) from CSS, so the nav markup
  itself does not differ between pages.

* STILL DUPLICATED — three blocks are copied between pages. Change one
  and you must paste the identical change into the others:

      <nav> ............ all four pages, byte-identical
      <footer> ......... all four pages, byte-identical
      podcast block .... index.html and carmel-retreat.html, identical
                         content (including the 9-episode list). It sits
                         one level deeper on the retreat page, so the
                         indentation and line wrapping differ — compare
                         the text, not the bytes.

  To confirm nav and footer after an edit:

      diff <(awk '/<nav>/,/<\/nav>/' index.html) \
           <(awk '/<nav>/,/<\/nav>/' about.html)

  Adding a podcast episode means the same edit in both files.

Brand colours
-------------
Authoritative values live in assets/tokens.css; open
immerse-color-palette.html to see them rendered.

  Deep Teal  #08586F   brand      headings, nav, buttons
  Dark Teal  #05404E   brand-deep footer, hovers, deep panels
  Aqua       #1E9FB3   accent     kickers, markers, highlights
  White      #FFFFFF   page       page background
  Soft Aqua  #EDF5F6   panel      alternating sections & cards
  Ink        #123B44   ink        emphasised / dark text
  Body       #46555A   body       paragraph copy
  Muted      #7C888C   muted      captions, small labels, dates
