import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "ce" | "new";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
        variant === "default" &&
          "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300",
        variant === "ce" &&
          "bg-gradient-to-r from-violet-100 to-primary-100 text-violet-700 dark:from-violet-900/40 dark:to-primary-900/40 dark:text-violet-300",
        variant === "new" &&
          "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
      )}
    >
      {children}
    </span>
  );
}
