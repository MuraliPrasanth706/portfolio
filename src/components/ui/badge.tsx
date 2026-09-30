import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Tags read as mono metadata, not as coloured pills — the accent is reserved
 * for a handful of deliberate moments per page.
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-mono text-[0.625rem] tracking-[0.08em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-border-subtle bg-transparent text-muted-foreground",
        primary: "border-primary/40 bg-primary/10 text-primary",
        outline: "border-border-strong bg-transparent text-muted",
      },
      size: {
        default: "px-2.5 py-1",
        lg: "px-3 py-1.5 text-[0.6875rem]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
