const pillars = [
  {
    number: "01",
    title: "System Prompt",
    description: 'Minimal, precise instructions — "say less, mean more." Your system prompt sets the behavioral foundation.',
    details: ["Keep it concise and focused", "Define role and constraints", "Avoid redundant instructions"],
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "02",
    title: "Tools",
    description: "Self-contained, non-overlapping, purpose-specific tools that extend Claude's capabilities.",
    details: ["One tool per responsibility", "Clear input/output contracts", "No overlapping functionality"],
    color: "from-primary-500 to-blue-600",
  },
  {
    number: "03",
    title: "Data Retrieval",
    description: "Just-in-time context, not pre-loaded dumps. Fetch what's needed, when it's needed.",
    details: ["Lazy loading over eager loading", "Structured data over raw dumps", "Relevance filtering"],
    color: "from-cyan-500 to-teal-600",
  },
  {
    number: "04",
    title: "Long-Horizon Optimizations",
    description: "History compression, note-taking, and sub-agents for sustained effectiveness across sessions.",
    details: ["Context window management", "Persistent memory via files", "Delegation to sub-agents"],
    color: "from-amber-500 to-orange-600",
  },
];

export function PillarGrid() {
  return (
    <div className="my-10 grid gap-4 sm:grid-cols-2">
      {pillars.map((pillar) => (
        <div
          key={pillar.number}
          className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-white p-6 transition-all hover:shadow-xl dark:border-dark-border dark:bg-dark-surface"
        >
          {/* Gradient top bar */}
          <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${pillar.color}`} />
          <div className="flex items-start gap-4">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.color} text-sm font-bold text-white shadow-lg`}>
              {pillar.number}
            </span>
            <div>
              <h3 className="text-lg font-bold text-surface-900 dark:text-surface-100">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">
                {pillar.description}
              </p>
              <ul className="mt-3 space-y-1">
                {pillar.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-xs text-surface-500 dark:text-surface-400">
                    <span className="h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
