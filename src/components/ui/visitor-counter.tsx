"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const STORAGE_KEY = "portfolio_visit_count";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const sessionKey = "portfolio_session_counted";
    const stored = Number(localStorage.getItem(STORAGE_KEY) ?? "0");
    const alreadyCounted = sessionStorage.getItem(sessionKey);

    const next = alreadyCounted ? stored : stored + 1;
    if (!alreadyCounted) {
      localStorage.setItem(STORAGE_KEY, String(next));
      sessionStorage.setItem(sessionKey, "1");
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads localStorage (external system) once on mount
    setCount(next);
  }, []);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <Eye className="h-3.5 w-3.5" />
      {count.toLocaleString()} visits on this device
    </span>
  );
}
