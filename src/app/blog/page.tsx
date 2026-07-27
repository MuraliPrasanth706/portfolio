import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlobField, GridBackground } from "@/components/ui/animated-background";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on backend engineering, AI systems, and scalable architecture — coming soon.",
};

export default function BlogPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <GridBackground />
      <BlobField />
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <PenLine className="h-6 w-6" />
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">Writing, coming soon.</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Notes on backend architecture, AI pipelines, and lessons from shipping production
          systems — in progress.
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
