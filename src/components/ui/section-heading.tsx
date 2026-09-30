import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

/**
 * Every section opens the same way: a numbered mono eyebrow, a short rule,
 * then a serif statement. The number is what gives the page its spec-sheet feel.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
  aside,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  /** Trailing words set in italic ember — the one emphasis per heading. */
  accent?: string;
  description?: string;
  aside?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("flex flex-col gap-5", className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-primary uppercase">
          {index}
        </span>
        <span className="h-px w-7 bg-border-strong" aria-hidden />
        <span className="label">{eyebrow}</span>
        {aside && (
          <span className="label ml-auto hidden text-dim sm:block">{aside}</span>
        )}
      </div>

      <h2 className="font-display max-w-3xl text-[2.25rem] leading-[1.05] tracking-[-0.015em] sm:text-5xl">
        {title}
        {accent && (
          <>
            {" "}
            <em className="italic text-primary">{accent}</em>
          </>
        )}
      </h2>

      {description && (
        <p className="max-w-xl text-pretty leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}
