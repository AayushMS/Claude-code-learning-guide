import { getHighlighter } from "@/lib/shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export async function CodeBlock({
  code,
  language = "text",
  title,
  showLineNumbers = false,
}: CodeBlockProps) {
  const highlighter = await getHighlighter();
  const loadedLangs = highlighter.getLoadedLanguages();
  const lang = loadedLangs.includes(language) ? language : "text";
  const html = highlighter.codeToHtml(code.trim(), {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });

  return (
    <div className="group relative my-6">
      {title && (
        <div className="rounded-t-xl border border-b-0 border-surface-200 bg-surface-100 px-4 py-2.5 text-xs font-medium text-surface-600 dark:border-dark-border dark:bg-surface-800 dark:text-surface-400">
          {title}
        </div>
      )}
      <div
        className={`overflow-x-auto rounded-xl border border-surface-200 text-sm leading-relaxed dark:border-dark-border ${title ? "rounded-t-none" : ""} ${showLineNumbers ? "[&_code]:counter-reset-[line] [&_[data-line]]:before:mr-6 [&_[data-line]]:before:inline-block [&_[data-line]]:before:w-4 [&_[data-line]]:before:text-right [&_[data-line]]:before:text-surface-400 [&_[data-line]]:before:content-[counter(line)] [&_[data-line]]:before:counter-increment-[line]" : ""}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
