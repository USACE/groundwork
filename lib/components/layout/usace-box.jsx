import { useMemo, forwardRef } from "react";
import gwMerge from "../../gw-merge";

const UsaceBox = forwardRef(function UsaceBox(
  { children, className, title, customTitle, id },
  ref,
) {
  const CustomTitle = customTitle;
  const boxClass = "gw:mb-10 gw:relative";
  const beforeClass =
    "gw:before:block gw:before:bg-usace-box-light-gray gw:before:h-8 gw:before:mb-[-12px] gw:before:w-full";
  const afterClass =
    "gw:after:block gw:after:absolute gw:after:top-0 gw:after:left-0 gw:after:bg-usace-box-red gw:after:h-[5px] gw:after:w-[50px] gw:after:z-2";

  const usaceBoxClass = useMemo(() => {
    return gwMerge(boxClass, beforeClass, afterClass, className);
  }, [className]);

  return (
    <div ref={ref} className={usaceBoxClass} id={id}>
      <h2 className="gw:font-bold gw:mb-5 gw:text-[1.3rem]">
        {title}
        {CustomTitle && <CustomTitle />}
      </h2>
      {children}
    </div>
  );
});

export default UsaceBox;
export { UsaceBox };
