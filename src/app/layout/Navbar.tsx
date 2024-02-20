import React from "react";
import Logo from "../assets/Logo";
import SearchBar from "../components/SearchBar";
import ContactButton from "../components/ContactButton";

export interface LogoSize {
  size: string;
}

const size: LogoSize = {
  size: "40px",
};

const Navbar = () => {
  return (
    <div className='container mx-auto sm:w-4/5 flex justify-between align-center'>
      <Logo size={size} />
      <SearchBar />
      <ContactButton text={{ text: "+48 601 208 409" }} />
    </div>
  );
};

export default Navbar;
