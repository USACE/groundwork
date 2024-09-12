import { useLinkComponent } from "./link-provider";

const Link = ({ children, ...props }) => {
  const ProvidedLink = useLinkComponent() || "a";

  return <ProvidedLink {...props}>{children}</ProvidedLink>;
};

export default Link;
