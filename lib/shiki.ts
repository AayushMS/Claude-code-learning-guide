import { createHighlighter } from "shiki";

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: [
        "bash",
        "typescript",
        "javascript",
        "json",
        "yaml",
        "markdown",
        "jsx",
        "tsx",
        "python",
        "html",
        "css",
        "shell",
        "text",
        "powershell",
      ],
    });
  }
  return highlighter;
}
