"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  User,
  Layers,
  Briefcase,
  FolderGit2,
  Mail,
  Download,
  Home,
  Newspaper,
} from "lucide-react";
import { profile } from "@/data/resume";
import { GithubIcon, LeetcodeIcon } from "@/components/icons/social";

type Action = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  perform: () => void;
  group: string;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const goTo = useCallback(
    (hash: string) => {
      setOpen(false);
      if (window.location.pathname !== "/") {
        router.push(`/${hash}`);
        return;
      }
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    },
    [router]
  );

  const actions: Action[] = [
    { label: "Go to Home", icon: Home, group: "Navigate", perform: () => goTo("#top") },
    { label: "About", icon: User, group: "Navigate", perform: () => goTo("#about") },
    { label: "Tech Stack", icon: Layers, group: "Navigate", perform: () => goTo("#stack") },
    { label: "Experience", icon: Briefcase, group: "Navigate", perform: () => goTo("#experience") },
    { label: "Projects", icon: FolderGit2, group: "Navigate", perform: () => goTo("#projects") },
    { label: "GitHub Activity", icon: GithubIcon, group: "Navigate", perform: () => goTo("#github") },
    { label: "LeetCode Profile", icon: LeetcodeIcon, group: "Navigate", perform: () => goTo("#leetcode") },
    { label: "Contact", icon: Mail, group: "Navigate", perform: () => goTo("#contact") },
    { label: "Blog", icon: Newspaper, group: "Navigate", perform: () => router.push("/blog") },
    {
      label: "Download Resume",
      icon: Download,
      group: "Actions",
      perform: () => {
        setOpen(false);
        window.open(profile.resumeFile, "_blank");
      },
    },
    {
      label: "Open GitHub Profile",
      icon: GithubIcon,
      group: "Actions",
      perform: () => {
        setOpen(false);
        window.open(profile.github, "_blank");
      },
    },
    {
      label: "Open LeetCode Profile",
      icon: LeetcodeIcon,
      group: "Actions",
      perform: () => {
        setOpen(false);
        window.open(profile.leetcode, "_blank");
      },
    },
    {
      label: "Copy Email Address",
      icon: Mail,
      group: "Actions",
      perform: () => {
        navigator.clipboard.writeText(profile.email);
        setOpen(false);
      },
    },
  ];

  const groups = Array.from(new Set(actions.map((a) => a.group)));

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="focus-ring hidden items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-muted-foreground/40 sm:flex"
        aria-label="Open command palette"
      >
        Search
        <kbd className="rounded border border-border-subtle bg-background px-1.5 py-0.5 font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-background/70 p-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg">
            <Command
              className="glass overflow-hidden rounded-2xl shadow-2xl"
              label="Command Palette"
            >
              <Command.Input
                autoFocus
                placeholder="Type a command or search..."
                className="focus-ring w-full border-b border-border-subtle bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-4 py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>
                {groups.map((group) => (
                  <Command.Group
                    key={group}
                    heading={group}
                    className="px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5"
                  >
                    {actions
                      .filter((a) => a.group === group)
                      .map((action) => (
                        <Command.Item
                          key={action.label}
                          onSelect={action.perform}
                          className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground aria-selected:bg-primary/15 aria-selected:text-primary"
                        >
                          <action.icon className="h-4 w-4" />
                          {action.label}
                        </Command.Item>
                      ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
