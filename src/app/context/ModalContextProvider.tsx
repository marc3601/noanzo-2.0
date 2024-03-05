import React, { ReactNode, createContext, useState } from "react";

const ModalContext = createContext({});

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
