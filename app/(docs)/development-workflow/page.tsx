import { Metadata } from "next";
import { CodeBlock } from "@/components/content/CodeBlock";
import { Callout } from "@/components/content/Callout";
import { PageHeader } from "@/components/content/PageHeader";

export const metadata: Metadata = {
  title: "Development Workflow",
  description:
    "Phase-based development and planning with files — structured approaches to complex projects with Claude Code.",
};

export default function DevelopmentWorkflowPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Development Workflow"
        description="Phase-based development and persistent planning for complex projects."
        badge="Sections 4 & 7"
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/*  SECTION 4 — Phase-Based Development                            */}
        {/* ---------------------------------------------------------------- */}

        <h2 id="the-problem-it-solves">The Problem It Solves</h2>
        <p>
          Large features attempted in a single Claude session almost always degrade. As
          the context window fills up, Claude begins to hallucinate, forget earlier
          decisions, and produce code that contradicts itself. Developers report spending
          <strong> 40&ndash;60% of their time debugging</strong> AI-generated output in
          this mode.
        </p>
        <p>
          Phase-based development fixes this by breaking work into small,
          self-contained phases. Each phase starts with a <em>fresh</em> context window,
          a clear goal, and explicit success criteria.
        </p>

        <div className="not-prose my-8 overflow-hidden rounded-xl border border-surface-200 bg-surface-50 dark:border-dark-border dark:bg-dark-surface">
          <div className="grid divide-y divide-surface-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 dark:divide-dark-border">
            <div className="p-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-400">
                Without Phases
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-surface-600 dark:text-surface-400">
                <li>Context fills up mid-feature</li>
                <li>Hallucinations increase over time</li>
                <li>40&ndash;60% time spent debugging</li>
                <li>Features left incomplete</li>
              </ul>
            </div>
            <div className="p-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                With Phases
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-surface-600 dark:text-surface-400">
                <li>Bounded scope per conversation</li>
                <li>Fresh context every phase</li>
                <li>&lt;10% time debugging</li>
                <li>100% feature completion</li>
              </ul>
            </div>
          </div>
        </div>

        <Callout type="ce">
          <p>
            Phase-based development is context engineering in practice. Each phase
            starts with fresh context, ensuring Claude always operates within its
            optimal window. The phase plan itself becomes a persistent memory artifact
            that carries knowledge across conversations without bloating any single one.
          </p>
        </Callout>

        {/* ---- Quantified Results ---- */}
        <h2 id="quantified-results">Quantified Results</h2>
        <p>
          Developers who adopt phase-based workflows report dramatic improvements
          across every measurable dimension:
        </p>
      </article>

      <div className="not-prose my-8 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-50 dark:bg-surface-800/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                Metric
              </th>
              <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                Before (Single Session)
              </th>
              <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                After (Phase-Based)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
            {[
              ["Feature completion rate", "~60%", "100%"],
              ["Debugging time", "40–60%", "<10%"],
              ["Context-window overflows", "Frequent", "None"],
              ["Hallucination rate", "High (grows with length)", "Minimal (fresh context)"],
              ["Code consistency", "Degrades over session", "Stable across phases"],
              ["Developer confidence", "Low — constant review", "High — verify at boundaries"],
            ].map(([metric, before, after]) => (
              <tr key={metric}>
                <td className="px-4 py-3 font-medium text-surface-800 dark:text-surface-200">
                  {metric}
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  {before}
                </td>
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400">
                  {after}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---- The Three-Command System ---- */}
        <h2 id="the-three-command-system">The Three-Command System</h2>
        <p>
          The entire workflow revolves around three slash commands. Each maps to a
          distinct phase of the project lifecycle:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Command
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                ["/plan", "Project Definition — describe what you want to build and let Claude draft a phased plan"],
                ["/implementation", "Phase Breakdown — Claude splits the plan into numbered, bounded phases with clear inputs and outputs"],
                ["/complete-phase", "Transitions — signals the end of a phase, commits work, and prepares context for the next one"],
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

        {/* ---- Workflow ---- */}
        <h2 id="workflow">Workflow</h2>
        <p>
          Follow these five steps for every feature or project. The key insight is that
          each phase runs in its own conversation, so Claude always has a clean context
          window.
        </p>

        <h3>Step 1 — Create the plan</h3>
        <p>
          Start a new conversation and describe what you want to build. Claude will
          draft a plan and save it to a markdown file.
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Step 1 — Plan the project"
        code={`# In a new Claude conversation:
> /plan Build a REST API for a todo app with auth, CRUD, and real-time updates

# Claude creates implementation-plan.md with:
# - Project overview
# - Technical decisions
# - Phase breakdown
# - Success criteria per phase`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Step 2 — Review and refine the plan</h3>
        <p>
          Read the generated plan. Ask Claude to adjust scope, reorder phases, or
          add missing considerations. This is the cheapest time to make changes.
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Step 2 — Refine the plan"
        code={`> Move the auth phase before CRUD — I want protected routes from the start.
> Add a phase for rate limiting after real-time updates.
> Each phase should take no more than 15 minutes of Claude time.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Step 3 — Start the first phase</h3>
        <p>
          Open a <strong>new conversation</strong> (critical — fresh context) and
          point Claude at the plan.
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Step 3 — Execute a phase"
        code={`# New conversation — fresh context window
> /implementation Read implementation-plan.md and implement Phase 1: Project Setup & Auth

# Claude reads the plan, understands the phase boundary, and works only on Phase 1`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Step 4 — Complete and commit</h3>
        <p>
          When Claude finishes the phase, verify the work and transition cleanly.
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Step 4 — Complete the phase"
        code={`> /complete-phase

# Claude will:
# 1. Run tests to verify the phase works
# 2. Update implementation-plan.md (mark phase as done)
# 3. Commit all changes with a descriptive message
# 4. Summarize what was built and what the next phase needs`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Step 5 — Repeat for each remaining phase</h3>
        <p>
          Open a new conversation for each subsequent phase. The plan file carries
          all necessary context between conversations.
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Step 5 — Next phase in a new conversation"
        code={`# New conversation for Phase 2
> /implementation Read implementation-plan.md and implement Phase 2: CRUD Endpoints

# Repeat steps 3–4 until all phases are complete`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---- Key Best Practices ---- */}
        <h2 id="key-best-practices">Key Best Practices</h2>
        <ol>
          <li>
            <strong>One phase per conversation.</strong> This is the single most
            important rule. Never try to squeeze two phases into one session — you
            lose the fresh-context advantage.
          </li>
          <li>
            <strong>Resist jumping ahead.</strong> If Claude suggests work that
            belongs to a later phase, redirect it. Phase boundaries exist to prevent
            context overload.
          </li>
          <li>
            <strong>Git commit after every phase.</strong> This creates clean
            rollback points and makes the plan file the single source of truth for
            project status.
          </li>
          <li>
            <strong>Combine with TDD.</strong> Write failing tests at the start of
            each phase. Claude implements until they pass. This gives you an
            objective &ldquo;done&rdquo; signal rather than relying on Claude&apos;s
            self-assessment.
          </li>
          <li>
            <strong>Keep phases small.</strong> If a phase takes more than
            15&ndash;20 minutes of Claude time, it&apos;s too big. Split it further.
          </li>
        </ol>

        {/* ---- RPI Framework ---- */}
        <h2 id="rpi-framework">The RPI Framework</h2>
        <p>
          The <strong>Research-Plan-Implement</strong> (RPI) framework extends
          phase-based development with three specialized agents and a disciplined
          command set. It&apos;s ideal for greenfield projects where you need to
          explore the problem space before committing to an architecture.
        </p>

        <h3>The Three Agents</h3>
        <ol>
          <li>
            <strong>Research Agent</strong> — Explores the codebase, reads
            documentation, and gathers requirements. Outputs findings to a research
            document.
          </li>
          <li>
            <strong>Planning Agent</strong> — Reads the research, creates a detailed
            implementation plan with phases, dependencies, and success criteria.
          </li>
          <li>
            <strong>Implementation Agent</strong> — Executes one phase at a time,
            strictly following the plan. Never researches or re-plans mid-phase.
          </li>
        </ol>

        <h3>The Eight Commands</h3>
      </article>

      <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-50 dark:bg-surface-800/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                Command
              </th>
              <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                Agent
              </th>
              <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
            {[
              ["/research", "Research", "Explore the codebase and gather requirements"],
              ["/research-summary", "Research", "Summarize findings into a research document"],
              ["/plan", "Planning", "Create a phased implementation plan from research"],
              ["/plan-review", "Planning", "Review and refine the plan before execution"],
              ["/implement", "Implementation", "Execute the current phase of the plan"],
              ["/phase-complete", "Implementation", "Mark current phase as done, run tests, commit"],
              ["/status", "Any", "Show current project status and phase progress"],
              ["/abort", "Any", "Stop current operation and save progress"],
            ].map(([cmd, agent, purpose]) => (
              <tr key={cmd}>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    {cmd}
                  </code>
                </td>
                <td className="px-4 py-3 font-medium text-surface-800 dark:text-surface-200">
                  {agent}
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  {purpose}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          The key discipline in RPI is that each agent stays in its lane. The
          Research Agent never writes code. The Implementation Agent never questions
          the plan. This separation prevents the &ldquo;scope creep&rdquo; that
          derails long sessions.
        </p>

        <hr />

        {/* ---------------------------------------------------------------- */}
        {/*  SECTION 7 — Planning With Files                                */}
        {/* ---------------------------------------------------------------- */}

        <h2 id="planning-with-files">Planning With Files</h2>
        <p>
          The <strong>planning-with-files</strong> skill (13.4k+ stars on GitHub)
          brings Manus-style persistent markdown planning to Claude Code. Instead of
          keeping plans only in the conversation, it writes and continuously updates
          three structured markdown files that survive across sessions.
        </p>
        <p>
          This approach treats planning artifacts as first-class project files — they
          live in your repo, get committed alongside code, and can be read by any
          team member or future Claude session.
        </p>

        {/* ---- The Three Planning Files ---- */}
        <h2 id="the-three-planning-files">The Three Planning Files</h2>
      </article>

      <CodeBlock
        language="text"
        title="Planning file structure"
        code={`.claude/
  task_plan.md      # The master plan — phases, tasks, status, acceptance criteria
  findings.md       # Research log — everything Claude discovers while exploring
  progress.md       # Session journal — what was done, what's next, blockers`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>task_plan.md</h3>
        <p>
          The master plan file. Contains the overall goal, a numbered list of
          phases, detailed tasks within each phase, and checkboxes for tracking
          completion. Claude updates this file as phases are finished.
        </p>

        <h3>findings.md</h3>
        <p>
          A structured research log. Every time Claude reads a file, searches the
          codebase, or discovers something relevant, it records the finding here.
          This prevents Claude from re-reading the same files and losing context
          to redundant exploration.
        </p>

        <h3>progress.md</h3>
        <p>
          A session-by-session journal. At the start of each conversation, Claude
          reads this file to understand where the project left off. At the end, it
          writes a summary of what was accomplished, what&apos;s next, and any
          blockers encountered.
        </p>

        {/* ---- The 2-Action Rule ---- */}
        <h2 id="the-2-action-rule">The 2-Action Rule</h2>
        <p>
          The most important discipline in planning-with-files is the
          <strong> 2-Action Rule</strong>: after every 2 view or search operations,
          Claude must save its findings to <code>findings.md</code> before
          continuing.
        </p>
        <p>
          This prevents a common failure mode where Claude reads 10+ files, fills
          its context window with raw content, and then forgets earlier discoveries.
          By writing findings to disk every 2 actions, knowledge is persisted
          externally and the context window stays lean.
        </p>
      </article>

      <CodeBlock
        language="text"
        title="The 2-Action Rule in practice"
        code={`Action 1: Read src/auth/middleware.ts
Action 2: Search for "JWT" across the codebase
  → STOP — Save to findings.md:
    "Auth uses JWT tokens validated in middleware.ts (line 42).
     Token refresh is handled in src/auth/refresh.ts.
     No rate limiting on the refresh endpoint."

Action 3: Read src/auth/refresh.ts
Action 4: Read src/config/security.ts
  → STOP — Save to findings.md:
    "Refresh tokens expire after 7 days (config/security.ts:18).
     No rotation strategy — same refresh token reused until expiry.
     Potential security concern: stolen refresh tokens valid for 7 days."`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>The 3-Strike Error Protocol</h3>
        <p>
          When Claude encounters an error during implementation, the 3-Strike Error
          Protocol prevents it from spiraling into an endless debugging loop:
        </p>
        <ol>
          <li>
            <strong>Strike 1:</strong> Attempt to fix the error directly. Record the
            error and attempted fix in <code>progress.md</code>.
          </li>
          <li>
            <strong>Strike 2:</strong> Try an alternative approach. Update
            <code> progress.md</code> with what was tried and why it failed.
          </li>
          <li>
            <strong>Strike 3:</strong> Stop implementation. Write a detailed blocker
            entry in <code>progress.md</code> describing the error, both attempted
            fixes, and suggested next steps. Ask the developer for guidance.
          </li>
        </ol>
        <p>
          This protocol ensures that Claude never wastes more than three attempts on
          a single error, preserving context for productive work instead of burning
          it on repeated failures.
        </p>

        <h3>The 5-Question Reboot Check</h3>
        <p>
          At the start of every new conversation, Claude runs through five questions
          to re-establish context from the planning files:
        </p>
        <ol>
          <li>
            <strong>What is the goal?</strong> — Read <code>task_plan.md</code> for
            the project objective.
          </li>
          <li>
            <strong>What has been done?</strong> — Read <code>progress.md</code> for
            completed work.
          </li>
          <li>
            <strong>What did we learn?</strong> — Read <code>findings.md</code> for
            discovered constraints and decisions.
          </li>
          <li>
            <strong>What&apos;s next?</strong> — Identify the current phase and next
            unchecked task in <code>task_plan.md</code>.
          </li>
          <li>
            <strong>Are there blockers?</strong> — Check <code>progress.md</code>{" "}
            for any unresolved blockers from the previous session.
          </li>
        </ol>
        <p>
          This reboot check takes seconds but guarantees that Claude picks up
          exactly where the last session left off — no redundant exploration, no
          forgotten decisions, no context lost between conversations.
        </p>
      </article>
    </div>
  );
}
