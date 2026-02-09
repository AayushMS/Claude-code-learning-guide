const layers = [
  {
    name: "CLAUDE.local.md",
    scope: "Personal project preferences",
    specificity: "Most specific",
    color: "bg-violet-500",
    width: "w-full",
  },
  {
    name: ".claude/rules/*.md",
    scope: "Modular topic rules",
    specificity: "",
    color: "bg-primary-500",
    width: "w-[92%]",
  },
  {
    name: "./CLAUDE.md",
    scope: "Team project instructions",
    specificity: "",
    color: "bg-blue-500",
    width: "w-[84%]",
  },
  {
    name: "~/.claude/CLAUDE.md",
    scope: "Global personal preferences",
    specificity: "",
    color: "bg-cyan-500",
    width: "w-[76%]",
  },
  {
    name: "Auto memory",
    scope: "Claude's own learnings",
    specificity: "",
    color: "bg-teal-500",
    width: "w-[68%]",
  },
  {
    name: "Managed policy",
    scope: "Organization-wide rules",
    specificity: "Least specific",
    color: "bg-emerald-500",
    width: "w-[60%]",
  },
];

export function MemoryHierarchy() {
  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-surface-200 bg-white p-6 sm:p-8 dark:border-dark-border dark:bg-dark-surface">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-surface-900 dark:text-surface-100">
          Memory Hierarchy
        </h3>
        <span className="text-xs text-surface-400 dark:text-surface-500">
          most → least specific
        </span>
      </div>
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <div key={layer.name} className="flex items-center gap-4">
            <div className={`${layer.width} transition-all`}>
              <div className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-surface-100 bg-surface-50 p-3 transition-all hover:border-surface-200 hover:shadow-md dark:border-dark-border dark:bg-surface-800/50 dark:hover:border-surface-600">
                <div className={`h-8 w-1.5 shrink-0 rounded-full ${layer.color}`} />
                <div className="min-w-0 flex-1">
                  <code className="text-xs font-semibold text-surface-800 dark:text-surface-200">
                    {layer.name}
                  </code>
                  <p className="text-xs text-surface-500 dark:text-surface-400">
                    {layer.scope}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-mono text-surface-300 dark:text-surface-600">
                  {i + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 rounded-lg bg-violet-50 px-4 py-3 text-xs text-violet-700 dark:bg-violet-950/20 dark:text-violet-300">
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        Higher layers override lower layers. Use CLAUDE.local.md for personal preferences that shouldn&apos;t be committed.
      </div>
    </div>
  );
}
