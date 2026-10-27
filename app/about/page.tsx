import Link from "next/link";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "MongoDB",
  "Tailwind CSS",
  "Node.js",
  "Vercel",
  "Git",
];

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/AmirBehamooz",
    icon: "🔗",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero banner */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-primary to-primary" />
        <div className="absolute top-10 right-1/3 w-64 h-64 bg-tertiary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-quaternary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-tertiary to-quaternary p-1">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center text-6xl md:text-7xl">
                👨‍💻
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-quaternary/30 bg-quaternary/10 text-quaternary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-quaternary animate-pulse" />
              Full-Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl font-black">
              Amir Behamooz
            </h1>
            <p className="text-lg text-white/60 max-w-md">
              Passionate developer who loves building beautiful, performant web
              applications with modern technologies.
            </p>

            <div className="flex gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  {s.icon} {s.name}
                </a>
              ))}
              <Link
                href="/stories"
                className="px-5 py-2.5 rounded-full bg-quaternary text-primary text-sm font-bold hover:bg-quaternary/90 transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-16 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold hover:bg-tertiary/20 hover:border-tertiary/30 hover:text-tertiary transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* About the project */}
      <section className="px-6 py-16 bg-gradient-to-b from-primary via-secondary/15 to-primary">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">About This Project</h2>
          <p className="text-white/50 text-lg leading-relaxed">
            StoryBoard is a full-stack web application built to showcase modern
            web development practices. It features server-side rendering with
            Next.js App Router, real-time data from MongoDB Atlas, responsive
            design with Tailwind CSS, and seamless deployment on Vercel.
          </p>
          <p className="text-white/50 text-lg leading-relaxed">
            Users can browse a collection of creative stories, vote for their
            favorites, and manage their voted stories — all with beautiful
            loading states and smooth transitions.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="text-white/50 text-lg">
            Interested in working together or want to learn more?
          </p>
          <a
            href="https://github.com/AmirBehamooz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gradient-to-r from-tertiary to-quaternary text-primary font-bold rounded-full hover:shadow-lg hover:shadow-tertiary/30 transition-all duration-300 hover:scale-105 text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
