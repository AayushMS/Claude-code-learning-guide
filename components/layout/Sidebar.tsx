"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { sidebarGroups } from "@/lib/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pb-10 pr-4">
        <nav className="space-y-8">
          {sidebarGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">
                {group.title}
              </h4>
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                          : "text-surface-600 hover:bg-surface-50 hover:text-surface-900 dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-surface-200"
                      )}
                    >
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <span className="sparkle text-violet-500">{item.badge}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
