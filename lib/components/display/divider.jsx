import gwMerge from "../../gw-merge";

function Divider({ text, className = null, ...props }) {
  return (
    <div className={gwMerge("gw:py-3", className)} {...props}>
      <div className="gw-relative">
        <div
          aria-hidden="true"
          className="gw-absolute gw:inset-0 gw:flex gw:items-center"
        >
          <div className="gw-w-full gw:border-t gw:border-gray-300" />
        </div>
        <div className="gw-relative gw:flex gw:justify-center">
          <span className="gw-bg-white gw:px-3 gw:text-base gw:font-semibold gw:leading-6 gw:text-gray-900">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Divider;
export { Divider };
