"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "[01] Transport", href: "#transport" },
    { name: "[02] Accommodation", href: "#accommodation" },
    { name: "[03] Laundry", href: "#laundry" },
    { name: "[04] About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-neutral-800 ${
        scrolled ? "py-3 shadow-xl" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo Text */}
        <Link
          href="#"
          className="text-xs sm:text-sm font-medium tracking-widest text-neutral-200 uppercase hover:text-white transition-colors"
        >
          Zai Tours & Stays — Kilifi, KE — Est. 2022
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-mono tracking-wider text-neutral-400 border border-neutral-800 rounded hover:border-neutral-600 hover:text-white transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <Link
            href="#cta"
            className="bg-[#ccff00] text-black font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded hover:bg-[#b3e600] transition-colors"
          >
            [Book Now]
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-neutral-800 px-6 py-5 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-mono text-neutral-300 hover:text-[#ccff00] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#ccff00] text-black font-semibold text-xs tracking-wider uppercase py-3 rounded hover:bg-[#b3e600] transition-colors"
            >
              [Book Now]
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}