import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RuleGrid } from "@/components/ui/animated-background";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on backend architecture, multi-tenant systems and scalable API design — coming soon.",
};

export default function BlogPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <RuleGrid />
      <div className="relative z-10 flex max-w-md flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-primary uppercase">
            Soon
          </span>
          <span className="h-px w-7 bg-border-strong" aria-hidden />
          <span className="label">Writing</span>
        </div>

        <h1 className="font-display text-[2.5rem] leading-[1.05] tracking-[-0.015em] sm:text-5xl">
          Notes on the systems,{" "}
          <em className="italic text-primary">in progress.</em>
        </h1>

        <p className="text-pretty leading-relaxed text-muted">
          Backend architecture, multi-tenant boundaries, caching strategy, and what
          actually broke on the way to production.
        </p>

        <Button asChild variant="outline" className="mt-2">
          <Link href="/">
            <ArrowLeft />
            Back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
