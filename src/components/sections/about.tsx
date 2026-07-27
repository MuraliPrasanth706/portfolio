"use client";

import { about } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineer first, title second."
          description="A closer look at how I think about building software that lasts."
        />

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-pretty leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>

          <StaggerContainer className="flex flex-col gap-3">
            {about.highlights.map((h) => (
              <motion.div
                key={h}
                variants={staggerItem}
                className="group flex items-center gap-3 rounded-2xl border border-border-subtle bg-surface/60 p-4 transition-colors hover:border-primary/40 hover:bg-surface-hover"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{h}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
