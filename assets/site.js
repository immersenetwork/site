/* =====================================================================
   IMMERSE NETWORK — site script
   The ONE place behaviour lives. Every page loads this file with
   <script src="assets/site.js" defer></script>; no page has an inline
   <script> block. The feature below no-ops on pages that lack the
   markup it drives, so the same file is safe everywhere.
   ===================================================================== */

/* Mobile nav. Delegated off document so it works no matter when the
   burger enters the DOM. */
document.addEventListener("click", function (e) {
  if (e.target.closest(".burger")) {
    document.querySelector("nav").classList.toggle("open");
  }
});
