import { techStack } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import {
  Cpu,
  Server,
  Database,
  Boxes,
  Terminal,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Frontend: Cpu,
  Backend: Server,
  Databases: Database,
  Architecture: Boxes,
  DevOps: Terminal,
};

export function TechStack() {
  return (
    <section id="stack" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="Tech Stack"
          description="The languages, frameworks, and tools I reach for to ship reliable systems."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, i) => {
            const Icon = icons[category.title] ?? Boxes;
            return (
              <Reveal key={category.title} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.35)]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mb-4 text-lg font-semibold">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border-subtle bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
