"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download, MessageSquare } from "lucide-react";
import { hero, profile } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic-button";
import { TypingText } from "@/components/ui/typing-text";
import { BlobField, GridBackground } from "@/components/ui/animated-background";
import { GithubIcon, LeetcodeIcon } from "@/components/icons/social";

const ParticleField = dynamic(
  () => import("@/components/three/particle-field").then((m) => m.ParticleField),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <GridBackground />
      <BlobField />
      <div className="absolute inset-0 opacity-70">
        <ParticleField />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Open to new opportunities · {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
        >
          {hero.headline.split(" for Millions.")[0]}
          <br />
          <span className="text-gradient">for Millions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          {hero.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-4 h-7 font-mono text-sm text-primary sm:text-base"
        >
          <TypingText words={hero.roles} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <Button size="lg" asChild>
              <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4" />
                View GitHub
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
                <LeetcodeIcon className="h-4 w-4" />
                LeetCode
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">
                <MessageSquare className="h-4 w-4" />
                Let&apos;s Connect
              </a>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="focus-ring absolute -bottom-16 left-1/2 -translate-x-1/2 rounded-full p-2 text-muted-foreground animate-float"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}
