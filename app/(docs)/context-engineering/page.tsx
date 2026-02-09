import { Metadata } from "next";
import { PillarGrid } from "@/components/context-engineering/PillarGrid";
import { MemoryHierarchy } from "@/components/context-engineering/MemoryHierarchy";
import { PrincipleTimeline } from "@/components/context-engineering/PrincipleTimeline";
import { CodeBlock } from "@/components/content/CodeBlock";
import { Callout } from "@/components/content/Callout";

export const metadata: Metadata = {
  title: "Context Engineering",
  description: "The discipline of designing what information the AI model sees, when it sees it, and in what structure.",
};

export default function ContextEngineeringPage() {
  return (
    <div className="max-w-4xl">
      {/* Premium gradient header */}
      <div className="relative mb-10 overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-primary-50 to-white p-8 sm:p-10 dark:border-violet-800/30 dark:from-violet-950/30 dark:via-primary-950/20 dark:to-dark-surface">
        <div className="ce-gradient-animated absolute inset-x-0 top-0 h-1" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-800/10" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-800/10" />
        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-violet-700/50 dark:bg-dark-surface/70 dark:text-violet-300">
            <span className="sparkle">★</span> Core Concept
          </div>
          <h1 className="bg-gradient-to-r from-violet-700 via-primary-600 to-violet-700 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-violet-400 dark:via-primary-400 dark:to-violet-400">
            Context Engineering
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-surface-600 dark:text-surface-400">
            The discipline of designing <strong className="text-surface-800 dark:text-surface-200">what information the AI model sees</strong>,{" "}
            <strong className="text-surface-800 dark:text-surface-200">when it sees it</strong>, and{" "}
            <strong className="text-surface-800 dark:text-surface-200">in what structure</strong>.
            It is the successor to prompt engineering.
          </p>
        </div>
      </div>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <blockquote>
          <p>&ldquo;Claude is already smart enough — intelligence is not the bottleneck, context is.&rdquo; — Anthropic</p>
        </blockquote>

        <h2 id="what-is-context-engineering">What is Context Engineering?</h2>
        <p>
          Context engineering goes beyond writing clever prompts. It&apos;s about designing the entire
          information system around your AI — from persistent memory files to tool definitions
          to data retrieval strategies.
        </p>

        <div className="not-prose my-8 overflow-hidden rounded-xl border border-surface-200 bg-surface-50 dark:border-dark-border dark:bg-dark-surface">
          <div className="grid divide-y divide-surface-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 dark:divide-dark-border">
            <div className="p-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-400">Prompt Engineering</h4>
              <ul className="mt-3 space-y-2 text-sm text-surface-600 dark:text-surface-400">
                <li>One clever prompt</li>
                <li>Single interaction</li>
                <li>Manual per-request</li>
                <li>Focus on wording</li>
              </ul>
            </div>
            <div className="p-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-500">Context Engineering</h4>
              <ul className="mt-3 space-y-2 text-sm text-surface-600 dark:text-surface-400">
                <li>Entire information system</li>
                <li>Multi-session architecture</li>
                <li>Automated & reusable</li>
                <li>Focus on what model sees</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="the-four-pillars">The Four Pillars</h2>
        <p>
          Context engineering rests on four fundamental pillars. Master these and you&apos;ll
          unlock Claude&apos;s full potential.
        </p>
      </article>

      <PillarGrid />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h2 id="the-memory-hierarchy">The Memory Hierarchy</h2>
        <p>
          Claude Code has a multi-layered memory system. Understanding the hierarchy is essential —
          higher layers override lower ones, letting you set project-specific overrides without
          changing global configuration.
        </p>
      </article>

      <MemoryHierarchy />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h2 id="writing-an-effective-claudemd">Writing an Effective CLAUDE.md</h2>
        <p>
          <strong>The Golden Rule</strong>: For each line, ask: <em>&ldquo;Would removing this cause Claude to make mistakes?&rdquo;</em>{" "}
          If not, cut it.
        </p>

        <h3>What to include</h3>
        <ul>
          <li>Bash commands Claude cannot guess</li>
          <li>Code style rules that differ from defaults</li>
          <li>Testing instructions and preferred test runners</li>
          <li>Repository etiquette (branch naming, PR conventions)</li>
          <li>Architectural decisions and common gotchas</li>
        </ul>

        <h3>What to exclude</h3>
        <ul>
          <li>Anything Claude can figure out by reading code</li>
          <li>Standard language conventions</li>
          <li>Long explanations or tutorials</li>
          <li>File-by-file codebase descriptions</li>
        </ul>
      </article>

      <CodeBlock
        language="markdown"
        title="Example — A Well-Structured CLAUDE.md (~60 lines)"
        code={`# Acme API Service

REST API for managing widget inventory. Node.js + Express + PostgreSQL.

## Commands
- \`npm test -- <file>\`: Run single test (preferred)
- \`npm run build\`: TypeScript compilation
- \`npm run lint\`: ESLint check
- \`npm run db:migrate\`: Run pending migrations

## Code Style
- ES modules only (import/export), no CommonJS
- Prefer named exports over default exports
- Error handling: use AppError class from src/errors.ts

## Architecture
- src/routes/       — Express route handlers
- src/services/     — Business logic (no direct DB access)
- src/repositories/ — Database queries (knex)
- src/middleware/    — Auth, validation, error handling

## Gotchas
- NEVER modify files in src/generated/ (auto-generated from OpenAPI spec)
- Database migrations must be backwards-compatible (zero-downtime deploys)
- The auth middleware reads from Redis — tests need REDIS_URL in .env.test`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h2 id="progressive-disclosure-with-rules">Progressive Disclosure with Rules</h2>
        <p>
          Instead of a 500-line CLAUDE.md, use modular rules that load on demand:
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Modular rules structure"
        code={`.claude/
  CLAUDE.md              # Concise (< 100 lines)
  rules/
    code-style.md        # Loaded on demand
    testing.md
    security.md
    frontend/
      react.md
    backend/
      api.md`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          <strong>Path-scoped rules</strong> only activate for matching files:
        </p>
      </article>

      <CodeBlock
        language="markdown"
        code={`---
paths:
  - "src/api/**/*.ts"
---

# API Development Rules
- All API endpoints must include input validation
- Use the standard error response format
- Include OpenAPI documentation comments`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h2 id="the-import-system">The @import System</h2>
        <p>
          Reference other files inline using the <code>@</code> syntax. Files can recursively import
          up to 5 levels deep.
        </p>
      </article>

      <CodeBlock
        language="markdown"
        code={`See @README.md for project overview and @package.json for commands.

# Additional Instructions
- Git workflow: @docs/git-instructions.md
- Personal overrides: @~/.claude/my-project-instructions.md`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h2 id="context-management-commands">Context Management Commands</h2>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Command</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">When to Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                ["/clear", "Between unrelated tasks (most important habit!)"],
                ["/compact [focus]", 'During long sessions: /compact Focus on API changes'],
                ["/rewind", "Restore to a previous checkpoint"],
                ["Esc", "Stop Claude mid-action"],
                ["Esc + Esc", "Open rewind menu"],
              ].map(([cmd, desc]) => (
                <tr key={cmd}>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">{cmd}</code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <PrincipleTimeline />
    </div>
  );
}
