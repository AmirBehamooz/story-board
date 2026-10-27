export default function Loading() {
  return (
    <section className="px-8 py-6 flex flex-col gap-12">
      <div className="h-14 w-96 bg-secondary rounded-sm animate-pulse" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="w-full aspect-[16/9] bg-secondary rounded-sm animate-pulse" />
        <div className="flex flex-col gap-3 md:self-center animate-pulse">
          <div className="h-5 w-full bg-secondary rounded-sm" />
          <div className="h-5 w-full bg-secondary rounded-sm" />
          <div className="h-5 w-3/4 bg-secondary rounded-sm" />
          <div className="h-5 w-5/6 bg-secondary rounded-sm" />
        </div>
      </div>
    </section>
  );
}
