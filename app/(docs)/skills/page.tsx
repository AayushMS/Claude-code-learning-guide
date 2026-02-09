import { Metadata } from "next";
import { CodeBlock } from "@/components/content/CodeBlock";
import { Callout } from "@/components/content/Callout";
import { PageHeader } from "@/components/content/PageHeader";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Master the Claude Code Skills system — reusable SKILL.md instruction files, slash commands, and the Skills Marketplace ecosystem with 160,000+ community skills.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Skills"
        description="Reusable instruction files and the Skills Marketplace ecosystem."
        badge="Sections 5 & 6"
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ------------------------------------------------------------------ */}
        {/*  SECTION 5 — Skills System                                         */}
        {/* ------------------------------------------------------------------ */}

        <h2 id="what-are-skills">What Are Skills?</h2>
        <p>
          Skills are reusable <code>SKILL.md</code> instruction files that give Claude Code
          domain-specific capabilities on demand. Instead of cramming every instruction into a single
          <code>CLAUDE.md</code>, you package related knowledge into a skill and invoke it with a
          <strong> /slash-command</strong>.
        </p>
        <p>
          Each skill is a Markdown file that follows a simple contract: a frontmatter header that
          declares the command name, description, and invocation mode, followed by the instructions
          Claude should follow when the skill is activated. When a skill is invoked, its contents are
          injected into Claude&apos;s context window — giving it instant expertise in a specific area.
        </p>

        <Callout type="ce">
          <p>
            Skills are a powerful form of <strong>context engineering</strong>. They pre-load specialized
            instructions into Claude&apos;s context window only when needed, keeping base context lean while
            enabling deep expertise on demand. Think of each skill as a &ldquo;just-in-time knowledge
            module&rdquo; — the right information, at the right time, in the right structure.
          </p>
        </Callout>

        {/* ------------------------------------------------------------------ */}
        {/*  Installation Locations                                            */}
        {/* ------------------------------------------------------------------ */}

        <h2 id="installation-locations">Installation Locations</h2>
        <p>
          Skills can live in three locations, each serving a different scope:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Location</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Path</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Scope</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Committed to Git?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                [
                  "Personal",
                  "~/.claude/skills/",
                  "Available in every project for you alone",
                  "No (user home dir)",
                ],
                [
                  "Project",
                  ".claude/skills/",
                  "Shared with every contributor on the repo",
                  "Yes (recommended)",
                ],
                [
                  "Plugin",
                  "Installed via plugin system",
                  "Third-party skills from GitHub repos or the marketplace",
                  "Tracked in .claude/plugins.json",
                ],
              ].map(([location, path, scope, git]) => (
                <tr key={location}>
                  <td className="px-4 py-3 font-medium text-surface-800 dark:text-surface-200">{location}</td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {path}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">{scope}</td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">{git}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*  Invocation Modes                                                  */}
        {/* ------------------------------------------------------------------ */}

        <h2 id="invocation-modes">Invocation Modes</h2>
        <p>
          The <code>invocation</code> field in a skill&apos;s frontmatter controls <em>who</em> can
          trigger it:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Mode</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Value</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                [
                  "User-invoked (default)",
                  "user-invoked",
                  "User types /command to trigger. Claude cannot invoke on its own.",
                ],
                [
                  "Model-invoked",
                  "model-invoked",
                  "Claude automatically triggers when relevant context is detected.",
                ],
                [
                  "User-only",
                  "user-only",
                  "Identical to user-invoked — explicitly disables model invocation.",
                ],
                [
                  "Model-only",
                  "model-only",
                  "Only Claude can trigger. Hidden from slash-command menu.",
                ],
              ].map(([mode, value, behavior]) => (
                <tr key={mode}>
                  <td className="px-4 py-3 font-medium text-surface-800 dark:text-surface-200">{mode}</td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {value}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">{behavior}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>String Substitutions</h3>
        <p>
          Skill files support dynamic values that are resolved at invocation time:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Substitution</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Resolves To</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                ["$ARGUMENTS", "The full string passed after the slash command"],
                ["$ARGUMENTS[0]", "The first space-delimited argument only"],
                ["${CLAUDE_SESSION_ID}", "Unique ID for the current Claude session"],
                ["!`command`", "Output of a shell command, executed at load time"],
              ].map(([sub, desc]) => (
                <tr key={sub}>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {sub}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*  Skill Examples                                                    */}
        {/* ------------------------------------------------------------------ */}

        <h2 id="skill-examples">Skill Examples</h2>
        <p>
          Below are practical skills you can drop into your project or personal directory today.
        </p>

        <h3>/explain-code</h3>
        <p>
          A user-invoked skill that produces structured explanations of any file or code block.
        </p>
      </article>

      <CodeBlock
        language="markdown"
        title=".claude/skills/explain-code/SKILL.md"
        code={`---
name: explain-code
description: Produce a clear, structured explanation of a code file or snippet
invocation: user-invoked
arguments: file_or_snippet
---

# Explain Code

Analyze \`$ARGUMENTS\` and produce a structured explanation:

1. **Purpose** — What does this code do at a high level?
2. **Key Components** — Break down the main functions, classes, or modules.
3. **Data Flow** — How does data move through the code?
4. **Dependencies** — What external libraries or modules are used?
5. **Edge Cases** — Note any error handling or boundary conditions.

Keep the explanation concise. Target a mid-level developer audience.
Use bullet points and code references (backtick the function names).`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>/fix-issue</h3>
        <p>
          Automatically reads a GitHub issue and implements a fix.
        </p>
      </article>

      <CodeBlock
        language="markdown"
        title=".claude/skills/fix-issue/SKILL.md"
        code={`---
name: fix-issue
description: Read a GitHub issue and implement a fix with tests
invocation: user-invoked
arguments: issue_number
---

# Fix Issue

1. Run \`gh issue view $ARGUMENTS[0] --json title,body,labels,comments\` to read the issue.
2. Analyze the problem described and locate the relevant source files.
3. Implement the fix following the project's code style (see CLAUDE.md).
4. Write or update tests that cover the fix.
5. Run the test suite to confirm nothing is broken.
6. Create a commit with message: "fix: resolve #$ARGUMENTS[0] — <short summary>"

Do NOT create a pull request unless explicitly asked.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>/deploy</h3>
        <p>
          A model-only skill that Claude can trigger when it detects deploy-related instructions in
          the conversation.
        </p>
      </article>

      <CodeBlock
        language="markdown"
        title=".claude/skills/deploy/SKILL.md"
        code={`---
name: deploy
description: Run the standard deploy pipeline with pre-flight checks
invocation: user-invoked
---

# Deploy Pipeline

Follow this sequence exactly:

1. **Pre-flight checks**
   - Run \`npm run lint\` — abort if errors.
   - Run \`npm test\` — abort if failures.
   - Run \`npm run build\` — abort if compilation errors.

2. **Version bump**
   - Ask the user: patch, minor, or major.
   - Run \`npm version <patch|minor|major>\`.

3. **Deploy**
   - Run the git remote URL check to confirm the remote.
   - Push tags: \`git push --follow-tags\`.
   - Run \`npm publish\` (if applicable) or the project's deploy script.

4. **Post-deploy**
   - Summarize what was deployed and the new version number.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>/pr-summary</h3>
        <p>
          Generates a pull request description from the current branch&apos;s diff.
        </p>
      </article>

      <CodeBlock
        language="markdown"
        title=".claude/skills/pr-summary/SKILL.md"
        code={`---
name: pr-summary
description: Generate a PR description from the current branch diff
invocation: user-invoked
---

# PR Summary Generator

1. Run \`git diff main...HEAD --stat\` to get the changed files overview.
2. Run \`git log main..HEAD --oneline\` to get the commit history.
3. Read the most important changed files to understand the changes.

Generate a PR description with:

## Summary
- 2-3 sentence overview of what changed and why.

## Changes
- Bulleted list of key changes, grouped by area.

## Testing
- Describe what was tested and how.

## Notes
- Anything reviewers should pay special attention to.

Output the description in a fenced markdown block so the user can copy it.`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ------------------------------------------------------------------ */}
        {/*  SECTION 6 — Skills Marketplace                                    */}
        {/* ------------------------------------------------------------------ */}

        <hr className="my-12" />

        <h2 id="skills-marketplace">Skills Marketplace</h2>
        <p>
          The <strong>Skills Marketplace</strong> at{" "}
          <a href="https://skillsmp.com" target="_blank" rel="noopener noreferrer">
            skillsmp.com
          </a>{" "}
          is the community hub for discovering, sharing, and installing skills. With over{" "}
          <strong>160,000+ skills</strong> and growing, it has become the de facto registry for
          AI coding assistant instructions.
        </p>
        <p>
          Skills on the marketplace are compatible with <strong>Claude Code</strong>,{" "}
          <strong>OpenAI Codex</strong>, and <strong>ChatGPT</strong> — most follow the same
          Markdown-based format. Each listing includes a README, star count, install command,
          and compatibility badges.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/*  Notable Skills by Company                                         */}
        {/* ------------------------------------------------------------------ */}

        <h2 id="notable-skills">Notable Skills by Company</h2>
        <p>
          Many companies publish official skills that encode their platform&apos;s best practices.
          Here are the most impactful:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Company</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Skills</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">What They Do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                [
                  "Anthropic (Official)",
                  "docx, pdf, frontend-design, linear, think-tool",
                  "Official skills for document handling, UI design from screenshots, Linear integration, and structured reasoning",
                ],
                [
                  "Vercel",
                  "next-js, v0-design",
                  "Next.js best practices, App Router patterns, and V0-style component generation",
                ],
                [
                  "Cloudflare",
                  "workers, d1, r2",
                  "Deploy to Cloudflare Workers, query D1 databases, manage R2 storage buckets",
                ],
                [
                  "Hugging Face",
                  "transformers, spaces",
                  "Fine-tuning workflows, model card generation, Spaces deployment",
                ],
                [
                  "Trail of Bits",
                  "security-audit, semgrep",
                  "Automated security auditing, vulnerability detection, Semgrep rule authoring",
                ],
                [
                  "Stripe",
                  "stripe-agent",
                  "Payment integration, webhook setup, Stripe API patterns and error handling",
                ],
                [
                  "Sentry",
                  "sentry-debug",
                  "Error triage from Sentry dashboard, stack trace analysis, fix suggestions",
                ],
                [
                  "HashiCorp",
                  "terraform, vault",
                  "Infrastructure-as-code generation, Vault secret management, HCL best practices",
                ],
              ].map(([company, skills, description]) => (
                <tr key={company}>
                  <td className="px-4 py-3 font-medium text-surface-800 dark:text-surface-200">{company}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {skills.split(", ").map((skill) => (
                        <code
                          key={skill}
                          className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300"
                        >
                          {skill}
                        </code>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Community Favorites</h3>
        <p>
          Beyond official skills, the community has produced some outstanding contributions:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Skill</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Description</th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">Why It&apos;s Popular</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              {[
                [
                  "Superpowers",
                  "Opinionated meta-skill that enhances Claude's base reasoning and tool use",
                  "Noticeable quality boost with zero config",
                ],
                [
                  "planning-with-files",
                  "Forces Claude to create and follow a plan.md before coding",
                  "Dramatically reduces rework on complex tasks",
                ],
                [
                  "Claude Task Master",
                  "Breaks large projects into trackable sub-tasks with dependencies",
                  "Essential for multi-day agentic workflows",
                ],
                [
                  "commit-msg",
                  "Generates conventional commit messages from staged changes",
                  "Consistent, informative git history",
                ],
                [
                  "test-writer",
                  "Generates comprehensive test suites for existing code",
                  "Speeds up test coverage dramatically",
                ],
                [
                  "refactor",
                  "Applies systematic refactoring patterns with before/after diffs",
                  "Safe, reviewable code improvements",
                ],
              ].map(([skill, description, popular]) => (
                <tr key={skill}>
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                      {skill}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">{description}</td>
                  <td className="px-4 py-3 text-surface-600 dark:text-surface-400">{popular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*  How to Install                                                    */}
        {/* ------------------------------------------------------------------ */}

        <h2 id="how-to-install">How to Install Skills</h2>
        <p>
          There are three ways to add skills to your workflow:
        </p>

        <h3>1. Plugin System (Recommended)</h3>
        <p>
          The simplest method — use the <code>/install-plugin</code> command directly in Claude Code:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Install via plugin system"
        code={`# Install from a GitHub repository
/install-plugin https://github.com/anthropics/skills/tree/main/skills/frontend-design

# The skill is now available immediately
/frontend-design Build a dashboard with a sidebar nav and data table`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>2. Git Clone (Manual)</h3>
        <p>
          Clone the skill repository directly into your skills directory:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Manual git clone installation"
        code={`# Personal skill (available everywhere)
git clone https://github.com/user/my-skill.git ~/.claude/skills/my-skill

# Project skill (shared with team)
git clone https://github.com/user/my-skill.git .claude/skills/my-skill`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>3. Manual Copy</h3>
        <p>
          For quick one-off skills, simply create the directory and <code>SKILL.md</code> file:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Create a skill manually"
        code={`mkdir -p .claude/skills/my-custom-skill
cat > .claude/skills/my-custom-skill/SKILL.md << 'EOF'
---
name: my-custom-skill
description: Does something useful
invocation: user-invoked
---

# My Custom Skill

Your instructions here...
EOF`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <Callout type="tip" title="Tip: Check installed skills">
          <p>
            Run <code>/skills</code> inside Claude Code to see all currently available skills,
            their source (personal, project, or plugin), and their invocation mode.
          </p>
        </Callout>

        {/* ------------------------------------------------------------------ */}
        {/*  How to Publish                                                    */}
        {/* ------------------------------------------------------------------ */}

        <h2 id="how-to-publish">How to Publish a Skill</h2>
        <p>
          Sharing your skill with the community is straightforward. Follow these steps to get
          listed on the Skills Marketplace:
        </p>

        <h3>Step 1: Create a Public Repository</h3>
        <p>
          Your GitHub repo should contain at minimum a <code>SKILL.md</code> file at the root
          (or inside a named directory). Include a <code>README.md</code> with usage examples.
        </p>

        <h3>Step 2: Structure Your SKILL.md</h3>
        <p>
          Follow the standard frontmatter format:
        </p>
      </article>

      <CodeBlock
        language="markdown"
        title="SKILL.md template for publishing"
        code={`---
name: your-skill-name
description: A clear, one-line description of what this skill does
invocation: user-invoked
arguments: optional_arg_description
---

# Your Skill Name

Detailed instructions for Claude to follow when this skill is invoked.

## Steps
1. First, do this...
2. Then, do that...
3. Finally, output the result in this format...

## Constraints
- Do NOT do this...
- Always prefer that...`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Step 3: Add a marketplace.json</h3>
        <p>
          Create a <code>marketplace.json</code> in the repo root to provide metadata for the
          Skills Marketplace listing:
        </p>
      </article>

      <CodeBlock
        language="json"
        title="marketplace.json"
        code={`{
  "name": "your-skill-name",
  "description": "A clear description for the marketplace listing",
  "version": "1.0.0",
  "author": "your-github-username",
  "tags": ["category", "language", "framework"],
  "compatibility": ["claude-code", "codex", "chatgpt"],
  "invocation": "user-invoked",
  "arguments": "optional_arg_description",
  "examples": [
    "/your-skill-name src/app.ts",
    "/your-skill-name --verbose"
  ]
}`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Step 4: Submit to the Marketplace</h3>
        <p>
          Submit your skill to{" "}
          <a href="https://skillsmp.com" target="_blank" rel="noopener noreferrer">
            skillsmp.com
          </a>{" "}
          by following the &ldquo;Publish a Skill&rdquo; workflow on the site. You&apos;ll
          connect your GitHub account, select the repository, and the marketplace will
          automatically validate your <code>SKILL.md</code> and <code>marketplace.json</code>.
        </p>
        <p>
          Once approved, your skill appears in search results and can be installed by anyone with
          a single command. The marketplace tracks install counts, star ratings, and compatibility
          badges.
        </p>

        <Callout type="info" title="Publishing best practices">
          <p>
            Write a descriptive <code>README.md</code> with real-world usage examples. Include
            a &ldquo;Before/After&rdquo; section showing what Claude produces with and without
            your skill. Tag your repo with <code>claude-skill</code> on GitHub for discoverability.
          </p>
        </Callout>
      </article>
    </div>
  );
}
