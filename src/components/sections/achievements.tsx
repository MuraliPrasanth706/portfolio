import { achievements } from "@/data/resume";
import { Reveal } from "@/components/ui/reveal";
import { StatCounter } from "@/components/ui/stat-counter";

export function Achievements() {
  return (
    <section className="relative border-y border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="label mb-10 text-dim">
          The record — numbers that came off real work
        </Reveal>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.07} className="flex flex-col gap-2.5">
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-display text-[2.75rem] leading-none tracking-[-0.01em]">
                <StatCounter value={item.value} />
              </dd>
              <p aria-hidden className="text-[0.8125rem] leading-snug text-muted-foreground">
                {item.label}
              </p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
