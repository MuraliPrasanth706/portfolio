import { techStack } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function TechStack() {
  return (
    <section id="stack" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="Toolbox"
          title="What I reach for,"
          accent="and why."
          description="Grouped the way I actually think about a system, rather than by logo."
          className="mb-16"
        />

        <dl className="flex flex-col">
          {techStack.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.05}>
              <div className="grid gap-4 border-t border-border-subtle py-7 last:border-b sm:grid-cols-[11rem_1fr] sm:gap-10">
                <dt className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase sm:pt-1">
                  {category.title}
                </dt>
                <dd className="flex flex-wrap gap-x-6 gap-y-2.5">
                  {category.items.map((item) => (
                    <span key={item} className="text-[0.9375rem] text-foreground/90">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
