export default function Loading() {
  return (
    <main className="px-8 py-6 flex flex-col gap-12">
      <div className="h-14 w-80 bg-secondary rounded-sm animate-pulse" />
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-4 flex-col animate-pulse">
            <div className="w-full aspect-[16/9] bg-secondary rounded-sm" />
            <div className="h-6 w-3/4 bg-secondary rounded-sm" />
            <div className="h-10 w-full bg-secondary rounded-sm" />
          </div>
        ))}
      </section>
    </main>
  );
}
