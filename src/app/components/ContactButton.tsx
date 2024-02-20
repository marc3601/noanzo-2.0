import React from "react";
import type { ElementDescription } from "../layout";

const ContactButton = ({ text }: { text: ElementDescription }) => {
  return (
    <div className='flex items-center justify-center  m-1 text-xs'>
      <button className='bg-main-color text-white	p-2 rounded-md text-nowrap	'>
        {text.text}
      </button>
    </div>
  );
};

export default ContactButton;
