# Flowhaus.ai Website PRD (v0.7)

**Owner:** John Molendyk, Principal Consultant, Adaptive AI Governance
**Domain:** flowhaus.ai
**Build:** static site (HTML/CSS/JS) in this repo, hosted free on GitHub Pages. No CMS; content lives in files. Changes are made by Claude Code sessions or direct file edits.

## Purpose
A single-page site that tells prospects what Flowhaus does, why it is credible, and how to start a conversation. Blog and knowledge articles follow later.

## Positioning (locked)
- **Hero:** Adaptive AI governance, built for how your organization works.
- **Subhead:** Governance scaled to your needs, with oversight that meets your organization the way it works.
- **Title:** Principal Consultant, Adaptive AI Governance
- **Descriptor:** Fractional AI governance and advisory (process design de-emphasized in v0.5)
- **Voice:** first person, real headshot, Flowhaus as the practice brand.
- Right-sizing governance is the differentiator and appears in the hero, services, and approach.

## Audience
1. Owners of small consulting firms and mid-sized organizations needing AI governance with no in-house expertise.
2. Hiring leaders (CIO, COO, Risk, Compliance, Privacy) evaluating an independent or fractional governance lead.
3. Peers and referrers in privacy, legal, and audit.

## Page structure (single page)
1. Sticky header: logo, Fractional, Consulting, Approach, Insights (hidden until populated), About, Past work (hidden until populated), Book a call
2. Hero (lighthouse motif; single CTA; credential chips band along the bottom: AIGP, ISO/IEC 42001 Lead Implementer (BSI), CIPM)
3. The problem
4. **Fractional AI Governance**: the core offering
5. Focused consulting outcomes ("Also available"): three tiers (See it, Govern it, Prove it)
6. Approach (five principles)
7. Insights strip (hidden until `data/insights.js` has entries): compact row of up to three newest pieces between Approach and About, each linking to its own page at /insights/<slug>/; /insights/ lists all (noindex until the first piece is published)
8. About and credentials (bucketed)
9. Past work: "Selected experience / From my past work", with an intro line and employer-labelled cards (hidden until `data/cases.js` has entries)
10. Contact: Calendly discovery call plus a minimal form
11. Footer

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
