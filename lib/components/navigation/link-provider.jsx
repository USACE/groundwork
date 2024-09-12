import { createContext, useContext } from "react";

const LinkContext = createContext(null);

export const LinkProvider = ({ component, children }) => {
  return (
    <LinkContext.Provider value={component}>{children}</LinkContext.Provider>
  );
};

export const useLinkComponent = () => {
  return useContext(LinkContext);
};
