import clsx from "clsx";

function Card({ className, children, stretch = false, ...props }) {
  const cls = clsx(
    "gw-w-full gw-p-3 gw-shadow gw-bg-white gw-rounded-md gw-border",
    stretch && "gw-self-stretch",
    className
  );
  return (
    <div className={cls} {...props}>
      {children}
    </div>
  );
}

export default Card;
export { Card };
