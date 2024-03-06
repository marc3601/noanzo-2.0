import Link from "next/link";
import React from "react";

const MainCTA = ({ text, noaction }: { text: string; noaction?: boolean }) => {
  return (
    <div className='mt-4 mb-4'>
      <div className='inline-block p-3 rounded-lg bg-[linear-gradient(90deg,#c7929a,#d27303)] text-white text-xs pl-6 pr-6'>
        {noaction ? (
          <p className='font-bold'>{text}</p>
        ) : (
          <Link href={"tel:+48601208409"}>{text}</Link>
        )}
      </div>
    </div>
  );
};

export default MainCTA;
