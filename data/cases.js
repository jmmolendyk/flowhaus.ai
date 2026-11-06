// Selected work: add one entry per case. While this list is empty,
// the "Selected work" section and its nav link stay hidden.
//
// Fields (all optional except title and summary):
//   title, summary, tags: [], org, role, period, context, challenge, approach,
//   results: [] (short bullets), outcome, relevance
//
// Example (delete the leading // on each line to try it):
// {
//   title: "Example case title",
//   summary: "One-line outcome shown on the card.",
//   tags: ["Governance", "Process"],
//   context: "Who the client was and the situation.",
//   challenge: "What was hard or at risk.",
//   approach: "What I did.",
//   outcome: "What changed as a result."
// },
window.FLOWHAUS_CASES = [
  {
    // SAMPLE ENTRY: replace the bracketed text with your own details before going live.
    title: "Voice features people trusted enough to try",
    summary: "Redesigned speech-to-text disclosures for Meta Quest voice features, increasing trust and first-time voice adoption while preserving regulatory intent.",
    tags: ["Privacy by design", "Human-centered design", "Regulatory intent"],
    org: "Meta",
    role: "Senior Researcher",
    period: "[dates]",
    context: "[Who the team was and what the voice feature did. Keep to what you are free to share.]",
    challenge: "[What was at stake: disclosures had to meet regulatory intent, but people were not engaging with voice features.]",
    approach: "[What you did: how you researched, redesigned the disclosures, and worked with legal, policy and product.]",
    results: [
      "Trust in the voice features increased [add figure if shareable]",
      "First-time voice adoption increased [add figure if shareable]",
      "Regulatory intent preserved"
    ],
    outcome: "[One sentence on what the team could do afterward that it could not before.]",
    relevance: "[Why this matters for AI governance: controls people understand get used, and governance that is trusted speeds adoption instead of slowing it.]"
  }
];
