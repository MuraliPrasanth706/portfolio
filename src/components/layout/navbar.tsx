"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/resume";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CommandPalette } from "@/components/layout/command-palette";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      id="top"
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border-subtle bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-8 px-6">
        <a href="#top" className="focus-ring flex items-center gap-3.5">
          <span className="h-[7px] w-[7px] rounded-full bg-primary" aria-hidden />
          <span className="font-mono text-[0.6875rem] tracking-[0.2em] whitespace-nowrap uppercase">
            {profile.shortName}
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring font-mono text-[0.6875rem] tracking-[0.14em] whitespace-nowrap text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <CommandPalette />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-border-subtle bg-background md:hidden"
          >
            <nav className="flex flex-col px-6 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="focus-ring border-b border-border-subtle py-4 font-mono text-[0.75rem] tracking-[0.14em] uppercase last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-between px-6 pb-5 pt-2">
              <span className="label text-dim">{profile.location}</span>
              <Button size="sm" asChild>
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Let&apos;s connect
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
