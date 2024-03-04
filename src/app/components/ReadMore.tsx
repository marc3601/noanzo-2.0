import React from "react";

const ReadMore = ({
  setModal,
  modal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}) => {
  return (
    <span
      onClick={() => setModal(!modal)}
      className='text-main-color font-bold underline cursor-pointer'>
      Czytaj więcej
    </span>
  );
};

export default ReadMore;
