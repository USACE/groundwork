import { useMemo } from "react";
import gwMerge from "../../gw-merge";

function Card({ className, children, stretch = false, ...props }) {
  const cls = useMemo(() => {
    return gwMerge(
      "gw:w-full gw:p-3 gw:shadow gw:bg-white gw:rounded-md gw:border",
      stretch ? "gw:self-stretch" : "",
      className,
    );
  }, [className]);
  return (
    <div className={cls} {...props}>
      {children}
    </div>
  );
}

export default Card;
export { Card };
