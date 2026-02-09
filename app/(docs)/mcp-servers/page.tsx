import { Metadata } from "next";
import { CodeBlock } from "@/components/content/CodeBlock";
import { Callout } from "@/components/content/Callout";
import { PageHeader } from "@/components/content/PageHeader";

export const metadata: Metadata = {
  title: "MCP Servers",
  description:
    "Learn how to extend Claude Code with the Model Context Protocol (MCP) to connect external tools, APIs, and data sources.",
};

export default function McpServersPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="MCP Servers"
        description="Extend Claude Code with the Model Context Protocol to connect external tools and data sources."
        badge="Section 11"
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* What Is MCP?                                                      */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="what-is-mcp">What Is MCP?</h2>
        <p>
          The <strong>Model Context Protocol (MCP)</strong> is an open standard
          that connects Claude Code to external tools, APIs, and data sources.
          Think of it as a universal plug system &mdash; instead of building
          custom integrations for every service, MCP provides a single protocol
          that any tool provider can implement.
        </p>
        <p>
          Claude Code acts as an <strong>MCP client</strong> that can connect to
          any number of MCP servers. Each server exposes a set of tools that
          Claude can invoke during a conversation, giving it the ability to
          query databases, fetch issues from a project tracker, monitor errors,
          and much more.
        </p>

        <h3>Architecture Overview</h3>
        <p>
          MCP supports two transport mechanisms for connecting to servers:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Transport
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  How It Works
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Examples
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-dark-border">
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    HTTP (SSE)
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Claude Code connects to a remote URL over HTTP using Server-Sent Events
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Notion, GitHub, Sentry
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    Stdio
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Claude Code spawns a local process and communicates over stdin/stdout
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Database servers, filesystem tools
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Remote servers</strong> (HTTP) are hosted services &mdash; you
          point Claude Code at a URL and it connects. <strong>Local
          servers</strong> (Stdio) run as a child process on your machine,
          giving you access to local resources like databases and file systems
          without exposing them to the network.
        </p>
      </article>

      <Callout type="ce">
        <p>
          MCP represents the <strong>&ldquo;Tools&rdquo; pillar</strong> of
          context engineering. While CLAUDE.md controls what Claude knows and
          memory files control what it remembers, MCP extends{" "}
          <strong>what Claude can access and do</strong>. By connecting the
          right MCP servers, you give Claude the ability to interact with your
          entire development ecosystem &mdash; from issue trackers to databases
          to monitoring systems.
        </p>
      </Callout>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* Adding MCP Servers                                                */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="adding-mcp-servers">Adding MCP Servers</h2>
        <p>
          You add MCP servers using the <code>claude mcp add</code> command.
          The syntax differs slightly depending on the transport type.
        </p>

        <h3>HTTP Transport (Remote Servers)</h3>
        <p>
          For cloud-hosted MCP servers, provide the server name and its URL.
          Claude Code will connect over HTTP with Server-Sent Events:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Adding remote MCP servers (HTTP)"
        code={`# Notion — access pages, databases, and comments
claude mcp add notion https://mcp.notion.com/sse

# GitHub — repos, issues, PRs, and actions
claude mcp add github https://mcp.github.com/sse

# Sentry — error monitoring and issue tracking
claude mcp add sentry https://mcp.sentry.dev/sse`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Stdio Transport (Local Servers)</h3>
        <p>
          For local MCP servers, you specify the command that Claude Code
          should spawn. The server runs as a child process and communicates
          over stdin/stdout:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Adding a local MCP server (Stdio)"
        code={`# Database explorer — connect to PostgreSQL, MySQL, SQLite, etc.
claude mcp add database -- npx @bytebase/dbhub --transport stdio --dsn "postgresql://localhost:5432/mydb"`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>Environment Variables</h3>
        <p>
          Many MCP servers require API keys or other secrets. Use the{" "}
          <code>-e</code> flag to pass environment variables to the server
          process:
        </p>
      </article>

      <CodeBlock
        language="bash"
        title="Passing environment variables"
        code={`# Airtable MCP server with an API token
claude mcp add airtable -e AIRTABLE_API_TOKEN=pat_xxxx -- npx @airtable/mcp-server --transport stdio`}
      />

      <Callout type="tip" title="Keep Secrets Safe">
        <p>
          Avoid hardcoding API keys directly in the command. Instead, reference
          environment variables from your shell or a <code>.env</code> file
          that is excluded from version control. Some MCP servers also support
          OAuth-based authentication, which avoids API keys entirely.
        </p>
      </Callout>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* MCP Scopes                                                        */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="mcp-scopes">MCP Scopes</h2>
        <p>
          MCP servers can be configured at three different scopes, controlling
          who sees them and where they apply. Use the <code>-s</code> flag
          with <code>claude mcp add</code> to set the scope:
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-surface-200 dark:border-dark-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 dark:bg-surface-800/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Scope
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Config File
                </th>
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-300">
                  Shared via VCS?
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
                    local
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  <code className="text-xs">.claude/settings.json</code> (per project)
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  No
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Default scope. Your personal MCP servers for this project only.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    project
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  <code className="text-xs">.mcp.json</code> (repo root)
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Yes
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Shared with the team. Everyone on the project gets these servers.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-surface-800 dark:text-primary-300">
                    user
                  </code>
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  <code className="text-xs">~/.claude.json</code> (global)
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  No
                </td>
                <td className="px-4 py-3 text-surface-600 dark:text-surface-400">
                  Available in every project. Good for personal utilities.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <CodeBlock
        language="bash"
        title="Setting MCP scopes"
        code={`# Add to the project scope (shared via .mcp.json)
claude mcp add -s project sentry https://mcp.sentry.dev/sse

# Add to the user scope (available globally)
claude mcp add -s user github https://mcp.github.com/sse

# Default (local scope — this project, this user)
claude mcp add notion https://mcp.notion.com/sse`}
      />

      <Callout type="info" title="Team Sharing">
        <p>
          When you add a server with the <code>project</code> scope, it
          creates or updates a <code>.mcp.json</code> file at the root of
          your repository. Commit this file to version control so every team
          member automatically gets the same MCP servers configured. Note
          that secrets should still be managed individually &mdash;{" "}
          <code>.mcp.json</code> should not contain API keys.
        </p>
      </Callout>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* Practical Examples                                                */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="practical-examples">Practical Examples</h2>
        <p>
          Here are some real-world scenarios showing how MCP servers
          supercharge Claude Code&apos;s capabilities.
        </p>

        <h3>Sentry Error Monitoring</h3>
        <p>
          Connect Sentry to let Claude investigate production errors, pull
          stack traces, and propose fixes &mdash; all within a single
          conversation:
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Sentry workflow"
        code={`# Setup
claude mcp add sentry https://mcp.sentry.dev/sse

# In a conversation:
You: Look at the most recent unresolved errors in our project on Sentry.
     Find the one affecting the most users and fix it.

Claude: [uses Sentry MCP tools to list issues, fetches the top error,
         reads the stack trace, locates the bug in your codebase,
         and proposes a fix]`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>PostgreSQL Database Queries</h3>
        <p>
          With a database MCP server, Claude can explore schemas, run
          read-only queries, and help you understand your data:
        </p>
      </article>

      <CodeBlock
        language="text"
        title="Database workflow"
        code={`# Setup
claude mcp add database -- npx @bytebase/dbhub --transport stdio \\
  --dsn "postgresql://localhost:5432/myapp"

# In a conversation:
You: Show me the schema for the users and orders tables, then write
     a query to find all users who placed more than 5 orders last month.

Claude: [uses database MCP tools to inspect schema, runs a read-only
         query, returns results, and explains the query logic]`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>GitHub PR Review</h3>
        <p>
          Connect GitHub to let Claude review pull requests, check CI status,
          and leave comments:
        </p>
      </article>

      <CodeBlock
        language="text"
        title="GitHub PR review workflow"
        code={`# Setup
claude mcp add github https://mcp.github.com/sse

# In a conversation:
You: Review the open PR #142 on our repo. Check if the tests pass,
     look at the diff, and give me a summary of the changes with
     any concerns.

Claude: [uses GitHub MCP tools to fetch the PR diff, check CI status,
         read comments, and provides a thorough code review]`}
      />

      <Callout type="tip" title="Combine Multiple Servers">
        <p>
          The real power of MCP comes from combining servers. For example,
          connect both Sentry and GitHub so Claude can find a production
          error, trace it to the offending commit, create a fix, and open a
          PR &mdash; all in one conversation.
        </p>
      </Callout>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {/* ---------------------------------------------------------------- */}
        {/* Management                                                        */}
        {/* ---------------------------------------------------------------- */}
        <h2 id="management">Management</h2>
        <p>
          Claude Code provides several commands for managing your MCP server
          configurations.
        </p>

        <h3>CLI Commands</h3>

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
                  "claude mcp list",
                  "Show all configured MCP servers across all scopes",
                ],
                [
                  "claude mcp get <name>",
                  "Show details for a specific MCP server",
                ],
                [
                  "claude mcp remove <name>",
                  "Remove an MCP server configuration",
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
      </article>

      <CodeBlock
        language="bash"
        title="Managing MCP servers"
        code={`# List all configured servers
claude mcp list

# View details for a specific server
claude mcp get sentry

# Remove a server
claude mcp remove sentry`}
      />

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h3>In-Session Management</h3>
        <p>
          While inside the Claude Code REPL, you can use the{" "}
          <code>/mcp</code> slash command to view and manage MCP servers
          without leaving your session:
        </p>
      </article>

      <CodeBlock
        language="text"
        title="In-session MCP management"
        code={`# Inside the Claude Code REPL:
/mcp

# This opens an interactive view showing:
# - All connected MCP servers and their status
# - Available tools from each server
# - Connection health and any errors`}
      />

      <Callout type="warning" title="Server Permissions">
        <p>
          When you first use tools from an MCP server, Claude Code will ask
          for your permission. You can approve tools individually or trust all
          tools from a specific server. Review what each tool does before
          granting access &mdash; MCP servers can execute code, make API
          calls, and access sensitive data.
        </p>
      </Callout>
    </div>
  );
}
