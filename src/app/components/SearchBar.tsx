import React from "react";

const SearchBar = () => {
  return (
    <div className='flex w-full md:w-3/4 items-center justify-center m-1 ml-4 mr-4'>
      <input
        className='w-full h-8 rounded-md	outline outline-1 outline-outline-color p-1 text-xs drop-shadow-sm	focus:drop-shadow-lg'
        placeholder='Szukaj...'></input>
    </div>
  );
};

export default SearchBar;
