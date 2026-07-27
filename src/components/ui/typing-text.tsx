"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TypingText({
  words,
  className,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1800,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseTime);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
      } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- advances the typing-loop state machine on a timer
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-primary" aria-hidden />
    </span>
  );
}
