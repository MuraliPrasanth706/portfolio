export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
          <div className="absolute inset-2 rounded-full bg-primary" />
        </div>
        <p className="font-mono text-xs tracking-widest text-muted-foreground">LOADING</p>
      </div>
    </div>
  );
}
