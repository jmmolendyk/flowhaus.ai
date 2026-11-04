# Flowhaus.ai Website PRD (v0.5)

**Owner:** John Molendyk, Principal Consultant, Adaptive AI Governance
**Domain:** flowhaus.ai
**Build:** static site (HTML/CSS/JS) in this repo, hosted free on GitHub Pages. No CMS; content lives in files. Changes are made by Claude Code sessions or direct file edits.

## Purpose
A single-page site that tells prospects what Flowhaus does, why it is credible, and how to start a conversation. Blog and knowledge articles follow later.

## Positioning (locked)
- **Hero:** Adaptive AI governance, built for how your organization works.
- **Subhead:** Governance scaled to your size, risk, and appetite, with oversight that fits the way your people already work.
- **Title:** Principal Consultant, Adaptive AI Governance
- **Descriptor:** Fractional AI governance and advisory (process design de-emphasized in v0.5)
- **Voice:** first person, real headshot, Flowhaus as the practice brand.
- Right-sizing governance is the differentiator and appears in the hero, services, and approach.

## Audience
1. Owners of small consulting firms and mid-sized organizations needing AI governance with no in-house expertise.
2. Hiring leaders (CIO, COO, Risk, Compliance, Privacy) evaluating an independent or fractional governance lead.
3. Peers and referrers in privacy, legal, and audit.

## Page structure (single page)
1. Sticky header: logo, Fractional, Consulting, Approach, About, Selected work (hidden until populated), Book a call
2. Hero (lighthouse motif)
3. The problem
4. **Fractional AI Governance**: the core offering
5. Focused consulting outcomes ("Also available"): three tiers (See it, Govern it, Prove it), with process and workflow design as a light optional note
6. Approach (five principles)
7. About and credentials (bucketed)
8. Selected work (hidden until `data/cases.js` has entries)
9. Contact: Calendly discovery call plus a minimal form
10. Footer

## Offering structure
**Core: Fractional AI Governance.** An ongoing governance lead sized to the organization, kept deliberately general: no committed deliverables, no pricing on the page. Focus areas: governance controls that fit how the organization operates; review of how coming regulation affects AI use; performance monitoring summaries for leadership; guidance as use and risk change; continued support toward long-term ownership and transition to the organization.

**Also available: focused consulting outcomes** (standalone, or as part of fractional):
- **See it:** AI & Agent Inventories; AI Risk & Impact Assessments
- **Govern it:** Corporate AI Policies; Custom Governance Frameworks
- **Prove it:** EU AI Act Readiness; ISO/IEC 42001 Readiness & Implementation
- **Optional note (not a service tier):** process and workflow design, framed as a skill brought where it helps, never a prerequisite. "Optimize before automate" is no longer a headline principle.

## Approach principles
Right-size it; Meet you where you are; Start with a problem; Learn through pilots; Governance that moves.

## Credentials (bucketed)
- **AI Governance & Privacy:** AIGP, ISO/IEC 42001 Lead Implementer (BSI), CIPM
- **Process Engineering & Product Delivery:** Six Sigma Black Belt, CSM, CSPO
- **Human-Centered Design:** M.S., HCI & Design, UC Irvine
- Education line: B.A., Organizational Leadership
- Left off: PMP, CIPP/US (until earned)

## Selected work (proof panel)
- Hidden entirely until at least one case exists in `data/cases.js`.
- Each case is a card; clicking opens a modal on top with context, challenge, what I did, and outcome (all optional beyond title and summary).
- Modal: focus trap, Esc and backdrop close, focus returns to the card, background scroll locked, full-screen sheet on mobile.
- Cases are written by John and anonymized as needed.

## Contact
- One CTA everywhere: **Book a discovery call** (single Calendly event type, with an intake question on interest).
- Minimal contact form (name, email, "What are you trying to solve?") through a form service, since the site has no backend. No email address displayed.

## Design direction
Calm, precise, human; Bauhaus-leaning structure. Night-sea navy, warm paper, one amber "beam" accent. Jost headings, Inter body, both self-hosted. Custom lighthouse line-art in the header and hero, with a slow, subtle beam sweep that is disabled for reduced-motion users. The Fractional section has its own treatment. No stock imagery.

## Requirements
- Responsive, WCAG 2.2 AA target, keyboard accessible, reduced-motion support.
- Fast: no third-party fonts or trackers; Calendly loads only when configured.
- SEO basics: title, meta, Open Graph, canonical, structured data (Organization, Person). Still to add: sitemap, robots.txt, 404.
- Privacy-respecting analytics (Plausible or similar), not yet added.

## Open items before launch
1. Calendly URL (`CALENDLY_URL` in `main.js`).
2. Form service endpoint (replace `YOUR_FORM_ID` in `index.html`), or Netlify Forms.
3. LinkedIn URL (`LINKEDIN_URL` in `main.js`; hidden until set).
4. Review all copy, especially the About bio and service value statements.
5. GitHub Pages setup and DNS for flowhaus.ai.
6. Sitemap, robots.txt, 404, analytics.
7. Proof cases and first articles (John).
