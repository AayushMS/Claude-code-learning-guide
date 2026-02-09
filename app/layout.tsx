import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Claude Code Learning Guide",
    template: "%s | Claude Code Learning Guide",
  },
  description:
    "A comprehensive, example-driven resource for learning Claude Code — from zero to advanced multi-agent workflows. Master context engineering, skills, hooks, MCP servers, and more.",
  keywords: [
    "Claude Code",
    "Context Engineering",
    "AI Development",
    "Anthropic",
    "MCP",
    "Skills",
    "Hooks",
  ],
  authors: [{ name: "aayushms" }],
  openGraph: {
    title: "Claude Code Learning Guide",
    description:
      "Master Claude Code from zero to advanced multi-agent workflows",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
