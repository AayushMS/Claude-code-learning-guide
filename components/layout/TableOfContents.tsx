"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import type { TocItem } from "@/lib/navigation";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: 0 }
    );

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside className="hidden w-56 shrink-0 xl:block">
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pb-10 pl-4">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">
          On this page
        </h4>
        <ul className="space-y-1 border-l border-surface-200 dark:border-dark-border">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={clsx(
                  "-ml-px block border-l-2 py-1 text-sm transition-colors",
                  item.level === 3 ? "pl-7" : "pl-4",
                  activeId === item.id
                    ? "border-primary-500 font-medium text-primary-600 dark:text-primary-400"
                    : "border-transparent text-surface-500 hover:border-surface-300 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-300"
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
