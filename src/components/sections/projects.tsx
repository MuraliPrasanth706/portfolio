"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects, type Project } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories: Array<Project["category"] | "All"> = ["All", "AI", "Web", "Mobile", "Backend"];

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
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A sample of platforms and products I've designed and shipped end to end."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === c
                  ? "border-primary/50 bg-primary/15 text-primary"
                  : "border-border-subtle bg-surface/60 text-muted-foreground hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-80" />

              <div className="relative flex items-start justify-between">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </span>
                {project.featured && (
                  <Badge variant="primary" className="translate-y-0">
                    Featured
                  </Badge>
                )}
              </div>

              <h3 className="font-display relative mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                {project.title}
                <ArrowUpRight className="ml-1 inline h-4 w-4 -translate-y-0.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="relative mb-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="relative flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border-subtle bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
