import { about, education, experience, profile } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  const [current, previous] = experience;

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          eyebrow="About"
          title="I work where the app stops"
          accent="and the services begin."
          className="mb-16"
        />

        <div className="grid gap-16 lg:grid-cols-[1fr_21rem]">
          <div className="flex max-w-2xl flex-col gap-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p
                  className={
                    i === 0
                      ? "text-pretty text-[1.0625rem] leading-[1.75] text-foreground/90"
                      : "text-pretty text-[1.0625rem] leading-[1.75] text-muted"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <dl className="lg:sticky lg:top-28">
              <div className="label pb-3.5 text-dim">Position</div>

              <div className="flex flex-col gap-1.5 border-t border-border-subtle py-4">
                <dt className="font-mono text-[0.625rem] tracking-[0.16em] text-primary uppercase">
                  Now
                </dt>
                <dd className="text-[0.9375rem] font-semibold">
                  {current.role}, {current.company}
                </dd>
                <dd className="text-[0.8125rem] leading-relaxed text-muted-foreground">
                  {current.duration} · {current.location}
                </dd>
              </div>

              <div className="flex flex-col gap-1.5 border-t border-border-subtle py-4">
                <dt className="font-mono text-[0.625rem] tracking-[0.16em] text-muted-foreground uppercase">
                  Before
                </dt>
                <dd className="text-[0.9375rem] font-semibold">
                  {previous.role}, {previous.company}
                </dd>
                <dd className="text-[0.8125rem] leading-relaxed text-muted-foreground">
                  {previous.duration} · {previous.location}
                </dd>
              </div>

              <div className="flex flex-col gap-1.5 border-t border-border-subtle py-4">
                <dt className="font-mono text-[0.625rem] tracking-[0.16em] text-muted-foreground uppercase">
                  Education
                </dt>
                <dd className="text-[0.9375rem] font-semibold">
                  {education.degree}, {education.field}
                </dd>
                <dd className="text-[0.8125rem] leading-relaxed text-muted-foreground">
                  {education.school}
                  <br />
                  {education.duration} · {education.detail}
                </dd>
              </div>

              <div className="flex flex-col gap-1.5 border-y border-border-subtle py-4">
                <dt className="font-mono text-[0.625rem] tracking-[0.16em] text-muted-foreground uppercase">
                  Practice
                </dt>
                <dd className="text-[0.9375rem] font-semibold">
                  <a
                    href={profile.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring transition-colors hover:text-primary"
                  >
                    Problem solving on LeetCode
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
