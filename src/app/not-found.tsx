import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlobField, GridBackground } from "@/components/ui/animated-background";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <GridBackground />
      <BlobField />
      <div className="relative z-10">
        <p className="font-display text-gradient text-8xl font-bold sm:text-9xl">404</p>
        <h1 className="font-display mt-4 text-2xl font-semibold sm:text-3xl">
          This page wandered off the request path.
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The route you&apos;re looking for doesn&apos;t exist, or it moved. Let&apos;s get you back on track.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
