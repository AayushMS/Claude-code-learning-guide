import { Metadata } from "next";
import { Callout } from "@/components/content/Callout";
import { PageHeader } from "@/components/content/PageHeader";

export const metadata: Metadata = {
  title: "Anthropic Academy",
  description:
    "Free, self-paced Anthropic Academy courses covering Claude Code, the Claude API, prompt engineering, MCP, and more — with certificates of completion.",
};

export default function AcademyPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Anthropic Academy"
        description="Free, self-paced courses with certificates of completion."
        badge="Section 2"
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          Anthropic Academy is Anthropic&apos;s official learning platform. Every course listed
          below is <strong>free</strong> and <strong>self-paced</strong>, and most award a
          certificate of completion. Whether you&apos;re a developer building with the API, a
          prompt engineer refining your craft, or someone exploring AI literacy for the first
          time, there&apos;s a track for you.
        </p>

        <Callout type="ce">
          <p>
            Context Engineering is the framework that ties all of these courses together. The
            concepts you learn in every track — from prompt design to tool use to memory
            management — are all facets of context engineering. As you work through the Academy,
            think about <em>what information the model sees, when it sees it, and in what
            structure</em>.
          </p>
        </Callout>

        {/* ------------------------------------------------------------------ */}
        {/* Developer Track                                                     */}
        {/* ------------------------------------------------------------------ */}
        <h2 id="developer-track">Developer Track (Recommended Order)</h2>
        <p>
          This is the fastest path from &ldquo;I&apos;ve never used Claude Code&rdquo; to
          &ldquo;I&apos;m building production agents.&rdquo; Take the courses in order — each
          one builds on the previous.
        </p>

        <Callout type="tip">
          <p>
            <strong>Start here:</strong>{" "}
            <a
              href="https://academy.anthropic.com/courses/claude-code-in-action"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Code in Action
            </a>{" "}
            is the single best starting point. It covers installation, CLAUDE.md authoring,
            agentic workflows, and real-world project patterns — all in one hands-on course.
          </p>
        </Callout>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  #
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Course
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  What You&apos;ll Learn
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              <tr>
                <td className="px-4 py-3 font-medium text-surface-500 dark:text-surface-400">
                  1
                </td>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  Claude Code in Action
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Installation, CLAUDE.md, agentic workflows, multi-file edits, real project patterns
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/claude-code-in-action"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-500 dark:text-surface-400">
                  2
                </td>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  Building with the Claude API
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  API keys, messages endpoint, streaming, tool use, structured outputs, vision
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/building-with-the-claude-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-500 dark:text-surface-400">
                  3
                </td>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  Intro to MCP
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Model Context Protocol fundamentals, connecting tools, building your first MCP server
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/intro-to-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-500 dark:text-surface-400">
                  4
                </td>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  MCP Advanced Topics
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Advanced server patterns, authentication, multi-server orchestration, production deployment
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/mcp-advanced-topics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* GitHub-Based Courses                                                */}
        {/* ------------------------------------------------------------------ */}
        <h2 id="github-based-courses">GitHub-Based Courses</h2>
        <p>
          These open-source repositories are maintained by Anthropic and the community. They
          use Jupyter notebooks so you can run every example locally or in Google Colab.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Repository
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Stars
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Description
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              <tr>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  Prompt Engineering Tutorial
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  <span className="inline-flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    29.8k+
                  </span>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  A comprehensive, interactive tutorial covering every major prompting technique — from
                  basic role prompting to advanced chain-of-thought and tool use. Nine chapters of
                  hands-on Jupyter notebooks.
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://github.com/anthropics/prompt-eng-interactive-tutorial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    GitHub
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  Anthropic Courses
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  <span className="inline-flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    18.5k+
                  </span>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  A five-course track covering real-world Claude usage: Prompt Engineering, Real-World
                  Prompting, Tool Use, Prompt Evaluations, and an Agents course. Each course contains
                  exercises with answer keys.
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://github.com/anthropics/courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    GitHub
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Foundations & Literacy                                               */}
        {/* ------------------------------------------------------------------ */}
        <h2 id="foundations-literacy">Foundations &amp; Literacy</h2>
        <p>
          Not everyone using Claude is a developer. These courses are designed for anyone who
          wants to understand AI fundamentals and use Claude effectively in their daily work —
          no coding required.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Course
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Audience
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  What You&apos;ll Learn
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              <tr>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  Claude 101
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Everyone
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Core capabilities of Claude, how to write effective prompts, and practical use cases
                  for work and personal projects
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/claude-101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  AI Fluency Framework
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Professionals
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  A structured approach to building AI fluency across your organization — mental models,
                  evaluation strategies, and responsible use patterns
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/ai-fluency-framework"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  AI Fluency for Students
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Students
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  How to use AI as a learning companion — research assistance, study techniques,
                  critical thinking, and academic integrity
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/ai-fluency-for-students"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  AI Fluency for Educators
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Educators
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Strategies for integrating AI into teaching — curriculum design, assessment,
                  classroom policies, and helping students use AI responsibly
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/ai-fluency-for-educators"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Cloud Provider Tracks                                               */}
        {/* ------------------------------------------------------------------ */}
        <h2 id="cloud-provider-tracks">Cloud Provider Tracks</h2>
        <p>
          If your organization accesses Claude through a cloud provider, these courses show you
          how to integrate Claude into your existing infrastructure using provider-specific
          SDKs and services.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Course
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Provider
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  What You&apos;ll Learn
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              <tr>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  Amazon Bedrock
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  AWS
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Using Claude through Amazon Bedrock — setup, authentication, Boto3 SDK integration,
                  and deploying Claude-powered applications on AWS infrastructure
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/amazon-bedrock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-surface-800 dark:text-surface-200">
                  Google Vertex AI
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  GCP
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Using Claude through Google Cloud&apos;s Vertex AI — project configuration, SDK setup,
                  and building Claude applications within the Google Cloud ecosystem
                </td>
                <td className="px-4 py-3">
                  <a
                    href="https://academy.anthropic.com/courses/google-vertex-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Enroll
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <p>
          All courses are regularly updated as new Claude capabilities ship. If you complete a
          course and it later receives new content, you can revisit it at any time — your
          progress is saved.
        </p>
      </article>
    </div>
  );
}
