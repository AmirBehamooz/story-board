"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/stories", label: "Stories" },
    { href: "/votedStories", label: "Voted Stories" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl shadow-lg shadow-tertiary/10 py-3"
          : "bg-quaternary py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className={`text-xl font-black tracking-tight transition-colors duration-500 ${
              scrolled ? "text-quaternary" : "text-primary"
            }`}
          >
            Story
            <span
              className={`transition-colors duration-500 ${
                scrolled ? "text-tertiary" : "text-secondary"
              }`}
            >
              Board
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  pathname === link.href
                    ? scrolled
                      ? "bg-quaternary/20 text-quaternary"
                      : "bg-primary/20 text-primary"
                    : scrolled
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-primary/70 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-[5px] w-7 h-7 justify-center items-center transition-colors ${
            scrolled ? "text-white" : "text-primary"
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-white" : "bg-primary"
            } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-white" : "bg-primary"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-white" : "bg-primary"
            } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-4 pt-2 gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  pathname === link.href
                    ? scrolled
                      ? "bg-quaternary/20 text-quaternary"
                      : "bg-primary/20 text-primary"
                    : scrolled
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-primary/70 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
