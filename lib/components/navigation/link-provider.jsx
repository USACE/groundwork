import { createContext, useContext } from "react";

const LinkContext = createContext({ component: "a", hrefMap: "href" });

export const LinkProvider = ({ component, hrefMap, children }) => {
  return (
    <LinkContext.Provider value={{ component, hrefMap }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinkComponent = () => {
  return useContext(LinkContext);
};
