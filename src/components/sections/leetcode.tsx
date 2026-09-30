"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/resume";
import { fetchLeetcodeStats, type LeetcodeStats } from "@/lib/leetcode";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LeetcodeIcon } from "@/components/icons/social";

export function LeetcodeSection() {
  const [stats, setStats] = useState<LeetcodeStats | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchLeetcodeStats(profile.leetcodeUsername).then((data) => {
      if (cancelled) return;
      setStats(data);
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const breakdown = stats
    ? [
        { label: "Easy", solved: stats.easySolved, total: stats.totalEasy },
        { label: "Medium", solved: stats.mediumSolved, total: stats.totalMedium },
        { label: "Hard", solved: stats.hardSolved, total: stats.totalHard },
      ]
    : [];

  return (
    <section id="leetcode" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="09"
          eyebrow="Problem solving"
          title="Kept sharp,"
          accent="deliberately."
          className="mb-16"
        />

        <Reveal className="rounded-xl border border-border-subtle bg-surface p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border-subtle pb-8">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border-strong text-primary">
                <LeetcodeIcon className="h-4 w-4" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[0.9375rem] font-semibold">{profile.name}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  @{profile.leetcodeUsername}
                </span>
              </div>
            </div>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.12em] uppercase transition-colors hover:text-primary"
            >
              View profile
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {loaded && stats ? (
            <div className="grid gap-10 pt-8 sm:grid-cols-[12rem_1fr] sm:gap-14">
              <div className="flex flex-col gap-2">
                <span className="font-display text-[3.5rem] leading-none">
                  {stats.totalSolved}
                </span>
                <span className="text-[0.8125rem] text-muted-foreground">
                  of {stats.totalQuestions.toLocaleString()} problems solved
                </span>
                {stats.ranking > 0 && (
                  <span className="mt-2 font-mono text-[0.6875rem] tracking-[0.1em] text-dim uppercase">
                    Global rank #{stats.ranking.toLocaleString()}
                  </span>
                )}
              </div>

              <dl className="flex flex-col justify-center gap-5">
                {breakdown.map((row) => (
                  <div key={row.label} className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                      <dt className="text-sm">{row.label}</dt>
                      <dd className="font-mono text-xs tabular-nums text-muted-foreground">
                        {row.solved} / {row.total}
                      </dd>
                    </div>
                    <div className="h-px w-full bg-border-strong">
                      <div
                        className="h-px bg-primary"
                        style={{
                          width: `${row.total > 0 ? (row.solved / row.total) * 100 : 0}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          ) : loaded ? (
            <p className="pt-8 text-sm text-muted-foreground">
              Live stats are unavailable right now — the{" "}
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                profile
              </a>{" "}
              has the current numbers.
            </p>
          ) : (
            <div className="grid gap-10 pt-8 sm:grid-cols-[12rem_1fr] sm:gap-14">
              <div className="h-20 w-32 animate-pulse rounded bg-surface-hover" />
              <div className="flex flex-col gap-5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-6 animate-pulse rounded bg-surface-hover" />
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
