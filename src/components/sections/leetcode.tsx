"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Flame, ExternalLink } from "lucide-react";
import { profile } from "@/data/resume";
import { fetchLeetcodeStats, type LeetcodeStats } from "@/lib/leetcode";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { LeetcodeIcon } from "@/components/icons/social";

const badges = [
  { icon: Target, label: "Consistent Problem Solver" },
  { icon: Flame, label: "Algorithmic Proficiency" },
  { icon: Trophy, label: "Coding Consistency" },
];

const difficultyMeta = [
  { key: "easy", label: "Easy", color: "bg-success" },
  { key: "medium", label: "Medium", color: "bg-primary" },
  { key: "hard", label: "Hard", color: "bg-secondary" },
] as const;

export function LeetcodeSection() {
  const [stats, setStats] = useState<LeetcodeStats | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchLeetcodeStats(profile.leetcodeUsername).then((data) => {
      if (!cancelled) {
        setStats(data);
        setLoaded(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const breakdown = stats
    ? [
        { key: "easy", solved: stats.easySolved, total: stats.totalEasy },
        { key: "medium", solved: stats.mediumSolved, total: stats.totalMedium },
        { key: "hard", solved: stats.hardSolved, total: stats.totalHard },
      ]
    : [];

  return (
    <section id="leetcode" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Competitive Programming"
          title="LeetCode Profile"
          description="Sharpening problem-solving and algorithmic thinking, one problem at a time."
        />

        <Reveal className="glass overflow-hidden rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <LeetcodeIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">@{profile.leetcodeUsername}</p>
              </div>
            </div>
            <Button asChild>
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View LeetCode Profile
              </a>
            </Button>
          </div>

          <div className="my-8 h-px w-full bg-border-subtle" />

          {loaded && stats ? (
            <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="flex flex-col items-center justify-center gap-1 sm:pr-8 sm:border-r sm:border-border-subtle">
                <p className="font-display text-gradient text-5xl font-bold">{stats.totalSolved}</p>
                <p className="text-xs text-muted-foreground">of {stats.totalQuestions} solved</p>
                {stats.ranking > 0 && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Global Rank <span className="text-foreground">#{stats.ranking.toLocaleString()}</span>
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {breakdown.map((d, i) => {
                  const meta = difficultyMeta.find((m) => m.key === d.key)!;
                  const pct = d.total > 0 ? (d.solved / d.total) * 100 : 0;
                  return (
                    <div key={d.key}>
                      <div className="mb-1.5 flex items-baseline justify-between text-sm">
                        <span className="font-medium">{meta.label}</span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {d.solved} / {d.total}
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-surface border border-border-subtle">
                        <motion.div
                          className={`h-full rounded-full ${meta.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : loaded && !stats ? (
            <p className="text-center text-sm text-muted-foreground">
              Live stats are unavailable right now — check the{" "}
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                profile directly
              </a>
              .
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="h-24 w-32 animate-pulse rounded-xl bg-surface" />
              <div className="space-y-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-6 w-full animate-pulse rounded bg-surface" />
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-4 py-2 text-xs font-medium text-muted-foreground"
              >
                <badge.icon className="h-3.5 w-3.5 text-primary" />
                {badge.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
