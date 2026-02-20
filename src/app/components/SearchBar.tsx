import React from "react";
import Beacon from "./Beacon";

interface SearchBarProps {
  disabled?: boolean;
}

const SearchBar = ({ disabled = false }: SearchBarProps) => {
  return (
    <div className="flex w-full items-center relative group">
      {/* Search icon */}
      <svg
        className={`absolute left-2.5 w-3.5 h-3.5 pointer-events-none transition-colors duration-150 ${
          disabled
            ? "text-[#c9aea6]"
            : "text-[#b8998f] group-focus-within:text-[#4C2922]"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" strokeLinecap="round" />
      </svg>

      <input
        disabled={disabled}
        className={`
          w-full h-8 pl-8 pr-3
          rounded-lg
          text-xs placeholder-[#b8998f]
          bg-[#f8f3f1]
          border border-transparent
          outline-none
          transition-all duration-200
          ${
            disabled
              ? "opacity-50 cursor-not-allowed text-[#9e7a71]"
              : "text-[#3d2218] focus:bg-white focus:border-[#d4b8b0] focus:shadow-[0_0_0_3px_rgba(76,41,34,0.08)]"
          }
        `}
        placeholder="Szukaj..."
      />
      {!disabled && <Beacon />}
    </div>
  );
};

export default SearchBar;