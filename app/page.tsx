import Image from "next/image";

export default function Home() {
  return (
    <section className="px-8 py-6 flex flex-col gap-12">
      <h1 className="font-bold text-6xl">Full-Stack Story Voter App</h1>
      <div className="mt-8 grid 400:grid-cols-2 gap-4 items-center lg:gap-0">
        <figure className="lg:max-w-64 relative w-full aspect-[16/9]">
          <Image
            src="/Next-Logo.png"
            alt="Next.js Logo"
            fill
            className="object-contain shadow-none"
          />
        </figure>
        <figure className="lg:max-w-64 relative w-full aspect-[16/9]">
          <Image
            src="/mongoDB.png"
            alt="MongoDB Logo"
            fill
            className="object-contain shadow-none"
          />
        </figure>
      </div>
    </section>
  );
}
