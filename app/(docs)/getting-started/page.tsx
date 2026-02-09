import { Metadata } from "next";
import { CodeBlock } from "@/components/content/CodeBlock";
import { Callout } from "@/components/content/Callout";
import { PageHeader } from "@/components/content/PageHeader";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Install Claude Code, run it for the first time, initialize your project, and learn the core Explore-Plan-Implement-Commit workflow.",
};

export default function GettingStartedPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Getting Started"
        description="Install Claude Code and learn the core workflow in minutes."
        badge="Section 1"
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* Installation                                                      */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="installation">Installation</h2>
        <p>
          Claude Code runs as a standalone CLI. The fastest way to install it is
          the native installer for your platform.
        </p>

        <h3>Native installers</h3>
        <p>
          On <strong>macOS, Linux, or WSL</strong>, run the one-liner below in
          your terminal:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="macOS / Linux / WSL"
        code={`curl -fsSL https://claude.ai/install.sh | sh`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          On <strong>Windows</strong> (PowerShell), use the following command:
        </p>
      </article>

      <CodeBlock
        language="powershell"
        title="Windows (PowerShell)"
        code={`irm https://claude.ai/install.ps1 | iex`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Package managers</h3>
        <p>
          If you prefer a package manager, Claude Code is available through
          Homebrew and winget as well:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Homebrew (macOS / Linux)"
        code={`brew install claude-code`}
      />

      <CodeBlock
        language="powershell"
        title="winget (Windows)"
        code={`winget install Anthropic.ClaudeCode`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          After installation, verify it worked by running{" "}
          <code>claude --version</code> in a fresh terminal window.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* First Run                                                         */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="first-run">First Run</h2>
        <p>
          Once installed, you can start Claude Code in several modes depending
          on what you need.
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
              {[
                [
                  "claude",
                  "Launch the interactive REPL (the default experience)",
                ],
                [
                  'claude -p "query"',
                  "One-shot mode \u2014 ask a question and get a single response",
                ],
                [
                  "claude --continue",
                  "Resume the most recent conversation where you left off",
                ],
                [
                  "claude --resume",
                  "Pick a previous conversation from a list and continue it",
                ],
              ].map(([cmd, desc]) => (
                <tr key={cmd}>
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

        <p>
          The interactive REPL is where you&apos;ll spend most of your time. It
          gives Claude full access to your shell, file system, and tools so it
          can read code, run tests, and make changes on your behalf.
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Example: one-shot mode"
        code={`# Ask a quick question without entering the REPL
claude -p "Explain the folder structure of this project"`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* Initialize Your Project                                           */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="initialize-your-project">Initialize Your Project</h2>
        <p>
          Before Claude can work effectively in a codebase, it needs context
          about your project&apos;s conventions, tooling, and architecture. The{" "}
          <code>/init</code> command generates a <code>CLAUDE.md</code> file at
          the root of your repository that captures all of this.
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Initialize a project"
        code={`cd your-project
claude
# Inside the REPL, run:
/init`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          Claude will scan your repository, detect languages, frameworks, test
          runners, and build tools, then produce a concise{" "}
          <code>CLAUDE.md</code> summarizing everything it found. You should
          review the file and commit it to version control so every contributor
          (and every Claude session) benefits from it.
        </p>
      </article>

      <Callout type="ce">
        <p>
          The <code>CLAUDE.md</code> file created by <code>/init</code> is the
          foundation of <strong>context engineering</strong> &mdash; it
          determines what Claude knows about your project before you type a
          single prompt. A well-crafted <code>CLAUDE.md</code> dramatically
          improves the quality and consistency of every response.
        </p>
      </Callout>

      <Callout type="tip" title="Best Practice">
        <p>
          Start every new project with <code>/init</code>. It takes seconds and
          gives Claude the context it needs to generate accurate code, run the
          right test commands, and follow your team&apos;s conventions from the
          very first interaction.
        </p>
      </Callout>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* The Core Workflow                                                  */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="the-core-workflow">The Core Workflow</h2>
        <p>
          The recommended way to use Claude Code follows a four-step loop:{" "}
          <strong>Explore &rarr; Plan &rarr; Implement &rarr; Commit</strong>.
          Repeating this cycle keeps Claude focused, reduces wasted tokens, and
          produces cleaner results.
        </p>

        <h3>1. Explore</h3>
        <p>
          Ask Claude to read relevant files, search the codebase, and understand
          the current state of the code. This is the &ldquo;gather
          context&rdquo; phase &mdash; Claude will use tools like{" "}
          <code>Read</code>, <code>Glob</code>, and <code>Grep</code> to build
          its understanding.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Explore"
        code={`> Read the auth middleware in src/middleware/auth.ts and explain how
  token validation works.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>2. Plan</h3>
        <p>
          Before writing any code, ask Claude to outline a plan. This lets you
          review the approach, catch misunderstandings early, and steer Claude
          toward the right solution before it starts editing files.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Plan"
        code={`> Plan how to add rate limiting to the /api/widgets endpoint.
  Don't write code yet — just outline the approach.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>3. Implement</h3>
        <p>
          Once you&apos;re happy with the plan, tell Claude to execute it.
          Claude will create and edit files, install dependencies, and run
          commands as needed. Review the changes it makes &mdash; you can always
          use <code>/rewind</code> to roll back.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Implement"
        code={`> Go ahead and implement the rate limiting plan.
  Use the express-rate-limit package.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>4. Commit</h3>
        <p>
          After verifying the changes (and ideally running tests), ask Claude to
          commit. Claude writes descriptive commit messages and can follow your
          team&apos;s commit conventions if they are specified in{" "}
          <code>CLAUDE.md</code>.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Commit"
        code={`> Commit the rate limiting changes with a descriptive message.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Putting it all together</h3>
        <p>
          Here is a complete example of one cycle through the workflow:
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Full workflow example"
        code={`You: Read src/routes/widgets.ts and the tests in tests/widgets.test.ts.
     Explain what's covered and what's missing.

Claude: [reads files, summarizes coverage gaps]

You: Plan how to add input validation for the POST /widgets endpoint.
     Don't write code yet.

Claude: [outlines approach: add zod schema, validate in handler,
         add error tests]

You: Looks good — implement it.

Claude: [creates schema, updates handler, adds tests, runs test suite]

You: All tests pass. Commit these changes.

Claude: [creates commit: "Add input validation for POST /widgets endpoint"]`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          Following this loop consistently leads to better results than dumping
          a large request in a single message. Each step gives you a checkpoint
          to verify Claude&apos;s understanding and correct course before
          wasting effort.
        </p>

        <Callout type="info" title="What&apos;s next?">
          <p>
            Now that you have Claude Code installed and understand the core
            workflow, head to the{" "}
            <a href="/context-engineering">Context Engineering</a> section to
            learn how to craft an effective <code>CLAUDE.md</code> and master
            the memory hierarchy.
          </p>
        </Callout>
      </article>
    </div>
  );
}
