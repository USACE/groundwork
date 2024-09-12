import { useLinkComponent } from "./link-provider";

const Link = ({ href, children, ...props }) => {
  const { component: Component, hrefMap } = useLinkComponent();

  const ProvidedLink = Component || "a";
  const hrefProp = hrefMap || "href";

  return (
    <ProvidedLink {...{ [hrefProp]: href }} {...props}>
      {children}
    </ProvidedLink>
  );
};

export default Link;
