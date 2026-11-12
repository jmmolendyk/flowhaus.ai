/* Flowhaus.ai: renders Insights cards from data/insights.js */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var all = (Array.isArray(window.FLOWHAUS_INSIGHTS) ? window.FLOWHAUS_INSIGHTS : [])
    .slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function fmt(d) {
    var dt = new Date(d + "T12:00:00");
    return isNaN(dt) ? d : dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  function card(item) {
    var a = el("a", "insight-card");
    a.href = "/insights/" + item.slug + "/";
    a.appendChild(el("span", "insight-type", item.type || "Article"));
    a.appendChild(el("h3", "", item.title));
    if (item.summary) a.appendChild(el("p", "", item.summary));
    a.appendChild(el("span", "insight-meta", [fmt(item.date), item.readTime].filter(Boolean).join(" · ")));
    return a;
  }
  function render(target, items) {
    target.textContent = "";
    items.forEach(function (i) { target.appendChild(card(i)); });
  }

  if (all.length) {
    var links = document.querySelectorAll('[data-needs="insights"]');
    for (var k = 0; k < links.length; k++) links[k].hidden = false;
  }
  var strip = $("#insight-grid");
  if (strip && all.length) {
    var limit = parseInt(strip.getAttribute("data-limit"), 10) || 3;
    render(strip, all.slice(0, limit));
    $("#insights").hidden = false;
  }
  var list = $("#insight-list");
  if (list) {
    if (all.length) render(list, all);
    else list.appendChild(el("p", "insight-empty", "Articles are on the way."));
  }
})();
