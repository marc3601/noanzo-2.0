import React from "react";
import Image from "next/image";
import { BadgeData } from "../layout/Products";

const Badge = ({ data }: { data: BadgeData }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 sm:h-44 overflow-hidden rounded-t-xl bg-[#e8ddd8]">
        <Image
          src={data.link}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={data.title}
          unoptimized={true}
          className="transition-transform duration-500"
        />

        {/* Promoted crown badge */}
        {data.promoted && (
          <div
            className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
            style={{
              background: "linear-gradient(135deg, #f5c842 0%, #e8a020 60%, #c97a10 100%)",
              boxShadow: "0 2px 8px rgba(200,120,10,0.45), inset 0 1px 0 rgba(255,240,180,0.4)",
              color: "#3a1e00",
            }}
          >
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Polecane
          </div>
        )}

        {/* Bottom gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(76,41,34,0.5), transparent)" }}
        />
      </div>

      {/* Title bar */}
      <div
        className="px-3 py-2.5 rounded-b-xl flex items-center gap-2"
        style={{
          background: "linear-gradient(160deg, #7a3d2e 0%, #4C2922 60%, #321810 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,210,180,0.12)",
        }}
      >
        <h3
          className="text-center text-white text-sm font-semibold tracking-wide truncate flex-1"
          title={data.title}
        >
          {data.title}
        </h3>
        <svg
          className="w-3.5 h-3.5 flex-shrink-0 text-amber-200/60 transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Badge;