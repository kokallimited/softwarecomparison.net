/* VPNReviews — GDPR consent slide-in (client-side, no tracking until accepted) */
(function () {
  "use strict";
  var KEY = "vpnr_consent";
  var el = document.getElementById("gdpr");
  if (!el) return;
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  function decide(choice) {
    try { localStorage.setItem(KEY, choice); } catch (e) {}
    el.classList.remove("show");
    window.setTimeout(function () { el.hidden = true; }, 450);
    // analytics would be initialised here only if choice === "accept"
  }
  if (!stored) {
    el.hidden = false;
    // next frame so the transition runs
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () { el.classList.add("show"); });
    });
  }
  el.addEventListener("click", function (e) {
    var b = e.target.closest("[data-gdpr]");
    if (b) decide(b.getAttribute("data-gdpr"));
  });
})();
