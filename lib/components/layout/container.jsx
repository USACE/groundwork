import clsx from "clsx";

function Container({ className, children, fluid }) {
  const containerClass = clsx(
    "gw-w-full gw-mx-auto gw-px-4 gw-box-border",
    fluid ? "gw-max-w-[100vw]" : "gw-max-w-[1140px]",
    className
  );
  return <div className={containerClass}>{children}</div>;
}

export default Container;
export { Container };
