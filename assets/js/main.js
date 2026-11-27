/* =====================================================================
   IMMERSE NETWORK — site script
   The ONE place behaviour lives. Every page loads this file with
   <script src="assets/js/main.js" defer></script>; no page has an inline
   <script> block. Both features below no-op on pages that lack the
   markup they drive, so the same file is safe everywhere.
   ===================================================================== */

/* Mobile nav. Delegated off document so it works no matter when the
   burger enters the DOM. */
document.addEventListener("click", function (e) {
  if (e.target.closest(".burger")) {
    document.querySelector("nav").classList.toggle("open");
  }
});

/* Podcast episode picker — swaps the Spotify embed in place.
   Only present on the pages carrying the .pf-list episode list. */
document.querySelectorAll(".pf-list .ep[data-ep]").forEach(function (ep) {
  ep.addEventListener("click", function () {
    var id = ep.getAttribute("data-ep"),
      t = ep.getAttribute("data-title");
    var f = document.getElementById("pfPlayer");
    if (f)
      f.src =
        "https://open.spotify.com/embed/episode/" +
        id +
        "?utm_source=generator&theme=0";
    var ti = document.getElementById("pfTitle");
    if (ti) ti.textContent = t;
    var la = document.getElementById("pfLab");
    if (la) la.textContent = "Now playing";
    document.querySelectorAll(".pf-list .ep").forEach(function (e) {
      e.classList.remove("active");
    });
    ep.classList.add("active");
  });
});

/* Event flyer lightbox. A .flyer[data-flyer] button opens the full-size
   flyer in a <dialog>; click anywhere or press Esc to close. Only present
   on the Upcoming Events page. */
(function () {
  var flyers = document.querySelectorAll(".flyer[data-flyer]");
  if (!flyers.length) return;
  var dlg = document.createElement("dialog");
  dlg.className = "lightbox";
  dlg.innerHTML =
    '<button class="close" type="button" aria-label="Close">×</button><img alt="" />';
  document.body.appendChild(dlg);
  var img = dlg.querySelector("img");
  dlg.addEventListener("click", function () {
    dlg.close();
  });
  flyers.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      img.src = btn.getAttribute("data-flyer");
      var thumb = btn.querySelector("img");
      img.alt = thumb ? thumb.alt : "";
      if (dlg.showModal) dlg.showModal();
      else window.open(img.src, "_blank");
    });
  });
})();
