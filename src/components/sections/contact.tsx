"use client";

import { useState } from "react";
import { Mail, MapPin, Download, Check, Copy } from "lucide-react";
import { profile } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BlobField } from "@/components/ui/animated-background";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/icons/social";

const links = [
  { label: "GitHub", value: `@${profile.githubUsername}`, href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", value: profile.name, href: profile.linkedin, icon: LinkedinIcon },
  { label: "LeetCode", value: `@${profile.leetcodeUsername}`, href: profile.leetcode, icon: LeetcodeIcon },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <BlobField className="opacity-60" />
      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Open to backend-heavy, full-stack, or AI platform roles — and always happy to talk shop."
        />

        <Reveal className="glass rounded-3xl p-8 sm:p-10">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </span>
            <p className="font-display text-xl font-semibold">{profile.email}</p>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <Button onClick={copyEmail} variant="secondary">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Email"}
            </Button>
            <Button asChild>
              <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-3 rounded-xl border border-border-subtle bg-surface/60 p-4 transition-colors hover:border-primary/40 hover:bg-surface-hover"
              >
                <link.icon className="h-4 w-4 text-primary" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="truncate text-sm font-medium">{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
