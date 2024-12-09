import gwMerge from "../../gw-merge";

const Skeleton = ({ type, className, ...props }) => {
  const baseSize = type === "card" ? "gw-w-80 gw-h-36" : "gw-w-12 gw-h-5";
  return (
    <div
      className={gwMerge(
        "gw-animate-pulse gw-rounded-md gw-bg-gray-400",
        baseSize,
        className
      )}
      {...props}
    />
  );
};

export { Skeleton };
export default Skeleton;
