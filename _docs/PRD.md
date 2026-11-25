# Flowhaus.ai Website PRD (v1.0)

**Owner:** John Molendyk, Principal Consultant, AI Enablement and Governance
**Domain:** flowhaus.ai
**Build:** static site (HTML/CSS/JS) in this repo, hosted free on GitHub Pages. No CMS; content lives in files. Changes are made by Claude Code sessions or direct file edits.

## Purpose
A single-page site that tells prospects what Flowhaus does, why it is credible, and how to start a conversation. Blog and knowledge articles follow later.

## Positioning (locked)
- **Hero:** Adaptive AI governance, built for how your organization works.
- **Subhead:** Governance scaled to your needs, with oversight that meets your organization the way it works.
- **Title:** Principal Consultant, AI Enablement and Governance
- **Descriptor:** Fractional AI governance and advisory (process design de-emphasized in v0.5)
- **Voice:** first person, real headshot, Flowhaus as the practice brand.
- Right-sizing governance is the differentiator and appears in the hero, services, and approach.

## Audience
1. Owners of small consulting firms and mid-sized organizations needing AI governance with no in-house expertise.
2. Hiring leaders (CIO, COO, Risk, Compliance, Privacy) evaluating an independent or fractional governance lead.
3. Peers and referrers in privacy, legal, and audit.

## Page structure (single page, plus /governance/ and /services/)
1. Sticky header: logo, Approach, AI Governance, Insights (hidden until populated), About, Past work (hidden until populated), Book a call
2. Hero (lighthouse motif; single CTA; headline "From AI strategy to adoption, responsibly"; label "AI enablement and responsible AI")
3. Statement band: "20+ years delivering in regulated industries such as financial services, healthcare, and technology", on its own, large, with generous spacing
4. Credential chips band: AIGP, ISO/IEC 42001 Lead Implementer (BSI), CIPM
5. The opportunity
6. The reality (four cards: strategy without follow-through, tools without adoption, use without visibility, rules that don't fit)
7. Approach: "Optimize, then automate." Four steps (define and measure; optimize, then automate; measure and improve; transfer ownership), plus two supporting ideas (governance as an enabler; design for adoption). Language adapted from johnmolendyk.com/approach
8. **AI Governance** summary: Fractional AI Governance, ISO/IEC 42001 Implementation, Focused Governance (each with a short subhead), a "What it focuses on" panel, and a Learn more button to /governance/
9. Insights strip (hidden until `data/insights.js` has entries), between AI Governance and About, linking to /insights/<slug>/ (noindex until the first piece is published)
10. About and credentials (buckets in order: Process Engineering & Product Delivery, AI Governance & Privacy, Human-Centered Design), ending with the independence statement and a "learn more" link to johnmolendyk.com (new window)
11. Past work: "Selected experience / From my past work", employer-labelled cards in the order Meta, Wells Fargo, B. Braun Medical, Union Bank (hidden until `data/cases.js` has entries)
12. Contact: Calendly discovery call plus a minimal form
13. Footer: governance frameworks line (NIST AI RMF, ISO/IEC 42001, EU AI Act, OECD AI Principles, privacy and data governance), copyright, LinkedIn

## AI Governance landing page (/governance/)
Holds the detail moved off the homepage, in this order: intro hero (left-aligned to the standard page width) with a jump nav, Fractional AI Governance (short description of how fractional work is scoped, plus a "Fractional services" panel), the ISO/IEC 42001 Lead Implementer band, Focused governance outcomes (six cards linking to service pages), and the Insights strip (hidden until `data/insights.js` has entries, same component as the homepage). A start for the governance landing page; to be expanded.

## Service pages (/services/<slug>/)
One page per consulting outcome, generated from `_docs/build-services.py` (edit the data there and re-run, or edit the HTML directly). Structure: tier label and headline, why it matters (sourced statistics or a dates table, with a visible source line), what goes into it (five steps), what you have at the end (artifact cards, with a commented-out slot for example images), learn more (external reading, plus the owner's own articles over time), and a discovery-call CTA. Slugs: ai-agent-inventory, ai-risk-impact-assessments, corporate-ai-policies, custom-governance-frameworks, eu-ai-act-nist-readiness, iso-42001-readiness. All are in the sitemap. Statistics must carry a source and a year. Copy states that Flowhaus is not a certification body or law firm where relevant.

## Offering structure
**Core: Fractional AI Governance.** An ongoing governance lead sized to the organization, kept deliberately general: no committed deliverables, no pricing on the page. Focus areas: governance controls that fit how the organization operates; review of how coming regulation affects AI use; performance monitoring summaries for leadership; guidance as use and risk change; continued support toward long-term ownership and transition to the organization.

**Also available: focused consulting outcomes** (standalone, or as part of fractional):
- **See it:** AI & Agent Inventories; AI Risk & Impact Assessments
- **Govern it:** Corporate AI Policies; Custom Governance Frameworks
- **Prove it:** EU AI Act & NIST AI RMF Readiness; ISO/IEC 42001 Readiness & Implementation
- Process and workflow design is not called out on the page; "optimize before automate" is no longer a headline principle.

## Approach principles
Right-size it; Meet you where you are; Start with a problem; Learn through pilots; Governance that moves.

## Credentials (bucketed)
- **AI Governance & Privacy:** AIGP, ISO/IEC 42001 Lead Implementer (BSI), CIPM
- **Process Engineering & Product Delivery:** Six Sigma Black Belt, CSM, CSPO
- **Human-Centered Design:** M.S., HCI & Design, UC Irvine
- Education line: B.A., Organizational Leadership
- Left off: PMP, CIPP/US (until earned)

## Past work (proof panel)
- Hidden entirely until at least one case exists in `data/cases.js`.
- Each case is a card; clicking opens a modal on top with context, challenge, what I did, and outcome (all optional beyond title and summary).
- Modal: focus trap, Esc and backdrop close, focus returns to the card, background scroll locked, full-screen sheet on mobile.
- Cases are written by John and anonymized as needed.

## Contact
- One CTA everywhere: **Book a discovery call** (single Calendly event type, with an intake question on interest).
- Minimal contact form (name, email, "What are you trying to solve?") through a form service, since the site has no backend. No email address displayed.

## Design direction
**Site feel: "The Ethical Pioneer."** Clean, human-centric, highly professional corporate light mode: white #FFFFFF, off-black text #0F172A, slate hairline borders, stone #F4F6F8 bands. One structural accent, deep forest green #0f5a3c (hover #0b4a31), for buttons, data points, tags and labels; muted labels use a green-slate #4A6155. Gold #f5b800 is reserved for the lighthouse lamp and beam, a small marker, and a thin hover underline on buttons; never for text or thin lines on light backgrounds (1.8:1 on white). Radii 2-4px, strict gridlines, no warm cream/beige or soft organic shapes. IBM Plex Sans for text and IBM Plex Mono for technical labels (credential chips, framework tags, spec rows), both self-hosted. Hero is a line-art close-up of the lighthouse lantern and beam with a subtle sweep (disabled for reduced-motion users). Fractional section is a spec sheet; consulting cards carry framework tags; a frameworks strip sits under the credential chips; the contact section previews what a discovery call covers. No stock imagery. (v0.7: palette changed from royal blue and amber to green and gold.)

## Requirements
- Responsive, WCAG 2.2 AA target, keyboard accessible, reduced-motion support.
- Fast: no third-party fonts or trackers; Calendly loads only when configured.
- SEO basics: title, meta, Open Graph, canonical, structured data (Organization, Person). Still to add: sitemap, robots.txt, 404.
- Privacy-respecting analytics (Plausible or similar), not yet added.

## Status and open items
Done: Calendly (https://calendly.com/johnmolendyk/1-1), Web3Forms contact form, LinkedIn link in footer.
Before launch:
1. Confirm the Calendly event is set to 30 minutes (page copy says "30-minute discovery call").
2. Review all copy, especially the About bio and consulting outcome descriptions.
3. GitHub Pages setup and DNS for flowhaus.ai.
4. Sitemap, robots.txt, 404, analytics.
5. Proof cases and first articles (John).
