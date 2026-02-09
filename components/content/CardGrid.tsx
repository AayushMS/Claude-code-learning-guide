import clsx from "clsx";

interface CardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export function CardGrid({ children, columns = 3 }: CardGridProps) {
  return (
    <div
      className={clsx(
        "my-8 grid gap-4",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  gradient?: boolean;
}

export function FeatureCard({
  title,
  description,
  icon,
  href,
  gradient = false,
}: FeatureCardProps) {
  const content = (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-xl border p-5 transition-all",
        gradient
          ? "border-violet-200 bg-gradient-to-br from-violet-50 to-primary-50 hover:shadow-lg hover:shadow-violet-100/50 dark:border-violet-800/50 dark:from-violet-950/30 dark:to-primary-950/30 dark:hover:shadow-violet-900/20"
          : "border-surface-200 bg-white hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 dark:border-dark-border dark:bg-dark-surface dark:hover:border-primary-800/50 dark:hover:shadow-primary-900/20"
      )}
    >
      {icon && (
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
          {icon}
        </div>
      )}
      <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-100">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-surface-600 dark:text-surface-400">
        {description}
      </p>
      {href && (
        <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400">
          Learn more
          <svg
            className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    const LinkComponent = href.startsWith("http") ? "a" : require("next/link").default;
    if (href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    const Link = require("next/link").default;
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
