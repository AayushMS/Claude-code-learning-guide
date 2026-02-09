export interface NavItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
  icon?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navItems: NavItem[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    description: "Installation, first run, and the core workflow",
  },
  {
    title: "Academy",
    href: "/academy",
    description: "Free Anthropic Academy courses and learning tracks",
  },
  {
    title: "Context Engineering",
    href: "/context-engineering",
    description: "The discipline of designing what the AI model sees",
    badge: "★",
  },
  {
    title: "Development Workflow",
    href: "/development-workflow",
    description: "Phase-based development and planning with files",
  },
  {
    title: "Skills",
    href: "/skills",
    description: "Skills system and the Skills Marketplace",
  },
  {
    title: "Agents",
    href: "/agents",
    description: "Sub-agent development and multi-agent orchestration",
  },
  {
    title: "Hooks",
    href: "/hooks",
    description: "Automating your workflow with lifecycle hooks",
  },
  {
    title: "MCP Servers",
    href: "/mcp-servers",
    description: "Extending Claude Code with Model Context Protocol",
  },
  {
    title: "Reference",
    href: "/reference",
    description: "Shortcuts, GitHub integration, and curated resources",
  },
];

export const sidebarGroups: NavGroup[] = [
  {
    title: "Foundations",
    items: [
      navItems[0], // Getting Started
      navItems[1], // Academy
      navItems[2], // Context Engineering
    ],
  },
  {
    title: "Workflow",
    items: [
      navItems[3], // Development Workflow
      navItems[4], // Skills
    ],
  },
  {
    title: "Advanced",
    items: [
      navItems[5], // Agents
      navItems[6], // Hooks
      navItems[7], // MCP Servers
    ],
  },
  {
    title: "More",
    items: [
      navItems[8], // Reference
    ],
  },
];

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export const pageToc: Record<string, TocItem[]> = {
  "/getting-started": [
    { id: "installation", title: "Installation", level: 2 },
    { id: "first-run", title: "First Run", level: 2 },
    { id: "initialize-your-project", title: "Initialize Your Project", level: 2 },
    { id: "the-core-workflow", title: "The Core Workflow", level: 2 },
  ],
  "/academy": [
    { id: "developer-track", title: "Developer Track", level: 2 },
    { id: "github-based-courses", title: "GitHub-Based Courses", level: 2 },
    { id: "foundations-literacy", title: "Foundations & Literacy", level: 2 },
    { id: "cloud-provider-tracks", title: "Cloud Provider Tracks", level: 2 },
  ],
  "/context-engineering": [
    { id: "what-is-context-engineering", title: "What is Context Engineering?", level: 2 },
    { id: "the-four-pillars", title: "The Four Pillars", level: 2 },
    { id: "the-memory-hierarchy", title: "The Memory Hierarchy", level: 2 },
    { id: "writing-an-effective-claudemd", title: "Writing an Effective CLAUDE.md", level: 2 },
    { id: "progressive-disclosure-with-rules", title: "Progressive Disclosure with Rules", level: 2 },
    { id: "the-import-system", title: "The @import System", level: 2 },
    { id: "context-management-commands", title: "Context Management Commands", level: 2 },
    { id: "the-6-principles", title: "The 6 Principles (Manus AI)", level: 2 },
  ],
  "/development-workflow": [
    { id: "the-problem-it-solves", title: "The Problem It Solves", level: 2 },
    { id: "quantified-results", title: "Quantified Results", level: 2 },
    { id: "the-three-command-system", title: "The Three-Command System", level: 2 },
    { id: "workflow", title: "Workflow", level: 2 },
    { id: "key-best-practices", title: "Key Best Practices", level: 2 },
    { id: "rpi-framework", title: "RPI Framework", level: 2 },
    { id: "planning-with-files", title: "Planning With Files", level: 2 },
    { id: "the-three-planning-files", title: "The Three Planning Files", level: 3 },
    { id: "the-2-action-rule", title: "The 2-Action Rule", level: 3 },
  ],
  "/skills": [
    { id: "what-are-skills", title: "What Are Skills?", level: 2 },
    { id: "installation-locations", title: "Installation Locations", level: 2 },
    { id: "invocation-modes", title: "Invocation Modes", level: 2 },
    { id: "skill-examples", title: "Skill Examples", level: 2 },
    { id: "skills-marketplace", title: "Skills Marketplace", level: 2 },
    { id: "notable-skills", title: "Notable Skills", level: 2 },
    { id: "how-to-install", title: "How to Install", level: 2 },
    { id: "how-to-publish", title: "How to Publish", level: 2 },
  ],
  "/agents": [
    { id: "architecture-overview", title: "Architecture Overview", level: 2 },
    { id: "built-in-agent-types", title: "Built-In Agent Types", level: 2 },
    { id: "when-to-use-sub-agents", title: "When to Use Sub-Agents", level: 2 },
    { id: "practical-examples", title: "Practical Examples", level: 2 },
    { id: "creating-custom-sub-agents", title: "Creating Custom Sub-Agents", level: 2 },
    { id: "multi-agent-orchestration", title: "Multi-Agent Orchestration", level: 2 },
    { id: "agent-teams", title: "Agent Teams", level: 2 },
    { id: "token-economics", title: "Token Economics", level: 2 },
  ],
  "/hooks": [
    { id: "what-are-hooks", title: "What Are Hooks?", level: 2 },
    { id: "hook-types", title: "Hook Types", level: 2 },
    { id: "lifecycle-events", title: "Lifecycle Events", level: 2 },
    { id: "block-destructive-commands", title: "Block Destructive Commands", level: 2 },
    { id: "auto-format-after-edits", title: "Auto-Format After Edits", level: 2 },
    { id: "quality-gate", title: "Quality Gate", level: 2 },
    { id: "agent-based-verification", title: "Agent-Based Verification", level: 2 },
  ],
  "/mcp-servers": [
    { id: "what-is-mcp", title: "What Is MCP?", level: 2 },
    { id: "adding-mcp-servers", title: "Adding MCP Servers", level: 2 },
    { id: "mcp-scopes", title: "MCP Scopes", level: 2 },
    { id: "practical-examples", title: "Practical Examples", level: 2 },
    { id: "management", title: "Management", level: 2 },
  ],
  "/reference": [
    { id: "keyboard-shortcuts", title: "Keyboard Shortcuts", level: 2 },
    { id: "quick-prefixes", title: "Quick Prefixes", level: 2 },
    { id: "slash-commands", title: "Slash Commands", level: 2 },
    { id: "github-integration", title: "GitHub Integration", level: 2 },
    { id: "official-documentation", title: "Official Documentation", level: 2 },
    { id: "academy-courses", title: "Academy Courses", level: 2 },
    { id: "skills-marketplace", title: "Skills & Marketplace", level: 2 },
    { id: "community-resources", title: "Community Resources", level: 2 },
    { id: "blog-posts", title: "Key Blog Posts", level: 2 },
  ],
};
