import { experience } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          description="Where I've built, broken, fixed, and shipped."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/60 via-border-subtle to-transparent sm:block" />

          <div className="space-y-14">
            {experience.map((entry, i) => (
              <Reveal key={entry.company} delay={i * 0.1}>
                <div className="relative sm:pl-14">
                  <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-surface text-primary sm:flex">
                    <Briefcase className="h-4 w-4" />
                  </div>

                  <div className="rounded-2xl border border-border-subtle bg-surface/50 p-6 sm:p-8">
                    <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-display text-xl font-semibold">{entry.role}</h3>
                        <p className="text-primary">{entry.company}</p>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:items-end">
                        <span>{entry.duration}</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {entry.location}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {entry.projects.map((project) => (
                        <div key={project.name}>
                          <h4 className="mb-2.5 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                            {project.name}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.highlights.map((h) => (
                              <Badge key={h} variant="default">
                                {h}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
