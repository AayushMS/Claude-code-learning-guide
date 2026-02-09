import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { navItems } from "@/lib/navigation";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-surface-200 dark:border-dark-border">
          {/* Background texture */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,_var(--color-primary-950)_0%,_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMTE2LDEzOSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 dark:opacity-30" />

          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800/50 dark:bg-primary-950/30 dark:text-primary-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
                </span>
                Open-source learning resource
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-surface-900 sm:text-6xl dark:text-surface-50">
                Master{" "}
                <span className="bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-violet-400">
                  Claude Code
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-600 dark:text-surface-400">
                A comprehensive, example-driven guide — from zero to advanced multi-agent workflows.
                Learn context engineering, skills, hooks, MCP servers, and everything in between.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/getting-started"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 dark:shadow-primary-900/30"
                >
                  Get Started
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/context-engineering"
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-300 bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition-all hover:bg-violet-50 dark:border-violet-700/50 dark:bg-dark-surface dark:text-violet-300 dark:hover:bg-violet-950/30"
                >
                  <svg className="h-4 w-4 sparkle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Context Engineering
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Terminal */}
        <section className="border-b border-surface-200 bg-surface-50 py-16 dark:border-dark-border dark:bg-dark-surface/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-surface-200 bg-surface-900 shadow-2xl dark:border-dark-border dark:bg-surface-950">
              <div className="flex items-center gap-2 border-b border-surface-700 bg-surface-800 px-4 py-3 dark:bg-surface-900">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-surface-400">Terminal</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-surface-400">
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-surface-200">curl -fsSL https://claude.ai/install.sh | bash</span>
                </div>
                <div className="mt-2 text-surface-400">
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-surface-200">cd your-project</span>
                </div>
                <div className="mt-2 text-surface-400">
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-surface-200">claude</span>
                </div>
                <div className="mt-2 text-surface-500">
                  {">"} <span className="text-primary-400">/init</span>
                  <span className="ml-4 text-surface-600"># Auto-generates CLAUDE.md</span>
                </div>
                <div className="mt-3 flex items-center text-surface-500">
                  <span className="text-emerald-400">✓</span>
                  <span className="ml-2">Ready to build with Claude Code</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context Engineering Spotlight */}
        <section className="relative overflow-hidden border-b border-surface-200 py-20 dark:border-dark-border">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/30 to-transparent dark:via-violet-950/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-white to-violet-50 shadow-xl dark:border-violet-800/30 dark:from-dark-surface dark:to-violet-950/20">
                <div className="ce-gradient-animated h-1" />
                <div className="p-8 sm:p-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-primary-600 text-white shadow-lg shadow-violet-500/25">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl dark:text-surface-100">
                        Context Engineering
                      </h2>
                      <p className="mt-1 text-sm font-medium text-violet-600 dark:text-violet-400">
                        The centerpiece of effective AI development
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-surface-600 dark:text-surface-400">
                    Context engineering is the discipline of designing <strong className="text-surface-800 dark:text-surface-200">what information the AI model sees</strong>,{" "}
                    <strong className="text-surface-800 dark:text-surface-200">when it sees it</strong>, and{" "}
                    <strong className="text-surface-800 dark:text-surface-200">in what structure</strong>.
                    It&apos;s the successor to prompt engineering — and the key to unlocking Claude&apos;s full potential.
                  </p>
                  <blockquote className="mt-6 border-l-2 border-violet-300 pl-4 text-sm italic text-surface-500 dark:border-violet-700 dark:text-surface-400">
                    &ldquo;Claude is already smart enough — intelligence is not the bottleneck, context is.&rdquo; — Anthropic
                  </blockquote>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { title: "System Prompt", desc: "Minimal, precise instructions" },
                      { title: "Tools", desc: "Self-contained, purpose-specific" },
                      { title: "Data Retrieval", desc: "Just-in-time context" },
                      { title: "Long-Horizon", desc: "History compression & sub-agents" },
                    ].map((pillar) => (
                      <div
                        key={pillar.title}
                        className="rounded-xl border border-violet-100 bg-white/80 p-4 dark:border-violet-800/30 dark:bg-dark-surface/80"
                      >
                        <div className="text-sm font-semibold text-surface-900 dark:text-surface-100">
                          {pillar.title}
                        </div>
                        <div className="mt-1 text-xs text-surface-500 dark:text-surface-400">
                          {pillar.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/context-engineering"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/30"
                    >
                      Explore Context Engineering
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl dark:text-surface-100">
                Your Learning Path
              </h2>
              <p className="mt-3 text-surface-600 dark:text-surface-400">
                From installation to multi-agent orchestration — everything you need to master Claude Code.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {navItems.map((item, i) => (
                <Link key={item.href} href={item.href} className="group">
                  <div className={`relative overflow-hidden rounded-xl border p-6 transition-all hover:shadow-lg ${
                    item.badge
                      ? "border-violet-200 bg-gradient-to-br from-violet-50/50 to-primary-50/50 hover:shadow-violet-100/50 dark:border-violet-800/30 dark:from-violet-950/20 dark:to-primary-950/20 dark:hover:shadow-violet-900/20"
                      : "border-surface-200 bg-white hover:border-primary-200 hover:shadow-primary-100/50 dark:border-dark-border dark:bg-dark-surface dark:hover:border-primary-800/50 dark:hover:shadow-primary-900/20"
                  }`}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-100 text-xs font-bold text-surface-500 dark:bg-surface-800 dark:text-surface-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-semibold text-surface-900 dark:text-surface-100">
                        {item.title}
                        {item.badge && <span className="ml-1.5 sparkle text-violet-500">{item.badge}</span>}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-surface-600 dark:text-surface-400">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400">
                      Read guide
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
