"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories: Array<Project["category"] | "All"> = [
  "All",
  "AI",
  "Web",
  "Mobile",
  "Backend",
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Selected work"
          title="Systems that"
          accent="shipped."
          aside={`${filtered.length} of ${projects.length} shown`}
          className="mb-10"
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={cn(
                  "focus-ring h-10 rounded-full border px-4 font-mono text-[0.6875rem] tracking-[0.14em] uppercase transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border-strong text-muted-foreground hover:border-dim hover:text-foreground"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.ul layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.li
                key={project.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, delay: i * 0.04 }}
                className="group flex flex-col gap-4 rounded-xl border border-border-subtle bg-surface p-7 transition-colors hover:border-border-strong"
              >
                <div className="flex items-baseline justify-between font-mono text-[0.625rem] tracking-[0.18em] uppercase">
                  <span className="text-primary">
                    {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                  <span className="text-dim">{project.category}</span>
                </div>

                <h3 className="font-display text-[1.625rem] leading-tight">
                  {project.title}
                </h3>

                <p className="flex-grow text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
