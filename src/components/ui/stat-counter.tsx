"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export function StatCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));

  const numericMatch = value.match(/[0-9]+/);
  const numeric = numericMatch ? parseInt(numericMatch[0], 10) : null;

  useEffect(() => {
    if (!isInView) return;

    if (numeric === null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncs display with a non-numeric value string
      setDisplay(value);
      return;
    }

    const prefix = value.slice(0, numericMatch!.index);
    const suffix = value.slice((numericMatch!.index ?? 0) + numericMatch![0].length);

    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => setDisplay(`${prefix}${Math.round(v)}${suffix}`),
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
