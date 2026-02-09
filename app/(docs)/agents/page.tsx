import { Metadata } from "next";
import { CodeBlock } from "@/components/content/CodeBlock";
import { Callout } from "@/components/content/Callout";
import { PageHeader } from "@/components/content/PageHeader";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Sub-agent driven development and multi-agent orchestration patterns for Claude Code.",
};

export default function AgentsPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Agents"
        description="Sub-agent development and multi-agent orchestration patterns."
        badge="Sections 8 & 9"
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ------------------------------------------------------------------ */}
        {/*  SECTION 8 — Sub-Agent Driven Development                          */}
        {/* ------------------------------------------------------------------ */}

        <h2 id="architecture-overview">Architecture Overview</h2>
        <p>
          Claude Code&apos;s <strong>Task tool</strong> lets the main agent spawn
          lightweight sub-agents, each running in an isolated context window.
          This is the single most impactful pattern for long-horizon, complex
          work because it sidesteps context-window pollution while allowing
          massive parallelism.
        </p>

        <p>Key architectural constraints:</p>
        <ul>
          <li>
            <strong>Isolated context</strong> &mdash; each sub-agent starts with
            a clean context window; it cannot see the parent&apos;s conversation.
          </li>
          <li>
            <strong>No nesting</strong> &mdash; sub-agents cannot spawn their own
            sub-agents (one level deep only).
          </li>
          <li>
            <strong>Summary return</strong> &mdash; only the sub-agent&apos;s
            final summary bubbles back to the main agent, keeping the
            orchestrator&apos;s context lean.
          </li>
          <li>
            <strong>Up to 7 parallel</strong> &mdash; Claude Code can dispatch up
            to seven Task tool calls simultaneously.
          </li>
        </ul>
      </article>

      <CodeBlock
        language="text"
        title="Sub-Agent Architecture"
        code={`┌─────────────────────────────────────────┐
│           Main Agent (Orchestrator)      │
│                                         │
│  Full context window + all tools        │
│  Dispatches tasks, merges summaries     │
└────────┬──────────┬──────────┬──────────┘
         │          │          │
    ┌────▼────┐ ┌──▼────┐ ┌──▼────┐
    │ Sub-    │ │ Sub-  │ │ Sub-  │
    │ Agent 1 │ │ Agent │ │ Agent │  ... up to 7
    │         │ │   2   │ │   3   │
    │ Isolated│ │       │ │       │
    │ context │ │       │ │       │
    └────┬────┘ └──┬────┘ └──┬────┘
         │         │         │
    summary    summary   summary
    only       only      only
         │         │         │
         └─────────┴─────────┘
                   │
          Back to Main Agent`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h2 id="built-in-agent-types">Built-In Agent Types</h2>
        <p>
          When you ask Claude to use sub-agents, it selects from several
          built-in profiles depending on the nature of the task.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Agent Type
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Model
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Tools
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Use Case
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    Explore
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Haiku (fast, cheap)
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Read-only (Glob, Grep, Read)
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Codebase exploration, search, analysis
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    Plan
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Inherits parent model
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Read-only (Glob, Grep, Read)
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Architectural planning, investigation
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    General-Purpose
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Inherits parent model
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  All tools (read, write, bash, etc.)
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Full implementation, testing, file edits
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    Bash
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Inherits parent model
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Bash only
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Shell scripts, system commands, builds
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="when-to-use-sub-agents">When to Use Sub-Agents</h2>
        <p>
          Not every task benefits from sub-agents. Use this decision tree to
          figure out when they genuinely help:
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Sub-Agent Decision Tree"
        code={`Is the work substantial enough to justify a separate context?
├── No  → Do it inline (sub-agents have startup overhead)
└── Yes
    ├── Can sub-tasks run independently (no shared state)?
    │   ├── No  → Use sequential pipeline (one at a time)
    │   └── Yes
    │       ├── Would results be verbose / pollute main context?
    │       │   ├── No  → Consider inline; sub-agents may be overkill
    │       │   └── Yes → ✓ Use parallel sub-agents
    │       └── Are there > 3 independent pieces?
    │           └── Yes → ✓ Definitely use parallel sub-agents`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <Callout type="ce" title="Sub-Agents as Context Engineering">
          <p>
            Sub-agents are fundamentally a <strong>context engineering</strong>{" "}
            optimization. Each sub-agent gets a fresh context window dedicated to
            one focused task, avoiding the &ldquo;context pollution&rdquo; that
            happens when a single agent juggles too many concerns. The main
            agent only sees concise summaries, keeping its own context window
            clean for high-level orchestration decisions.
          </p>
        </Callout>

        <h2 id="practical-examples">Practical Examples</h2>

        <h3>Parallel Feature Implementation (5 agents)</h3>
        <p>
          Implementing a feature that touches multiple independent modules is a
          perfect fit for parallel sub-agents. Each agent works on its own
          module with full read-write access.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Prompt: Parallel Feature Implementation"
        code={`Implement the user notification system. Use sub-agents to work in parallel:

1. Agent 1: Create the database migration and model (src/models/notification.ts)
2. Agent 2: Build the REST API endpoints (src/routes/notifications.ts)
3. Agent 3: Implement the email service integration (src/services/email.ts)
4. Agent 4: Add WebSocket real-time push (src/services/websocket.ts)
5. Agent 5: Write tests for all the above (src/tests/notifications/)

Each module has no cross-dependencies at implementation time.
After all agents complete, integrate and verify everything works together.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Parallel Code Review (4 specialists)</h3>
        <p>
          Use read-only sub-agents as specialist reviewers, each focusing on a
          different dimension of code quality.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Prompt: Parallel Code Review"
        code={`Review the changes in this PR using 4 specialist sub-agents in parallel:

1. Security reviewer: Check for vulnerabilities, injection risks, auth issues
2. Performance reviewer: Look for N+1 queries, unnecessary allocations, bottlenecks
3. Architecture reviewer: Evaluate patterns, coupling, SOLID principles
4. Testing reviewer: Assess test coverage, edge cases, test quality

Combine all findings into a single prioritized review summary.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Research + Implementation Pipeline</h3>
        <p>
          A sequential pattern where read-only exploration happens first, then
          the results feed into an implementation agent.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Prompt: Research then Build"
        code={`I need to add caching to our API. Do this in two phases:

Phase 1 (parallel research sub-agents):
- Agent A: Explore the existing API route handlers to catalog all endpoints
- Agent B: Analyze database query patterns to find the most expensive queries
- Agent C: Read the current config/infrastructure setup

Phase 2 (sequential, after research completes):
- Use the findings to implement a Redis caching layer for the top 5
  most expensive endpoints. Include cache invalidation logic.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h2 id="creating-custom-sub-agents">Creating Custom Sub-Agents</h2>
        <p>
          You can define reusable agent personas in the{" "}
          <code>.claude/agents/</code> directory. Each file defines a
          specialized agent with its own system prompt, tool restrictions, and
          model preferences.
        </p>
      </article>

      <CodeBlock
        language="yaml"
        title=".claude/agents/code-reviewer.md"
        code={`---
name: "Code Reviewer"
description: "Reviews code for quality, security, and best practices"
tools:
  - Glob
  - Grep
  - Read
model: claude-sonnet-4-20250514
maxTurns: 10
---

You are a senior code reviewer. Analyze the provided code for:

1. **Security vulnerabilities** — injection, auth bypass, data exposure
2. **Performance issues** — N+1 queries, unnecessary computation, memory leaks
3. **Code quality** — naming, structure, SOLID principles, DRY
4. **Error handling** — missing catch blocks, unvalidated inputs

Format your review as:
- 🔴 Critical (must fix before merge)
- 🟡 Warning (should fix soon)
- 🟢 Suggestion (nice to have)

Always cite specific file paths and line numbers.`}
      />

      <CodeBlock
        language="yaml"
        title=".claude/agents/debugger.md"
        code={`---
name: "Debugger"
description: "Investigates and fixes bugs with systematic analysis"
tools:
  - Glob
  - Grep
  - Read
  - Edit
  - Bash
maxTurns: 15
---

You are a systematic debugger. When given a bug report:

1. **Reproduce** — Understand the expected vs actual behavior
2. **Locate** — Search the codebase for the relevant code paths
3. **Analyze** — Trace the logic to find the root cause
4. **Fix** — Apply the minimal correct fix
5. **Verify** — Run relevant tests to confirm the fix

Always explain your reasoning at each step.
Prefer minimal, targeted fixes over large refactors.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Sub-Agent Frontmatter Reference</h3>
        <p>
          The YAML frontmatter in agent definition files supports the following
          fields:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Field
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                ["name", "string", "Display name for the agent"],
                ["description", "string", "Brief summary of the agent's purpose"],
                ["tools", "string[]", "List of allowed tools (e.g., Glob, Grep, Read, Edit, Bash)"],
                ["model", "string", "Model override (e.g., claude-sonnet-4-20250514, claude-haiku-4-20250514)"],
                ["maxTurns", "number", "Maximum conversation turns before the agent must return"],
                ["allowedCommands", "string[]", "Bash commands the agent is permitted to run"],
                ["disallowedCommands", "string[]", "Bash commands explicitly blocked"],
                ["customSystemPrompt", "string", "Fully replaces the default system prompt"],
                ["appendSystemPrompt", "string", "Appended to the default system prompt"],
              ].map(([field, type, desc]) => (
                <tr key={field}>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {field}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    <code className="text-xs">{type}</code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    {desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="token-economics">Token Economics</h2>
        <p>
          Sub-agents consume significantly more tokens than regular chat
          interactions. Understanding the cost model is essential for making
          informed decisions about when to use them.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Mode
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Relative Cost
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              <tr>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Simple chat interaction
                </td>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    1x
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Baseline &mdash; single agent, single turn
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Agentic coding (single agent)
                </td>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-surface-800 dark:text-amber-300">
                    ~4x
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Multi-turn tool use in a single context
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Multi-agent orchestration
                </td>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-red-700 dark:bg-surface-800 dark:text-red-300">
                    ~15x
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Each sub-agent loads its own context + system prompt
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Cost Awareness">
          <p>
            A 5-agent parallel run can easily consume 50k&ndash;100k+ tokens in a
            single orchestration step. Use <code>/cost</code> to monitor your
            usage, and prefer Haiku-based Explore agents for read-only tasks
            where full Opus/Sonnet reasoning is not needed.
          </p>
        </Callout>

        {/* ------------------------------------------------------------------ */}
        {/*  SECTION 9 — Multi-Agent Orchestration                             */}
        {/* ------------------------------------------------------------------ */}

        <h2 id="multi-agent-orchestration">Multi-Agent Orchestration</h2>
        <p>
          Beyond single sub-agent dispatches, Claude Code supports sophisticated
          multi-agent orchestration patterns. These patterns combine sub-agents,
          headless mode, and structured communication to tackle enterprise-scale
          work.
        </p>

        <h3>Pattern 1: Parallel Specialists</h3>
        <p>
          Dispatch multiple read-only sub-agents in parallel, each analyzing the
          same codebase from a different perspective. The orchestrator merges
          their results into a single deliverable.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Pattern 1 — Parallel Specialists"
        code={`┌──────────────────────────┐
│     Main Orchestrator    │
│   "Review this PR"       │
└──┬─────┬─────┬─────┬────┘
   │     │     │     │
   ▼     ▼     ▼     ▼
┌─────┐┌─────┐┌─────┐┌─────┐
│Sec. ││Perf.││Arch.││Test │  ← All read-only Explore agents
│Rev. ││Rev. ││Rev. ││Rev. │
└──┬──┘└──┬──┘└──┬──┘└──┬──┘
   │      │      │      │
   ▼      ▼      ▼      ▼
┌──────────────────────────┐
│   Merged Review Summary  │
│   Prioritized findings   │
└──────────────────────────┘`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          This pattern works well because each reviewer has a focused mandate and
          does not need to coordinate with the others during analysis. The
          orchestrator&apos;s job is simply to combine and deduplicate findings.
        </p>

        <h3>Pattern 2: Sequential Pipeline</h3>
        <p>
          A chain of agents where each stage&apos;s output feeds into the next.
          This mirrors real-world development workflows like
          Spec &rarr; Architecture &rarr; Implementation.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Pattern 2 — Sequential Pipeline"
        code={`Step 1: PM Agent (read-only)
  └─ "Analyze requirements and write a technical spec"
  └─ Output: spec.md

Step 2: Architect Agent (read-only)
  └─ Input: spec.md
  └─ "Design the system architecture and define interfaces"
  └─ Output: architecture.md + interface definitions

Step 3: Implementation Agent (full tools)
  └─ Input: spec.md + architecture.md
  └─ "Implement according to the spec and architecture"
  └─ Output: working code + tests`}
      />

      <CodeBlock
        language="text"
        title="Prompt: Sequential Pipeline"
        code={`Build a rate limiting system using a sequential pipeline:

Phase 1 — Specification (read-only sub-agent):
  Analyze our existing API middleware and write a spec for adding
  rate limiting. Output to docs/rate-limit-spec.md.

Phase 2 — Architecture (read-only sub-agent, after Phase 1):
  Read the spec and design the implementation. Define Redis key
  schemas, middleware interfaces, and configuration format.
  Output to docs/rate-limit-architecture.md.

Phase 3 — Implementation (full-access sub-agent, after Phase 2):
  Implement the rate limiter following the spec and architecture.
  Include unit tests and integration tests.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Pattern 3: Research + Build</h3>
        <p>
          A hybrid pattern that combines parallel exploration with sequential
          implementation. Multiple read-only agents gather information
          simultaneously, then a single implementation agent uses all of their
          findings.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Pattern 3 — Research + Build"
        code={`┌─────────────────────────────────┐
│        Main Orchestrator        │
└──┬──────────┬──────────┬────────┘
   │          │          │
   ▼          ▼          ▼          Phase 1: Parallel Research
┌──────┐ ┌──────┐ ┌──────┐
│Explore│ │Explore│ │Explore│       (Haiku, read-only)
│Routes │ │DB     │ │Config │
└──┬───┘ └──┬───┘ └──┬───┘
   │        │        │
   ▼        ▼        ▼
┌─────────────────────────────────┐
│    Orchestrator merges findings │  Phase 2: Merge
└──────────────┬──────────────────┘
               │
               ▼
        ┌─────────────┐
        │ Implement   │             Phase 3: Sequential Build
        │ Agent       │             (Sonnet/Opus, full tools)
        │ (informed)  │
        └─────────────┘`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Pattern 4: Fan-Out with Headless Mode</h3>
        <p>
          For truly massive parallelism beyond the 7-agent Task tool limit, use
          headless mode (<code>claude -p</code>) in a bash loop. Each invocation
          is a completely independent Claude process.
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Pattern 4 — Fan-Out with Headless Mode"
        code={`#!/bin/bash
# Fan-out: Run Claude headless across multiple directories

REPOS=("service-auth" "service-billing" "service-inventory" "service-gateway")

for repo in "\${REPOS[@]}"; do
  (
    cd "/home/user/repos/$repo" || exit
    claude -p "Analyze this service for security vulnerabilities. \\
      Focus on: auth bypass, SQL injection, SSRF, and secrets in code. \\
      Output a JSON report to /tmp/security-$repo.json" \\
      --output-format json
  ) &
done

# Wait for all background processes
wait

# Merge results
claude -p "Read the security reports in /tmp/security-*.json \\
  and create a consolidated executive summary sorted by severity."`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <Callout type="tip" title="Headless Mode Tips">
          <p>
            Use <code>--output-format json</code> for structured results you can
            programmatically merge. Add <code>--max-turns 20</code> to cap
            agent runtime. Combine with <code>--allowedTools</code> to restrict
            each headless instance to specific tools.
          </p>
        </Callout>

        <h2 id="agent-teams">Agent Teams</h2>
        <p>
          The <strong>agent teams</strong> pattern takes multi-agent
          orchestration further by establishing persistent communication
          channels between agents. A &ldquo;team lead&rdquo; agent coordinates
          multiple &ldquo;teammate&rdquo; agents through structured JSON inbox
          files.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Agent Teams Architecture"
        code={`┌──────────────────────────────────────────────┐
│              Team Lead Agent                 │
│  Runs in its own terminal/headless process   │
│  Reads teammate inboxes, assigns work        │
└──┬──────────────┬───────────────┬────────────┘
   │              │               │
   ▼              ▼               ▼
┌────────┐  ┌────────┐  ┌────────┐
│Teammate│  │Teammate│  │Teammate│  Each in its own
│  "API" │  │ "UI"   │  │ "Test" │  terminal / process
└───┬────┘  └───┬────┘  └───┬────┘
    │           │           │
    ▼           ▼           ▼
┌────────┐  ┌────────┐  ┌────────┐
│inbox/  │  │inbox/  │  │inbox/  │  JSON inbox files
│api.json│  │ui.json │  │test.   │  for communication
└────────┘  └────────┘  │json    │
                        └────────┘`}
      />

      <CodeBlock
        language="json"
        title="Example — inbox/api.json"
        code={`{
  "from": "team-lead",
  "to": "api-agent",
  "task": "Implement the /users/:id/preferences endpoint",
  "context": {
    "spec": "docs/api-spec.md#user-preferences",
    "dependencies": ["src/models/user.ts", "src/middleware/auth.ts"],
    "constraints": [
      "Must support PATCH for partial updates",
      "Include rate limiting (100 req/min)",
      "Validate against schema in docs/schemas/preferences.json"
    ]
  },
  "deadline": "Report back when endpoint + tests are complete",
  "priority": "high"
}`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          Each teammate agent polls its inbox file, performs the assigned work,
          and writes a result back. The team lead monitors progress and
          reassigns or escalates as needed.
        </p>

        <h3>Agent Teams vs Sub-Agents</h3>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Dimension
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Sub-Agents (Task Tool)
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Agent Teams
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                [
                  "Lifecycle",
                  "Ephemeral — created and destroyed per task",
                  "Persistent — long-running processes",
                ],
                [
                  "Communication",
                  "One-way: parent sends task, child returns summary",
                  "Bidirectional via inbox JSON files",
                ],
                [
                  "Parallelism",
                  "Up to 7 parallel via Task tool",
                  "Unlimited (each is a separate process)",
                ],
                [
                  "Context",
                  "Isolated — no shared state between sub-agents",
                  "Shared filesystem + inbox messages",
                ],
                [
                  "Nesting",
                  "One level deep (no sub-sub-agents)",
                  "Flat — team lead coordinates all",
                ],
                [
                  "Setup",
                  "Automatic — Claude manages lifecycle",
                  "Manual — you launch each agent process",
                ],
                [
                  "Best for",
                  "Bounded tasks within a single session",
                  "Large multi-hour projects, cross-service work",
                ],
              ].map(([dim, sub, team]) => (
                <tr key={dim}>
                  <td className="px-4 py-3 font-medium text-surface-700 dark:text-surface-300">
                    {dim}
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    {sub}
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    {team}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout type="info" title="When to Choose Agent Teams">
          <p>
            Use agent teams when your project spans multiple services or
            repositories, requires hours of work, or needs agents that can
            communicate mid-task. For most single-session tasks, sub-agents via
            the Task tool are simpler and more cost-effective.
          </p>
        </Callout>
      </article>
    </div>
  );
}
