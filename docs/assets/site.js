(function () {
  var root = document.documentElement;
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // language: saved choice, else the system language (Arabic -> ar, anything else -> en)
  function sysLang() {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    return String(langs[0] || "en").toLowerCase().indexOf("ar") === 0 ? "ar" : "en";
  }
  function applyLang(l) {
    root.lang = l; root.dir = l === "ar" ? "rtl" : "ltr";
    var t = root.getAttribute("data-title-" + l); if (t) document.title = t;
    var b = document.getElementById("langBtn"); if (b) b.textContent = l === "ar" ? "English" : "العربية";
  }
  applyLang(load("lang") || sysLang());

  // theme: saved choice, else follow the system (CSS handles that via prefers-color-scheme)
  var savedTheme = load("theme");
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(root.lang);
    var lb = document.getElementById("langBtn");
    if (lb) lb.addEventListener("click", function () { var l = root.lang === "ar" ? "en" : "ar"; save("lang", l); applyLang(l); });
    var tb = document.getElementById("themeBtn");
    if (tb) tb.addEventListener("click", function () { var t = isDark() ? "light" : "dark"; root.setAttribute("data-theme", t); save("theme", t); });

    // highlight the download that matches this device
    var ua = navigator.userAgent || "", os = "";
    if (/android/i.test(ua)) os = "android";
    else if (/iphone|ipad|ipod/i.test(ua)) os = "ios";
    else if (/mac/i.test(navigator.platform || ua)) os = "mac";
    else if (/win/i.test(navigator.platform || ua)) os = "win";
    else if (/linux/i.test(ua)) os = "linux";
    document.querySelectorAll("[data-os]").forEach(function (el) {
      if (el.getAttribute("data-os") === os) el.classList.add("mine");
    });
    var tabFor = { android: "android", win: "win", mac: "mac", linux: "linux" }[os];

    // install tabs
    var tabs = document.querySelectorAll("[role=tab]");
    function select(id) {
      tabs.forEach(function (t) {
        var on = t.getAttribute("aria-controls") === id;
        t.setAttribute("aria-selected", on ? "true" : "false");
        var p = document.getElementById(t.getAttribute("aria-controls")); if (p) p.hidden = !on;
      });
    }
    tabs.forEach(function (t) { t.addEventListener("click", function () { select(t.getAttribute("aria-controls")); }); });
    if (tabs.length) select(tabFor ? "p-" + tabFor : tabs[0].getAttribute("aria-controls"));
  });
})();
