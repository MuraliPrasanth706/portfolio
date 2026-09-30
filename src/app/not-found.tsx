import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RuleGrid } from "@/components/ui/animated-background";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <RuleGrid />
      <div className="relative z-10 flex max-w-md flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-primary uppercase">
            404
          </span>
          <span className="h-px w-7 bg-border-strong" aria-hidden />
          <span className="label">Not found</span>
        </div>

        <h1 className="font-display text-[2.5rem] leading-[1.05] tracking-[-0.015em] sm:text-5xl">
          This route wandered off the{" "}
          <em className="italic text-primary">request path.</em>
        </h1>

        <p className="text-pretty leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist, or it moved somewhere else.
        </p>

        <Button asChild size="lg" className="mt-2">
          <Link href="/">
            <ArrowLeft />
            Back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
