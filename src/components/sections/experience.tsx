import { experience } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Two companies,"
          accent="five systems."
          aside="Feb 2023 — Present"
          className="mb-16"
        />

        <div className="flex flex-col gap-14">
          {experience.map((entry, i) => (
            <Reveal key={entry.company} delay={i * 0.08}>
              <article className="grid gap-6 sm:grid-cols-[10rem_1fr] sm:gap-12">
                <header className="flex flex-col gap-1.5 pt-1">
                  <span
                    className={
                      i === 0
                        ? "font-mono text-[0.6875rem] leading-relaxed tracking-[0.14em] text-primary uppercase"
                        : "font-mono text-[0.6875rem] leading-relaxed tracking-[0.14em] text-muted uppercase"
                    }
                  >
                    {entry.duration}
                  </span>
                  <span className="font-mono text-[0.625rem] tracking-[0.12em] text-dim uppercase">
                    {entry.location}
                  </span>
                </header>

                <div className="flex flex-col gap-7 border-t border-border-strong pt-6">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-[1.75rem] leading-tight">
                      {entry.company}
                    </h3>
                    <span className="text-sm text-muted-foreground">{entry.role}</span>
                  </div>

                  {entry.projects.map((project) => (
                    <div key={project.name} className="flex flex-col gap-3">
                      <h4 className="text-base font-semibold">{project.name}</h4>
                      <ul className="flex flex-wrap gap-1.5">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>
                            <Badge>{highlight}</Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
