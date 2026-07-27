import { Mail } from "lucide-react";
import { profile } from "@/data/resume";
import { VisitorCounter } from "@/components/ui/visitor-counter";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/icons/social";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <VisitorCounter />
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="focus-ring hover:text-foreground">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="focus-ring hover:text-foreground">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="focus-ring hover:text-foreground">
            <LeetcodeIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="focus-ring hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
