import clsx from "clsx";
import Link from "next/link";

interface CalloutProps {
  type?: "info" | "tip" | "warning" | "ce";
  title?: string;
  children: React.ReactNode;
}

const icons = {
  info: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  tip: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  ),
  ce: (
    <svg className="h-5 w-5 sparkle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

const styles = {
  info: "border-primary-200 bg-primary-50/50 dark:border-primary-800/50 dark:bg-primary-950/20",
  tip: "border-emerald-200 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20",
  warning: "border-amber-200 bg-amber-50/50 dark:border-amber-800/50 dark:bg-amber-950/20",
  ce: "border-violet-200 bg-gradient-to-r from-violet-50/50 to-primary-50/50 dark:border-violet-800/50 dark:from-violet-950/20 dark:to-primary-950/20",
};

const iconColors = {
  info: "text-primary-600 dark:text-primary-400",
  tip: "text-emerald-600 dark:text-emerald-400",
  warning: "text-amber-600 dark:text-amber-400",
  ce: "text-violet-600 dark:text-violet-400",
};

const defaultTitles = {
  info: "Info",
  tip: "Tip",
  warning: "Warning",
  ce: "Context Engineering Tip",
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  return (
    <div className={clsx("my-6 rounded-xl border p-4", styles[type])}>
      <div className="flex items-start gap-3">
        <span className={clsx("mt-0.5 shrink-0", iconColors[type])}>
          {icons[type]}
        </span>
        <div className="min-w-0 flex-1">
          <p className={clsx("text-sm font-semibold", iconColors[type])}>
            {title || defaultTitles[type]}
          </p>
          <div className="mt-1 text-sm text-surface-700 dark:text-surface-300 [&>p]:my-1">
            {children}
          </div>
          {type === "ce" && (
            <Link
              href="/context-engineering"
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
            >
              Learn more about Context Engineering
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
