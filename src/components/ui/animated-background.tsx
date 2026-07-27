export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 grid-fade-mask ${className ?? ""}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, hsl(var(--border-subtle) / 0.4) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border-subtle) / 0.4) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
  );
}

export function BlobField({ className }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div className="absolute -top-40 -left-20 h-[420px] w-[420px] animate-blob rounded-full bg-primary/25 blur-[110px]" />
      <div className="absolute top-1/3 -right-20 h-[380px] w-[380px] animate-blob rounded-full bg-secondary/25 blur-[110px] [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-[340px] w-[340px] animate-blob rounded-full bg-success/15 blur-[110px] [animation-delay:8s]" />
    </div>
  );
}
