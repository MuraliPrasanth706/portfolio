import { cn } from "@/lib/utils";

/**
 * The only ambient graphic in the system: a faint 56px rule grid that fades
 * out as it falls away from the top edge. No gradient washes, no blobs.
 */
export function RuleGrid({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("rule-grid pointer-events-none absolute inset-0", className)} />
  );
}
