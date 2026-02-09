interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
  gradient?: boolean;
}

export function PageHeader({ title, description, badge, gradient = false }: PageHeaderProps) {
  return (
    <div className="mb-10">
      {badge && (
        <div className="mb-3">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            {badge}
          </span>
        </div>
      )}
      <h1
        className={
          gradient
            ? "bg-gradient-to-r from-violet-600 via-primary-600 to-violet-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl dark:from-violet-400 dark:via-primary-400 dark:to-violet-400"
            : "text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl dark:text-surface-100"
        }
      >
        {title}
      </h1>
      <p className="mt-3 text-lg text-surface-600 dark:text-surface-400">{description}</p>
    </div>
  );
}
