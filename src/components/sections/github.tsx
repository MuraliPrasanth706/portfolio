import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/social";
import { profile } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const featuredRepo = {
  name: "hospital-admin",
  url: "https://github.com/MuraliPrasanth706/hospital-admin",
};

export function GithubSection() {
  return (
    <section id="github" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="07"
          eyebrow="Open source"
          title="Contribution"
          accent="activity."
          description="Pulled live from GitHub — commits, and the repository I am actively extending."
          className="mb-16"
        />

        <Reveal className="overflow-hidden rounded-xl border border-border-subtle bg-surface p-6">
          <div className="overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/e2613c/${profile.githubUsername}`}
              alt={`${profile.name}'s GitHub contribution graph over the past year`}
              className="w-full min-w-[600px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-5 grid gap-5 sm:grid-cols-2">
          <a
            href={featuredRepo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group flex items-center justify-between gap-4 rounded-xl border border-border-subtle bg-surface p-6 transition-colors hover:border-border-strong"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-strong text-primary">
                <GithubIcon className="h-4 w-4" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="label text-dim">Featured repository</span>
                <span className="font-mono text-sm">{featuredRepo.name}</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group flex items-center justify-between gap-4 rounded-xl border border-border-subtle p-6 transition-colors hover:border-border-strong"
          >
            <span className="flex flex-col gap-1">
              <span className="label text-dim">Profile</span>
              <span className="font-mono text-sm">@{profile.githubUsername}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
