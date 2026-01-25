import Link from "next/link";
import React from "react";

const MainCTA = ({ text, noaction }: { text: string; noaction?: boolean }) => {
  // Don't render if it's a price button with "0 zł"
  if (noaction && (text === "0 zł" || text.startsWith("0 "))) {
    return null;
  }

  return (
    <div className='mt-4 mb-4'>
      <div className={`inline-block p-3 rounded-lg text-white pl-6 pr-6 shadow-md hover:shadow-lg transition-shadow duration-200 ${
        noaction 
          ? 'bg-[linear-gradient(90deg,rgb(77,40,33),rgb(97,60,53))] text-base sm:text-lg md:text-xl' 
          : 'bg-[linear-gradient(90deg,#c7929a,#d27303)] text-xs sm:text-sm'
      }`}>
        {noaction ? (
          <div className='flex items-center gap-2 whitespace-nowrap'>
            {/* Price Tag Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <p className='font-bold'>{text}</p>
          </div>
        ) : (
          <Link href={"tel:+48601208409"} className='flex items-center gap-2 whitespace-nowrap'>
            {/* Phone Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className='font-bold'>{text}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainCTA;