import clsx from "clsx";

function Card({ className, children, stretch = false, ...props }) {
  const cls = clsx(
    "w-full p-3 shadow bg-white rounded-md border",
    stretch && "self-stretch",
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
