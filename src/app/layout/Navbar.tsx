"use client";

import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo";
import ContactButton from "../components/ContactButton";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
import NavLinks from "../components/NavLinks";

export interface LogoSize {
  size: string;
}

const size: LogoSize = {
  size: "42px",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center px-4 pt-3 pb-1 pointer-events-none">
      <header
        className={`
          pointer-events-auto relative
          w-full sm:w-4/5 lg:w-11/12 xl:w-4/5
          flex items-center justify-between gap-4
          h-14 md:h-[4.25rem] px-4 md:px-6
          rounded-xl sm:rounded-2xl
          border border-white/20
          backdrop-blur-2xl
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/85 shadow-[0_8px_32px_rgba(76,41,34,0.15),0_1px_0_rgba(255,255,255,0.8)_inset]"
              : "bg-white/80 shadow-[0_4px_20px_rgba(76,41,34,0.10),0_1px_0_rgba(255,255,255,0.7)_inset]"
          }
          ${menuOpen ? "rounded-b-none" : ""}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center group">
          <div className="transition-transform duration-200 group-hover:scale-105">
            <Logo size={size} />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLinks />
        </nav>

        {/* Search bar — disabled, visible on larger screens */}
        <div className="flex-1 max-w-[240px] hidden sm:flex">
          <SearchBar disabled />
        </div>

        {/* Contact Button + Mobile Toggle */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <ContactButton text={{ text: "+48 601 208 409" }} />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1 rounded-md hover:bg-[#4C2922]/10 transition-colors"
          >
            <span className={`block h-0.5 bg-[#4C2922] rounded transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 bg-[#4C2922] rounded transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-[#4C2922] rounded transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`
            md:hidden
            absolute top-[calc(100%+1px)] left-0 right-0
            transition-all duration-300 ease-in-out
            ${menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <div className="backdrop-blur-2xl bg-white border-x border-b border-white/20 rounded-b-xl shadow-[0_12px_32px_rgba(76,41,34,0.12)] p-3 flex flex-col gap-1">
            <NavLinks mobile onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;