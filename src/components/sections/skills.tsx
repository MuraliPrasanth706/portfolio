"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";

/** Ranked highest first — the list reads as an ordered assessment, not a chart. */
const ranked = [...skills].sort((a, b) => b.value - a.value);

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="06"
          eyebrow="Depth"
          title="Where the depth"
          accent="actually is."
          description="Ranked by how much production time sits behind each one."
          className="mb-16"
        />

        <div ref={ref} className="max-w-3xl">
          {ranked.map((skill, i) => (
            <div
              key={skill.name}
              className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2.5 border-t border-border-subtle py-4 last:border-b sm:grid-cols-[11rem_1fr_3rem]"
            >
              <span className="text-[0.9375rem]">{skill.name}</span>

              <div
                className="col-span-2 h-px w-full bg-border-strong sm:col-span-1"
                role="presentation"
              >
                <motion.div
                  className="h-px bg-primary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.value}%` } : { width: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.06,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                />
              </div>

              <span className="justify-self-end font-mono text-xs tabular-nums text-muted-foreground">
                {skill.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
