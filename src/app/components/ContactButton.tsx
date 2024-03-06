import React from "react";
import type { ElementDescription } from "../layout";
import Link from "next/link";

const ContactButton = ({ text }: { text: ElementDescription }) => {
  return (
    <div className='flex items-center justify-center  m-1 text-xs'>
      <div className='bg-main-color text-white	p-2 rounded-md text-nowrap	'>
        <Link href={"tel:+48601208409"}>{text.text}</Link>
      </div>
    </div>
  );
};

export default ContactButton;
