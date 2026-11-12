"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

/**
 * Counts the first number in a string up from zero when it scrolls into view,
 * keeping whatever sits around it ("1,000+", "10–15%", "98%") intact. Grouping
 * commas are parsed out and re-applied so the count never reads "0,000+".
 */
export function StatCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/\d[\d,]*/);
  const target = match ? Number(match[0].replace(/,/g, "")) : null;
  const grouped = match ? match[0].includes(",") : false;

  const [display, setDisplay] = useState(() =>
    match ? value.replace(match[0], format(0, grouped)) : value
  );

  useEffect(() => {
    if (!isInView || target === null || !match) return;

    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => setDisplay(`${prefix}${format(Math.round(v), grouped)}${suffix}`),
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

function format(n: number, grouped: boolean) {
  return grouped ? n.toLocaleString("en-US") : String(n);
}
