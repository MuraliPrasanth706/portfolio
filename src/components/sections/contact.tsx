"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, MapPin } from "lucide-react";
import { profile } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/icons/social";

const links = [
  {
    label: "GitHub",
    value: `@${profile.githubUsername}`,
    href: profile.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: profile.name,
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "LeetCode",
    value: `@${profile.leetcodeUsername}`,
    href: profile.leetcode,
    icon: LeetcodeIcon,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="10"
          eyebrow="Contact"
          title="Let's talk about the layer"
          accent="in the middle."
          description="Open to full-stack and backend-leaning roles — and always happy to talk shop."
          className="mb-16"
        />

        <Reveal className="flex flex-col gap-10 border-t border-border-strong pt-12">
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring font-display text-[2rem] leading-tight tracking-[-0.01em] transition-colors hover:text-primary sm:text-[3rem]"
          >
            {profile.email}
          </a>

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={copyEmail} variant="outline">
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied" : "Copy email"}
            </Button>
            <Button asChild>
              <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer">
                <Download />
                Download résumé
              </a>
            </Button>
            <span className="ml-1 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-xl border border-border-subtle bg-border-subtle sm:grid-cols-3">
            {links.map((link) => (
              <li key={link.label} className="bg-background">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group flex h-full items-center justify-between gap-4 p-6 transition-colors hover:bg-surface"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <link.icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="label text-dim">{link.label}</span>
                      <span className="truncate text-sm">{link.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
