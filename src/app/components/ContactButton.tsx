import React from "react";
import type { ElementDescription } from "../layout";
import Link from "next/link";

const ContactButton = ({ text }: { text: ElementDescription }) => {
  return (
    <Link
      href="tel:+48601208409"
      className="
        group
        relative flex-shrink-0
        flex items-center gap-2
        px-4 py-2 rounded-lg
        text-[11px] font-semibold tracking-widest uppercase
        text-amber-100/90
        overflow-hidden
        transition-all duration-200
        active:scale-[0.96] active:translate-y-px
        select-none
      "
      style={{
        background: "linear-gradient(160deg, #7a3d2e 0%, #4C2922 50%, #321810 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,210,180,0.18), inset 0 -1px 0 rgba(0,0,0,0.25), 0 4px 14px rgba(76,41,34,0.45), 0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      {/* Shimmer layer */}
      <span
        className="
          pointer-events-none absolute inset-0
          translate-x-[-110%] group-hover:translate-x-[110%]
          transition-transform duration-700 ease-in-out
          skew-x-[-20deg]
        "
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,210,180,0.12), transparent)",
        }}
      />

      {/* Phone icon */}
      <svg
        className="relative w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>

      <span className="relative hidden sm:inline">{text.text}</span>
    </Link>
  );
};

export default ContactButton;