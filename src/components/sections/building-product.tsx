import { ExternalLink, Lock, Rocket } from "lucide-react";
import { buildingSection, buildingProducts } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { BlobField } from "@/components/ui/animated-background";
import { GithubIcon } from "@/components/icons/social";

export function BuildingProduct() {
  return (
    <section id="building" className="relative overflow-hidden py-28 sm:py-36">
      <BlobField className="opacity-50" />
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Upcoming Product"
          title={buildingSection.title}
          description={buildingSection.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {buildingProducts.map((item, i) => (
            <Reveal
              key={item.name ?? item.tagline}
              delay={i * 0.08}
              className="glass relative flex h-full flex-col items-center overflow-hidden rounded-3xl p-8 text-center sm:p-10"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

              <span className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {item.link ? <Rocket className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
              </span>

              <span className="relative text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {item.name ?? "Stealth Product"}
              </span>

              <p className="text-gradient relative mt-2 text-lg font-medium">{item.tagline}</p>

              {item.description && (
                <p className="relative mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              )}

              <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
                <Badge variant="primary" className="px-3 py-1.5 text-sm">
                  {item.status}
                </Badge>
              </div>

              <div className="relative mt-6">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <GithubIcon className="h-3.5 w-3.5 text-primary" />
                    {item.cta}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-4 py-1.5 text-sm font-medium text-muted-foreground">
                    {item.cta}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
