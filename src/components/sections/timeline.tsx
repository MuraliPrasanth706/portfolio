import { education, careerTimeline } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GraduationCap } from "lucide-react";

export function Timeline() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Journey" title="Education & Timeline" />

        <Reveal className="mb-14 flex items-start gap-4 rounded-2xl border border-border-subtle bg-surface/50 p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display font-semibold">{education.degree}, {education.field}</h3>
            <p className="text-sm text-muted-foreground">{education.school}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {education.duration} · {education.detail}
            </p>
          </div>
        </Reveal>

        <div className="relative flex flex-col items-center gap-10 sm:flex-row sm:justify-between">
          <div className="absolute left-0 right-0 top-4 hidden h-px bg-border-subtle sm:block" />
          {careerTimeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.1} className="relative z-10 flex flex-col items-center text-center sm:w-1/3">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-xs font-semibold text-primary">
                {item.year}
              </span>
              <p className="max-w-[180px] text-sm text-muted-foreground">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
