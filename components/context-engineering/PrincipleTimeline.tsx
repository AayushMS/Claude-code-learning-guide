const principles = [
  {
    number: 1,
    title: "Design Around KV-Cache",
    description: "Stable prompt prefixes prevent cache invalidation. Structure prompts so the beginning stays constant.",
    icon: "🏗️",
  },
  {
    number: 2,
    title: "Mask, Don't Remove",
    description: "Use logit masking rather than removing tools. Removing tools invalidates the cache; masking keeps it intact.",
    icon: "🎭",
  },
  {
    number: 3,
    title: "Filesystem as External Memory",
    description: "Context window = volatile RAM; files = persistent disk. Write important state to files before it gets compacted away.",
    icon: "💾",
  },
  {
    number: 4,
    title: "Manipulate Attention Through Recitation",
    description: "Re-read plans before making decisions. Recent context gets more attention than distant context.",
    icon: "🔍",
  },
  {
    number: 5,
    title: "Keep the Wrong Stuff In",
    description: "Failed actions with stack traces help avoid repetition. Errors are valuable learning signals.",
    icon: "❌",
  },
  {
    number: 6,
    title: "Don't Get Few-Shotted",
    description: "Introduce variation to prevent pattern drift. Repetitive examples cause the model to over-fit to a pattern.",
    icon: "🔄",
  },
];

export function PrincipleTimeline() {
  return (
    <div className="my-10">
      <h3 className="mb-6 text-lg font-bold text-surface-900 dark:text-surface-100">
        The 6 Context Engineering Principles
      </h3>
      <p className="mb-8 text-sm text-surface-500 dark:text-surface-400">
        From Manus AI — battle-tested principles for building effective AI agents.
      </p>
      <div className="relative space-y-6 pl-8 before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-violet-500 before:via-primary-500 before:to-emerald-500">
        {principles.map((p) => (
          <div key={p.number} className="relative">
            <div className="absolute -left-8 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-surface-100 text-xs font-bold text-surface-600 shadow-sm dark:border-dark-bg dark:bg-surface-700 dark:text-surface-300">
              {p.number}
            </div>
            <div className="rounded-xl border border-surface-200 bg-white p-5 transition-all hover:shadow-md dark:border-dark-border dark:bg-dark-surface">
              <div className="flex items-start gap-3">
                <span className="text-lg">{p.icon}</span>
                <div>
                  <h4 className="font-semibold text-surface-900 dark:text-surface-100">
                    {p.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-surface-600 dark:text-surface-400">
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
