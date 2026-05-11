import { useMemo } from "react";
import gwMerge from "../../gw-merge";

function Container({ className, children, fluid }) {
  const containerClass = useMemo(() => {
    return gwMerge(
      "gw-w-full gw-mx-auto gw-px-4 gw-box-border",
      fluid ? "gw-max-w-screen" : "gw-max-w-screen-2xl",
      className,
    );
  }, [className]);
  return <div className={containerClass}>{children}</div>;
}

export default Container;
export { Container };
