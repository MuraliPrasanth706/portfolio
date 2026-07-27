import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/social";
import { profile } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const featuredRepo = {
  name: "hospital-admin",
  url: "https://github.com/MuraliPrasanth706/hospital-admin",
};

export function GithubSection() {
  return (
    <section id="github" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub Activity"
          description="Live from the GitHub API — contribution activity and featured work."
        />

        <Reveal className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-2xl border border-border-subtle bg-surface/50 p-4">
          <div className="overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/3b82f6/${profile.githubUsername}`}
              alt={`${profile.name}'s GitHub contribution graph`}
              className="w-full min-w-[600px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal className="mx-auto max-w-md">
          <a
            href={featuredRepo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-surface/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GithubIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Featured Repository</p>
                <h3 className="font-display text-base font-semibold group-hover:text-primary">
                  {featuredRepo.name}
                </h3>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4" />
              View Full Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
