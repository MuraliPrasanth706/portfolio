"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Proficiency"
          title="Skills"
          description="A grounded self-assessment across the areas I work in most."
        />

        <div ref={ref} className="space-y-6">
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{skill.value}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface border border-border-subtle">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.value}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
