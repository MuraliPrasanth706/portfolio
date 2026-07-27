import { achievements } from "@/data/resume";
import { Reveal } from "@/components/ui/reveal";
import { StatCounter } from "@/components/ui/stat-counter";

export function Achievements() {
  return (
    <section className="relative border-y border-border-subtle bg-surface/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                <StatCounter value={item.value} />
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
