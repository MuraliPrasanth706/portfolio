import { ArrowUpRight, Lock, Rocket } from "lucide-react";
import { buildingSection, buildingProducts } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GithubIcon } from "@/components/icons/social";

export function BuildingProduct() {
  return (
    <section id="building" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="06"
          eyebrow="Upcoming"
          title="Building"
          accent="in public."
          description={buildingSection.subtitle}
          className="mb-16"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {buildingProducts.map((item, i) => (
            <Reveal key={item.name ?? item.tagline} delay={i * 0.08}>
              <article className="flex h-full flex-col gap-5 rounded-xl border border-border-subtle bg-surface p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong text-primary">
                    {item.link ? (
                      <Rocket className="h-4 w-4" />
                    ) : (
                      <Lock className="h-4 w-4" />
                    )}
                  </span>
                  <span className="label text-dim">{item.name ?? "Stealth product"}</span>
                </div>

                <p className="font-display text-[1.625rem] leading-snug">{item.tagline}</p>

                {item.description && (
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                )}

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-5">
                  <span className="font-mono text-[0.6875rem] tracking-[0.1em] text-muted-foreground">
                    {item.status}
                  </span>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.12em] uppercase transition-colors hover:text-primary"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      {item.cta}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="font-mono text-[0.6875rem] tracking-[0.12em] text-dim uppercase">
                      {item.cta}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
