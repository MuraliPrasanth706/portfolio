import { Mail } from "lucide-react";
import { profile } from "@/data/resume";
import { VisitorCounter } from "@/components/ui/visitor-counter";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/icons/social";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-dim">
          © {new Date().getFullYear()} {profile.name} — Next.js, deployed on Vercel
        </p>

        <div className="flex items-center gap-6">
          <VisitorCounter />
          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="focus-ring transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-ring transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="focus-ring transition-colors hover:text-foreground"
            >
              <LeetcodeIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="focus-ring transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
