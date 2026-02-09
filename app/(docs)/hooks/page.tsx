import { Metadata } from "next";
import { CodeBlock } from "@/components/content/CodeBlock";
import { Callout } from "@/components/content/Callout";
import { PageHeader } from "@/components/content/PageHeader";

export const metadata: Metadata = {
  title: "Hooks",
  description:
    "Automate your Claude Code workflow with lifecycle hooks — user-defined commands that execute at key moments like pre-tool-use, post-edit, and session boundaries.",
};

export default function HooksPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Hooks"
        description="Automate your workflow with lifecycle hooks that execute at key moments."
        badge="Section 10"
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* What Are Hooks?                                                   */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="what-are-hooks">What Are Hooks?</h2>
        <p>
          Hooks are user-defined commands that execute at specific lifecycle
          points during a Claude Code session. They let you intercept actions,
          enforce policies, run formatters, trigger builds, and much more &mdash;
          all without relying on Claude to remember to do these things.
        </p>
        <p>
          You define hooks in your <code>.claude/settings.json</code> (project
          level) or <code>~/.claude/settings.json</code> (global level). Each
          hook targets a specific lifecycle event and can optionally match only
          certain tools or file patterns.
        </p>
      </article>

      <Callout type="ce">
        <p>
          Hooks are context engineering automation. Instead of writing
          &ldquo;always run prettier after editing files&rdquo; in your{" "}
          <code>CLAUDE.md</code> and hoping the model remembers, you encode it
          as a hook that fires deterministically. This ensures consistent
          behavior across every session, every user, and every model version
          &mdash; no matter what.
        </p>
      </Callout>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* Hook Types                                                        */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="hook-types">Hook Types</h2>
        <p>
          There are three types of hooks, each suited to different automation
          needs:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  How It Works
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Control Flow
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                [
                  "command",
                  "Runs a shell command (e.g. a script or binary)",
                  "Exit code 0 = allow, exit code 2 = block the action",
                ],
                [
                  "prompt",
                  "Presents a single-turn yes/no prompt to the user",
                  "User answers yes or no to allow or block",
                ],
                [
                  "agent",
                  "Spawns a sub-agent with access to tools",
                  "Sub-agent analyzes output and can modify behavior",
                ],
              ].map(([type, how, control]) => (
                <tr key={type}>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {type}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    {how}
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                    {control}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Lifecycle Events                                                  */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="lifecycle-events">Lifecycle Events</h2>
        <p>
          Every hook targets a lifecycle event. The table below lists all
          available events and when they fire:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Event
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  When It Fires
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                ["SessionStart", "When a Claude Code session begins"],
                ["UserPromptSubmit", "After the user submits a prompt, before processing"],
                ["PreToolUse", "Before a tool is executed (can block the action!)"],
                ["PermissionRequest", "When Claude requests permission to use a tool"],
                ["PostToolUse", "After a tool has executed successfully"],
                ["PostToolUseFailure", "After a tool execution fails"],
                ["SubagentStart", "When a sub-agent is spawned"],
                ["SubagentStop", "When a sub-agent completes"],
                ["Stop", "When Claude is about to finish its response"],
                ["SessionEnd", "When the session is ending"],
                ["Notification", "When a desktop notification is triggered"],
                ["TeammateIdle", "When a teammate agent becomes idle"],
                ["TaskCompleted", "When a background task completes"],
                ["PreCompact", "Before context compaction occurs"],
              ].map(([event, desc]) => (
                <tr key={event}>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {event}
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

        <Callout type="warning" title="PreToolUse Can Block">
          <p>
            The <code>PreToolUse</code> event is special &mdash; if a hook
            returns exit code 2, it blocks the tool from executing entirely.
            This makes it ideal for safety guardrails like preventing
            destructive commands.
          </p>
        </Callout>

        {/* ---------------------------------------------------------------- */}
        {/* Example 1: Block Destructive Commands                             */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="block-destructive-commands">
          Example 1: Block Destructive Commands
        </h2>
        <p>
          This hook intercepts every <code>Bash</code> tool invocation and runs
          a script that inspects the command. If it detects a destructive
          pattern like <code>rm -rf</code>, it exits with code 2 to block
          execution.
        </p>
        <p>
          First, define the hook in your settings file:
        </p>
      </article>

      <CodeBlock
        language="json"
        title=".claude/settings.json"
        code={`{
  "hooks": {
    "PreToolUse": [
      {
        "type": "command",
        "matcher": "Bash",
        "command": ".claude/hooks/block-rm.sh"
      }
    ]
  }
}`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          Then create the script that performs the check. The hook receives
          tool input as JSON on stdin:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title=".claude/hooks/block-rm.sh"
        code={`#!/usr/bin/env bash
set -euo pipefail

# Read the tool input from stdin
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Check for destructive patterns
if echo "$COMMAND" | grep -qE 'rm\\s+-(rf|fr)\\s+/'; then
  echo "BLOCKED: Refusing to run 'rm -rf /' — this is a destructive command." >&2
  exit 2  # Exit code 2 = block the tool
fi

exit 0  # Exit code 0 = allow the tool`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <Callout type="tip" title="Exit Code Convention">
          <p>
            For <code>command</code> type hooks: exit code <strong>0</strong>{" "}
            means allow, exit code <strong>2</strong> means block, and any
            other non-zero exit code is treated as a hook failure (the tool
            still runs, but a warning is logged).
          </p>
        </Callout>

        {/* ---------------------------------------------------------------- */}
        {/* Example 2: Auto-Format After Edits                                */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="auto-format-after-edits">
          Example 2: Auto-Format After Edits
        </h2>
        <p>
          Instead of telling Claude to run Prettier after every edit, set up a{" "}
          <code>PostToolUse</code> hook that fires automatically whenever the{" "}
          <code>Edit</code> or <code>Write</code> tool completes:
        </p>
      </article>

      <CodeBlock
        language="json"
        title=".claude/settings.json"
        code={`{
  "hooks": {
    "PostToolUse": [
      {
        "type": "command",
        "matcher": "Edit|Write",
        "command": ".claude/hooks/auto-format.sh"
      }
    ]
  }
}`}
      />

      <CodeBlock
        language="bash"
        title=".claude/hooks/auto-format.sh"
        code={`#!/usr/bin/env bash
set -euo pipefail

# Read the tool input to get the file path
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Only format files that prettier supports
if [[ "$FILE_PATH" =~ \\.(ts|tsx|js|jsx|json|css|md)$ ]]; then
  npx prettier --write "$FILE_PATH" 2>/dev/null || true
fi

exit 0`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          Now every file edit is automatically formatted &mdash; no prompt
          instructions needed, no risk of Claude forgetting.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* Example 3: Quality Gate (Stop Hook)                               */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="quality-gate">
          Example 3: Quality Gate (Stop Hook)
        </h2>
        <p>
          A <code>prompt</code> type hook on the <code>Stop</code> event asks
          you to confirm whether Claude&apos;s work is truly complete before
          ending the turn. This is useful for catching incomplete
          implementations:
        </p>
      </article>

      <CodeBlock
        language="json"
        title=".claude/settings.json"
        code={`{
  "hooks": {
    "Stop": [
      {
        "type": "prompt",
        "prompt": "Review Claude's response. Did it fully complete the task, including tests and documentation? (yes/no)"
      }
    ]
  }
}`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          When Claude finishes its turn, you&apos;ll see the prompt and can
          answer <strong>no</strong> to force Claude to continue working. This
          creates a lightweight quality gate that prevents premature
          completion.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* Example 4: Agent-Based Test Verification                          */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="agent-based-verification">
          Example 4: Agent-Based Test Verification
        </h2>
        <p>
          An <code>agent</code> type hook spawns a sub-agent that can use
          tools to verify work. This example checks whether tests pass
          before Claude finishes:
        </p>
      </article>

      <CodeBlock
        language="json"
        title=".claude/settings.json"
        code={`{
  "hooks": {
    "Stop": [
      {
        "type": "agent",
        "prompt": "Run the test suite for any files that were modified in this session. If tests fail, report which tests failed and suggest fixes. Only approve if all tests pass."
      }
    ]
  }
}`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          The sub-agent has access to tools like <code>Bash</code> and{" "}
          <code>Read</code>, so it can run <code>npm test</code>, inspect
          output, and provide feedback. If it determines the work is
          incomplete, Claude continues iterating.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* Example 5: Async Background Hook                                  */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="async-background-hook">
          Example 5: Async Background Hook
        </h2>
        <p>
          Sometimes you want a hook to run without blocking Claude&apos;s
          workflow. Set <code>async: true</code> to run the hook in the
          background:
        </p>
      </article>

      <CodeBlock
        language="json"
        title=".claude/settings.json"
        code={`{
  "hooks": {
    "PostToolUse": [
      {
        "type": "command",
        "matcher": "Write|Edit",
        "command": ".claude/hooks/notify-changes.sh",
        "async": true
      }
    ]
  }
}`}
      />

      <CodeBlock
        language="bash"
        title=".claude/hooks/notify-changes.sh"
        code={`#!/usr/bin/env bash
set -euo pipefail

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Send a desktop notification (non-blocking)
notify-send "Claude Code" "File modified: $FILE_PATH" 2>/dev/null || true

# Log the change for audit purposes
echo "$(date -Iseconds) MODIFIED $FILE_PATH" >> .claude/hooks/audit.log

exit 0`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          With <code>async: true</code>, the hook fires in the background and
          Claude continues working immediately without waiting for it to
          finish. This is ideal for logging, notifications, or any
          side-effect that doesn&apos;t need to block the main workflow.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* Managing Hooks                                                    */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="managing-hooks">Managing Hooks Interactively</h2>
        <p>
          You don&apos;t have to hand-edit JSON to manage hooks. Inside the
          Claude Code REPL, use the <code>/hooks</code> slash command to add,
          edit, remove, and reorder hooks through an interactive menu:
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Inside the Claude Code REPL"
        code={`> /hooks

┌──────────────────────────────────────┐
│  Hook Management                     │
├──────────────────────────────────────┤
│  1. Add a new hook                   │
│  2. Edit an existing hook            │
│  3. Remove a hook                    │
│  4. List all hooks                   │
│  5. Toggle hook enabled/disabled     │
└──────────────────────────────────────┘`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          The <code>/hooks</code> command makes it easy to prototype hooks
          interactively, test them, and then commit the resulting{" "}
          <code>.claude/settings.json</code> to version control for the whole
          team.
        </p>

        <Callout type="tip" title="Best Practice">
          <p>
            Keep your hook scripts in <code>.claude/hooks/</code> and commit
            them to version control. This way, every team member and every CI
            run automatically benefits from the same guardrails and
            automation. Use <code>chmod +x</code> on your scripts so they
            are executable.
          </p>
        </Callout>

        <Callout type="info" title="What&apos;s next?">
          <p>
            Hooks are one piece of the larger automation story. Combine them
            with{" "}
            <a href="/context-engineering">Context Engineering</a> for
            persistent memory and rules, and explore{" "}
            <a href="/multi-claude">Multi-Claude Workflows</a> to
            orchestrate teams of agents &mdash; each with their own hooks.
          </p>
        </Callout>
      </article>
    </div>
  );
}
