"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { hero, profile, heroSpec, experience } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic-button";
import { TypingText } from "@/components/ui/typing-text";
import { RuleGrid } from "@/components/ui/animated-background";
import { GithubIcon, LeetcodeIcon } from "@/components/icons/social";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-24">
      <RuleGrid />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex max-w-2xl flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-primary uppercase">
              01
            </span>
            <span className="h-px w-7 bg-border-strong" aria-hidden />
            <span className="label">
              {profile.title} · {experience[0].company}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="font-display text-[3rem] leading-[0.98] tracking-[-0.015em] sm:text-[4rem] lg:text-[5rem]"
          >
            {hero.headlineLead}
            <br />
            <em className="italic text-primary">{hero.headlineAccent}</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-muted"
          >
            {hero.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="h-6 font-mono text-sm text-primary"
          >
            <TypingText words={hero.roles} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Magnetic>
              <Button size="lg" asChild>
                <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer">
                  <Download />
                  Résumé
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" asChild>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                  GitHub
                  <ArrowUpRight />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" asChild>
                <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
                  <LeetcodeIcon />
                  LeetCode
                  <ArrowUpRight />
                </a>
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Spec table — the profile as a typeset data sheet. */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease }}
          className="w-full shrink-0 lg:w-[22rem]"
        >
          <div className="flex items-baseline justify-between pb-3.5">
            <span className="label text-dim">Profile</span>
            <span className="label text-dim">2026</span>
          </div>
          {heroSpec.map((row) => (
            <div
              key={row.label}
              className="flex gap-5 border-t border-border-subtle py-3.5 last:border-b"
            >
              <dt className="w-[4.25rem] shrink-0 pt-[3px] font-mono text-[0.625rem] tracking-[0.16em] text-muted-foreground uppercase">
                {row.label}
              </dt>
              <dd className="text-sm text-foreground">
                {row.status ? (
                  <span className="flex items-center gap-2.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    {row.value}
                  </span>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-float rounded-full p-2 text-dim transition-colors hover:text-foreground sm:block"
        aria-label="Scroll to the About section"
      >
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
