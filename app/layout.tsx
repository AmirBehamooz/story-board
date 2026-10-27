import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Story Voter App",
  description: "A full-stack story voting application built with Next.js and MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="pt-[72px] min-h-[calc(100vh-72px)]">{children}</main>
        <footer className="border-t border-white/10 py-6 text-center text-sm text-white/40">
          <p>Designed by Amir Behamooz</p>
        </footer>
      </body>
    </html>
  );
}
