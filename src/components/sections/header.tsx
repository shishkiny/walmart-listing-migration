"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-wm-blue to-wm-blue-light flex items-center justify-center">
            <span className="text-white font-bold text-sm font-grotesk">24</span>
          </div>
          <span className="font-grotesk font-bold text-lg text-text">
            24.online
          </span>
          <span className="hidden sm:inline-flex pill-spark text-[10px] py-1 px-2.5">
            Walmart
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm text-muted2 hover:text-text transition-colors no-underline"
          >
            How It Works
          </a>
          <a
            href="#item-spec"
            className="text-sm text-muted2 hover:text-text transition-colors no-underline"
          >
            Item Spec 5.0
          </a>
          <a
            href="#try-it"
            className="text-sm text-muted2 hover:text-text transition-colors no-underline"
          >
            Try It
          </a>
          <a
            href="#benefits"
            className="text-sm text-muted2 hover:text-text transition-colors no-underline"
          >
            Benefits
          </a>
        </nav>

        {/* CTA */}
        <a href="#try-it" className="btn btn-primary text-sm py-2.5 px-5">
          Create My Listing
        </a>
      </div>
    </header>
  );
}
