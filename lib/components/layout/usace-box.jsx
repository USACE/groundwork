import { useMemo, forwardRef } from "react";
import gwMerge from "../../gw-merge";

const UsaceBox = forwardRef(function UsaceBox(
  { children, className, title, customTitle, id },
  ref,
) {
  const CustomTitle = customTitle;
  const boxClass = "gw-mb-10 gw-relative";
  const beforeClass =
    "before:gw-block before:gw-bg-usace-box-light-gray before:gw-h-8 before:gw-mb-[-12px] before:gw-w-full";
  const afterClass =
    "after:gw-block after:gw-absolute after:gw-top-0 after:gw-left-0 after:gw-bg-usace-box-red after:gw-h-[5px] after:gw-w-[50px] after:gw-z-[2]";

  const usaceBoxClass = useMemo(() => {
    return gwMerge(boxClass, beforeClass, afterClass, className);
  }, [className]);

  return (
    <div ref={ref} className={usaceBoxClass} id={id}>
      <h2 className="gw-font-bold gw-mb-5 gw-text-[1.3rem]">
        {title}
        {CustomTitle && <CustomTitle />}
      </h2>
      {children}
    </div>
  );
});

export default UsaceBox;
export { UsaceBox };
