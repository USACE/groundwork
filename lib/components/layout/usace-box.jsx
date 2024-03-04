import clsx from "clsx";

function UsaceBox({ children, className, title, customTitle }) {
  const CustomTitle = customTitle;
  const boxClass = "mb-10  relative";
  const beforeClass =
    "before:block before:bg-usace-box-light-gray before:h-8 before:mb-[-12px] before:w-full";
  const afterClass =
    "after:block after:absolute after:top-0 after:left-0 after:bg-usace-box-red after:h-[5px] after:w-[50px] after:z-[2]";

  return (
    <div className={clsx(className, boxClass, beforeClass, afterClass)}>
      <h2
        style={{ fontSize: "1.3rem", lineHeight: "1.4rem" }}
        className="font-bold mb-6"
      >
        {title}
        {CustomTitle && <CustomTitle />}
      </h2>
      {children}
    </div>
  );
}

export default UsaceBox;
export { UsaceBox };
