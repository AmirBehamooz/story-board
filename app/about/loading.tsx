export default function Loading() {
  return (
    <div className="flex flex-col">
      <section className="px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-secondary animate-pulse" />
        <div className="flex flex-col items-center md:items-start gap-4 animate-pulse">
          <div className="h-6 w-40 bg-secondary rounded-full" />
          <div className="h-12 w-72 bg-secondary rounded-sm" />
          <div className="h-5 w-96 bg-secondary rounded-sm" />
          <div className="h-5 w-64 bg-secondary rounded-sm" />
        </div>
      </section>
    </div>
  );
}
