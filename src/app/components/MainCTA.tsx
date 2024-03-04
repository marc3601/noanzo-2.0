import React from "react";

const MainCTA = ({
  text,
  colors,
}: {
  text: string;
  colors: [string, string];
}) => {
  return (
    <div className='mt-4 mb-4'>
      <div className='inline-block p-3 rounded-lg bg-[linear-gradient(90deg,#c7929a,#d27303)] text-white text-xs pl-6 pr-6'>
        {text}
      </div>
    </div>
  );
};

export default MainCTA;
