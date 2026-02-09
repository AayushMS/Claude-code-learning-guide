import { Metadata } from "next";
import { CodeBlock } from "@/components/content/CodeBlock";
import { Callout } from "@/components/content/Callout";
import { PageHeader } from "@/components/content/PageHeader";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Keyboard shortcuts, GitHub integration, and curated resources for Claude Code — a quick-reference guide covering essential keybindings, slash commands, CI/CD workflows, and hand-picked learning materials.",
};

const kbd =
  "rounded border border-surface-300 bg-surface-100 px-1.5 py-0.5 text-xs font-mono font-semibold text-surface-700 dark:border-surface-600 dark:bg-surface-800 dark:text-surface-300";

export default function ReferencePage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Reference"
        description="Keyboard shortcuts, GitHub integration, and curated resources for Claude Code."
        badge="Sections 12-14"
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* Section 12 — Keyboard Shortcuts                                  */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="keyboard-shortcuts">Keyboard Shortcuts</h2>
        <p>
          Claude Code&apos;s terminal interface is designed for speed. Learning a
          handful of keyboard shortcuts will dramatically reduce friction and
          keep you in flow.
        </p>

        <h3>Essential Shortcuts</h3>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Shortcut
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {(
                [
                  ["Shift+Tab", "Toggle between Plan and Act modes"],
                  ["Esc", "Stop the current generation"],
                  ["Esc Esc", "Rewind to the previous turn (double-tap)"],
                  ["Ctrl+G", "Open file in your $EDITOR (or VS Code)"],
                  ["Ctrl+B", "Send the current task to run in the background"],
                  ["Ctrl+T", "Open the task list / task switcher"],
                  ["Ctrl+V", "Paste an image from clipboard into the prompt"],
                  ["Alt+P", "Switch to a different model"],
                  ["Alt+T", "Toggle extended thinking on / off"],
                  ["Up / Down", "Scroll through prompt history"],
                  ["?", "Show the full shortcuts reference"],
                ] as const
              ).map(([shortcut, action], i) => (
                <tr
                  key={shortcut}
                  className={
                    i % 2 === 1
                      ? "bg-surface-50/50 dark:bg-surface-800/25"
                      : undefined
                  }
                >
                  <td className="px-4 py-3">
                    <kbd className={kbd}>{shortcut}</kbd>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    {action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Quick Prefixes                                                    */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="quick-prefixes">Quick Prefixes</h2>
        <p>
          Typing a special character at the very start of your prompt activates
          a different input mode:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Prefix
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Mode
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {(
                [
                  [
                    "/",
                    "Slash command",
                    "/init, /compact, /clear",
                  ],
                  [
                    "!",
                    "Bash mode — run a shell command directly",
                    "!git status",
                  ],
                  [
                    "@",
                    "File mention — attach a file to the prompt",
                    "@src/index.ts explain this file",
                  ],
                ] as const
              ).map(([prefix, mode, example], i) => (
                <tr
                  key={prefix}
                  className={
                    i % 2 === 1
                      ? "bg-surface-50/50 dark:bg-surface-800/25"
                      : undefined
                  }
                >
                  <td className="px-4 py-3">
                    <kbd className={kbd}>{prefix}</kbd>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    {mode}
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {example}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Slash Commands                                                    */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="slash-commands">Essential Slash Commands</h2>
        <p>
          Slash commands are typed directly into the Claude Code prompt. They
          control session state, manage memory, toggle features, and more.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Command
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {(
                [
                  ["/clear", "Wipe the conversation and start fresh"],
                  [
                    "/compact",
                    "Summarize the conversation to free up context window space",
                  ],
                  [
                    "/init",
                    "Generate (or regenerate) the project\u2019s CLAUDE.md file",
                  ],
                  [
                    "/plan",
                    "Enter plan mode — Claude outlines an approach without writing code",
                  ],
                  [
                    "/rewind",
                    "Roll back the conversation to the previous turn",
                  ],
                  ["/model", "Switch to a different model mid-session"],
                  [
                    "/memory",
                    "Open the CLAUDE.md memory file for manual editing",
                  ],
                  ["/hooks", "Manage lifecycle hooks (pre/post commands)"],
                  ["/mcp", "Manage MCP server connections"],
                  [
                    "/context",
                    "View and manage attached context (files, URLs, images)",
                  ],
                  ["/cost", "Show token usage and estimated cost so far"],
                  ["/stats", "Display session statistics"],
                  ["/vim", "Toggle vim keybindings in the prompt input"],
                  ["/tasks", "View and manage background tasks"],
                  [
                    "/export",
                    "Export the current conversation to a file (Markdown or JSON)",
                  ],
                ] as const
              ).map(([cmd, desc], i) => (
                <tr
                  key={cmd}
                  className={
                    i % 2 === 1
                      ? "bg-surface-50/50 dark:bg-surface-800/25"
                      : undefined
                  }
                >
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {cmd}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    {desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Section 13 — GitHub Integration                                  */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="github-integration">GitHub Integration</h2>
        <p>
          Claude Code integrates directly with GitHub through a first-party
          GitHub App. Once installed, you can tag{" "}
          <code>@claude</code> in issues, pull requests, and review comments to
          have Claude implement features, fix bugs, or review code &mdash; all
          within your CI/CD pipeline.
        </p>

        <h3>GitHub Actions Workflow</h3>
        <p>
          Add the following workflow file to your repository to enable the{" "}
          <code>@claude</code> integration:
        </p>
      </article>

      <CodeBlock
        language="yaml"
        title=".github/workflows/claude.yml"
        code={`name: Claude Code
on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  issues:
    types: [opened, assigned]
  pull_request_review:
    types: [submitted]

jobs:
  claude:
    if: |
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@claude')) ||
      (github.event_name == 'issues' && contains(github.event.issue.body, '@claude'))
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      issues: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 1
      - uses: anthropics/claude-code-action@beta
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          claude_code_oauth_token: \${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Usage Examples</h3>
        <p>
          Once the workflow is in place, you can interact with Claude directly
          from GitHub:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Where
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Example Comment
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  What Happens
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {(
                [
                  [
                    "Issue",
                    "@claude implement this feature",
                    "Claude creates a PR with the implementation",
                  ],
                  [
                    "PR comment",
                    "@claude fix the failing tests",
                    "Claude pushes a fix commit to the PR branch",
                  ],
                  [
                    "PR review",
                    "@claude review this PR",
                    "Claude posts a detailed code review",
                  ],
                  [
                    "Issue",
                    "@claude plan how to refactor this module",
                    "Claude replies with a structured plan",
                  ],
                ] as const
              ).map(([where, example, result], i) => (
                <tr
                  key={example}
                  className={
                    i % 2 === 1
                      ? "bg-surface-50/50 dark:bg-surface-800/25"
                      : undefined
                  }
                >
                  <td className="px-4 py-3 font-medium text-surface-700 dark:text-surface-300">
                    {where}
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {example}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    {result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Quick Setup</h3>
        <p>
          The fastest way to set up GitHub integration is with the built-in
          installer command:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Install the GitHub App"
        code={`# Run inside your repo directory
claude /install-github-app`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          This command walks you through authorizing the GitHub App, adding the
          workflow file, and configuring the required secrets &mdash; all in one
          step.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* Section 14 — Curated Resources                                   */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="official-documentation">Official Documentation</h2>
        <p>
          The canonical resources from Anthropic. Bookmark these &mdash; they
          are updated frequently and are the single source of truth for Claude
          Code behaviour.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Resource
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  URL
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {(
                [
                  [
                    "Quickstart Guide",
                    "https://docs.anthropic.com/en/docs/claude-code/overview",
                  ],
                  [
                    "Best Practices",
                    "https://docs.anthropic.com/en/docs/claude-code/best-practices",
                  ],
                  [
                    "Skills",
                    "https://docs.anthropic.com/en/docs/claude-code/skills",
                  ],
                  [
                    "Sub-Agents",
                    "https://docs.anthropic.com/en/docs/claude-code/sub-agents",
                  ],
                  [
                    "Hooks",
                    "https://docs.anthropic.com/en/docs/claude-code/hooks",
                  ],
                  [
                    "MCP (Model Context Protocol)",
                    "https://docs.anthropic.com/en/docs/claude-code/mcp",
                  ],
                  [
                    "Memory & CLAUDE.md",
                    "https://docs.anthropic.com/en/docs/claude-code/memory",
                  ],
                  [
                    "GitHub Actions",
                    "https://docs.anthropic.com/en/docs/claude-code/github-actions",
                  ],
                  [
                    "VS Code Extension",
                    "https://docs.anthropic.com/en/docs/claude-code/vscode",
                  ],
                  [
                    "CLI Reference",
                    "https://docs.anthropic.com/en/docs/claude-code/cli-reference",
                  ],
                  [
                    "Common Workflows",
                    "https://docs.anthropic.com/en/docs/claude-code/common-workflows",
                  ],
                  [
                    "Full Documentation",
                    "https://docs.anthropic.com/en/docs/claude-code",
                  ],
                ] as const
              ).map(([resource, url], i) => (
                <tr
                  key={resource}
                  className={
                    i % 2 === 1
                      ? "bg-surface-50/50 dark:bg-surface-800/25"
                      : undefined
                  }
                >
                  <td className="px-4 py-3 font-medium text-surface-700 dark:text-surface-300">
                    {resource}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 underline decoration-primary-300 underline-offset-2 hover:text-primary-700 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300"
                    >
                      {url.replace("https://", "")}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Academy Courses                                                   */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="academy-courses">Academy Courses</h2>
        <p>
          Free, self-paced courses from Anthropic Academy. Each one awards a
          certificate of completion. See the dedicated{" "}
          <a href="/academy">Academy page</a> for detailed track information.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Course
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {(
                [
                  [
                    "Claude Code in Action",
                    "https://anthropic.skilljar.com/claude-code-in-action",
                  ],
                  [
                    "Building with the Claude API",
                    "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
                  ],
                  [
                    "Intro to MCP",
                    "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
                  ],
                  [
                    "MCP Advanced Topics",
                    "https://anthropic.skilljar.com/model-context-protocol-advanced-topics",
                  ],
                  [
                    "Claude 101",
                    "https://anthropic.skilljar.com/claude-101",
                  ],
                  [
                    "AI Fluency Framework",
                    "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
                  ],
                ] as const
              ).map(([course, url], i) => (
                <tr
                  key={course}
                  className={
                    i % 2 === 1
                      ? "bg-surface-50/50 dark:bg-surface-800/25"
                      : undefined
                  }
                >
                  <td className="px-4 py-3 font-medium text-surface-700 dark:text-surface-300">
                    {course}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 underline decoration-primary-300 underline-offset-2 hover:text-primary-700 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300"
                    >
                      {url.replace("https://", "")}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Skills & Marketplace                                              */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="skills-marketplace">Skills &amp; Marketplace</h2>
        <p>
          Skills are reusable markdown instructions that extend Claude Code&apos;s
          capabilities. The following resources provide curated collections of
          community and official skills.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Resource
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {(
                [
                  [
                    "SkillsMP (Community Marketplace)",
                    "https://skillsmp.com",
                  ],
                  [
                    "Anthropic Official Skills",
                    "https://github.com/anthropics/skills",
                  ],
                  [
                    "planning-with-files Skill",
                    "https://github.com/obra/superpowers/tree/main/skills/writing-plans",
                  ],
                  [
                    "test-driven-development Skill",
                    "https://github.com/obra/superpowers/tree/main/skills/test-driven-development",
                  ],
                  [
                    "Claude Code Custom Skills Docs",
                    "https://docs.anthropic.com/en/docs/claude-code/skills",
                  ],
                ] as const
              ).map(([resource, url], i) => (
                <tr
                  key={resource}
                  className={
                    i % 2 === 1
                      ? "bg-surface-50/50 dark:bg-surface-800/25"
                      : undefined
                  }
                >
                  <td className="px-4 py-3 font-medium text-surface-700 dark:text-surface-300">
                    {resource}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 underline decoration-primary-300 underline-offset-2 hover:text-primary-700 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300"
                    >
                      {url.replace("https://", "")}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Community Resources                                               */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="community-resources">Community Resources</h2>
        <p>
          The Claude Code community is active across GitHub, Reddit, and
          various forums. Here are some of the most useful community-maintained
          resources.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Resource
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {(
                [
                  [
                    "Awesome CLAUDE.md Templates",
                    "https://github.com/josix/awesome-claude-md",
                  ],
                  [
                    "Advanced Claude Code Patterns",
                    "https://github.com/jawhnycooke/advanced-claude-code-patterns",
                  ],
                  [
                    "Claude Code Tips",
                    "https://github.com/ykdojo/claude-code-tips",
                  ],
                  [
                    "r/ClaudeAI Subreddit",
                    "https://www.reddit.com/r/ClaudeAI/",
                  ],
                  [
                    "Anthropic Discord",
                    "https://discord.com/invite/6PPFFzqPDZ",
                  ],
                ] as const
              ).map(([resource, url], i) => (
                <tr
                  key={resource}
                  className={
                    i % 2 === 1
                      ? "bg-surface-50/50 dark:bg-surface-800/25"
                      : undefined
                  }
                >
                  <td className="px-4 py-3 font-medium text-surface-700 dark:text-surface-300">
                    {resource}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 underline decoration-primary-300 underline-offset-2 hover:text-primary-700 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300"
                    >
                      {url.replace("https://", "")}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Key Blog Posts                                                    */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="blog-posts">Key Blog Posts</h2>
        <p>
          These articles provide deep insights into how to get the most out of
          Claude Code. The context engineering posts in particular are essential
          reading for anyone serious about AI-assisted development.
        </p>

        <Callout type="ce" title="Essential Reading">
          <p>
            The context engineering blog posts below are some of the most
            impactful resources in the Claude Code ecosystem. They cover the
            &ldquo;why&rdquo; behind effective prompting, memory management, and
            workflow design. If you only read a few things from this entire
            guide, make it these.
          </p>
        </Callout>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Title
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {(
                [
                  [
                    "Effective Context Engineering for AI Agents",
                    "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
                  ],
                  [
                    "Martin Fowler \u2014 Context Engineering for Coding Agents",
                    "https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html",
                  ],
                  [
                    "Tips for Building CLAUDE.md Files",
                    "https://claude.com/blog/using-claude-md-files",
                  ],
                  [
                    "How Spotify Uses Claude Code",
                    "https://www.anthropic.com/customers/spotify",
                  ],
                  [
                    "Best Practices for Claude Code in Production",
                    "https://www.anthropic.com/engineering/claude-code-best-practices",
                  ],
                  [
                    "Anthropic Quickstarts CLAUDE.md",
                    "https://github.com/anthropics/claude-quickstarts/blob/main/CLAUDE.md",
                  ],
                  [
                    "Anthropic Engineering Blog",
                    "https://www.anthropic.com/engineering",
                  ],
                ] as const
              ).map(([title, url], i) => (
                <tr
                  key={title}
                  className={
                    i % 2 === 1
                      ? "bg-surface-50/50 dark:bg-surface-800/25"
                      : undefined
                  }
                >
                  <td className="px-4 py-3 font-medium text-surface-700 dark:text-surface-300">
                    {title}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 underline decoration-primary-300 underline-offset-2 hover:text-primary-700 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300"
                    >
                      {url.replace("https://", "")}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Stay Current">
          <p>
            Claude Code is evolving rapidly. Bookmark the{" "}
            <a
              href="https://www.anthropic.com/engineering"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anthropic Engineering Blog
            </a>{" "}
            and the{" "}
            <a
              href="https://docs.anthropic.com/en/docs/claude-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              official documentation
            </a>{" "}
            to stay up to date with new features, best practices, and workflow
            improvements.
          </p>
        </Callout>
      </article>
    </div>
  );
}
