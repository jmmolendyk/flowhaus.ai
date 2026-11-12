// Insights: one entry per article or piece of work product. Newest first on the
// page (sorted by date). While this list is empty, the Insights strip on the
// home page and its nav link stay hidden.
//
// Each entry needs a matching page at insights/<slug>/index.html
// (copy _templates/article.html to start one).
//
// Fields:
//   slug     URL part, e.g. "risk-tiers" -> /insights/risk-tiers/
//   title    Headline
//   type     "Article", "Template", "Framework", or "Talk"
//   date     "YYYY-MM-DD"
//   summary  One or two sentences shown on the card
//   readTime optional, e.g. "6 min read"
window.FLOWHAUS_INSIGHTS = [
];
