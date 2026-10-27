import Image from "next/image";
import Link from "next/link";

const techStack = [
  {
    name: "Next.js 16",
    description: "App Router with Server & Client Components",
    icon: "/Next-Logo.png",
  },
  {
    name: "MongoDB",
    description: "NoSQL database with Atlas cloud hosting",
    icon: "/mongoDB.png",
  },
  {
    name: "React 19",
    description: "Interactive UI with hooks and Suspense",
    icon: null,
    emoji: "⚛️",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling with custom theme",
    icon: null,
    emoji: "🎨",
  },
  {
    name: "Vercel",
    description: "Instant deploys with edge network",
    icon: null,
    emoji: "▲",
  },
  {
    name: "TypeScript",
    description: "Type-safe code across the full stack",
    icon: null,
    emoji: "📘",
  },
];

const features = [
  {
    title: "Browse Stories",
    description: "Explore a collection of creative stories with vivid artwork",
    icon: "📖",
  },
  {
    title: "Vote & Curate",
    description: "Vote for your favorites and build a personal collection",
    icon: "⭐",
  },
  {
    title: "Real-time Data",
    description: "Server-rendered pages with live MongoDB data",
    icon: "⚡",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-primary to-primary" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-tertiary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-quaternary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-quaternary/30 bg-quaternary/10 text-quaternary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-quaternary animate-pulse" />
            Full-Stack Next.js App
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Story
            <span className="text-quaternary">Board</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-xl">
            A full-stack story voting application built with modern web
            technologies. Browse, vote, and curate your favorite stories.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="/stories"
              className="px-8 py-3 bg-quaternary text-primary font-bold rounded-full hover:bg-quaternary/90 transition-all duration-300 hover:shadow-lg hover:shadow-quaternary/30 hover:scale-105"
            >
              Explore Stories
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What You Can Do
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-tertiary/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-quaternary transition-colors">
                {f.title}
              </h3>
              <p className="text-white/50">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="px-6 py-20 bg-gradient-to-b from-primary via-secondary/20 to-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Built With
          </h2>
          <p className="text-center text-white/50 mb-16 max-w-lg mx-auto">
            Modern technologies powering a fast, type-safe, and beautiful experience
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-quaternary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 group-hover:bg-quaternary/20 transition-colors shrink-0">
                  {tech.icon ? (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="object-contain !shadow-none !rounded-none"
                    />
                  ) : (
                    <span className="text-2xl">{tech.emoji}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-quaternary transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-white/40">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Explore?
          </h2>
          <p className="text-white/50 text-lg">
            Dive into the stories and cast your votes
          </p>
          <Link
            href="/stories"
            className="px-10 py-4 bg-gradient-to-r from-tertiary to-quaternary text-primary font-bold rounded-full hover:shadow-lg hover:shadow-tertiary/30 transition-all duration-300 hover:scale-105 text-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
