import { useLinkComponent } from "./link-provider";
import { forwardRef } from "react";

const Link = ({ href, children, ...props }, ref) => {
  const { component: Component, hrefMap } = useLinkComponent();

  const ProvidedLink = Component || "a";
  const hrefProp = hrefMap || "href";

  return (
    <ProvidedLink {...{ [hrefProp]: href }} {...props} ref={ref}>
      {children}
    </ProvidedLink>
  );
};

const ForwardedLink = forwardRef(Link);
export { ForwardedLink as Link };

export default forwardRef(Link);
