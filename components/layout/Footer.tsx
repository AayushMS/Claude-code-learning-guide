import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-surface-50 dark:border-dark-border dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary-500 to-violet-600 text-xs font-bold text-white">
              CC
            </div>
            <span className="text-sm text-surface-500 dark:text-surface-400">
              Claude Code Learning Guide
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-surface-500 dark:text-surface-400">
            <Link href="/context-engineering" className="transition-colors hover:text-primary-600 dark:hover:text-primary-400">
              Context Engineering
            </Link>
            <Link href="/getting-started" className="transition-colors hover:text-primary-600 dark:hover:text-primary-400">
              Get Started
            </Link>
            <a
              href="https://github.com/AayushMS/Claude-code-learning-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-surface-200 pt-6 text-center text-xs text-surface-400 dark:border-dark-border dark:text-surface-500">
          Built with Next.js and Tailwind CSS. Content sourced from the Claude Code ecosystem.
        </div>
      </div>
    </footer>
  );
}
