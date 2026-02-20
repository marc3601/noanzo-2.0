import Link from "next/link";
import React from "react";

const MainCTA = ({ text, noaction }: { text: string; noaction?: boolean }) => {
  if (noaction && (text === "0 zł" || text.startsWith("0 "))) {
    return null;
  }

  if (noaction) {
    return (
      <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-white font-bold text-base sm:text-lg whitespace-nowrap"
        style={{
          background: "linear-gradient(160deg, #7a3d2e 0%, #4C2922 50%, #321810 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,210,180,0.18), inset 0 -1px 0 rgba(0,0,0,0.25), 0 4px 14px rgba(76,41,34,0.35)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
        <span>{text}</span>
      </div>
    );
  }

  return (
    <Link
      href="tel:+48601208409"
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl px-6 py-3.5 text-white transition-all duration-200 active:scale-[0.96] active:translate-y-px select-none"
      style={{
        background: "linear-gradient(160deg, #e8a23a 0%, #c97a10 45%, #a85e08 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,240,180,0.30), inset 0 -1px 0 rgba(0,0,0,0.20), 0 6px 20px rgba(180,100,8,0.45), 0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      {/* Shimmer */}
      <span
        className="pointer-events-none absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out skew-x-[-20deg]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,240,200,0.20), transparent)",
        }}
      />

      {/* Phone icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>

      <span className="relative text-sm font-bold tracking-widest uppercase">
        Zadzwoń teraz
      </span>
    </Link>
  );
};

export default MainCTA;