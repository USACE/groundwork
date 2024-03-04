import clsx from "clsx";

function Container({ className, children, fluid }) {
  const containerClass = clsx(
    "w-full mx-auto px-4 box-border",
    fluid ? "max-w-full" : "max-w-[1140px]",
    className
  );
  return <div className={containerClass}>{children}</div>;
}

export default Container;
export { Container };
