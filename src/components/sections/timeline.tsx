import { careerTimeline } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Timeline() {
  return (
    <section id="timeline" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="09"
          eyebrow="Journey"
          title="How it"
          accent="ran."
          className="mb-16"
        />

        <ol className="grid gap-px overflow-hidden rounded-xl border border-border-subtle bg-border-subtle sm:grid-cols-3">
          {careerTimeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.08} className="bg-background">
              <li className="flex h-full flex-col gap-3 p-8">
                <span className="font-display text-[2.5rem] leading-none text-primary">
                  {item.year}
                </span>
                <span className="text-[0.9375rem] leading-relaxed text-muted">
                  {item.label}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
