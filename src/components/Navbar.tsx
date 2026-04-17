"use client";

import { useState } from "react";
import CdLogo from "@/components/CdLogo";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <CdLogo size={36} gradId="cd-nav" />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-white font-mono">Claude</span>
              <span className="font-mono bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent"> Devs</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-cyan-950/30"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-cyan-400 text-sm font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors text-center mt-1"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
