import gwMerge from "../../gw-merge";

function Dropdown({
  label,
  options,
  labelClassName = "",
  className = "",
  onChange,
  value,
  ...props
}) {
  if (!options || options.length === 0) {
    console.error(
      `Dropdown ${label} must have at least one option with value and text.`,
    );
    return null;
  }

  return (
    <>
      <label
        htmlFor={label + "-id"}
        className={gwMerge(
          "gw:block gw:text-sm gw:font-medium gw:leading-6 gw:text-gray-900",
          labelClassName,
        )}
      >
        {label}
      </label>
      <select
        id={label}
        name={label}
        onChange={onChange}
        className={gwMerge(
          "gw:mt-2 gw:pr-5 gw:w-full gw:rounded-md gw:border-0 gw:py-1.5 gw:pl-3 gw:border-r-8 gw:border-transparent gw:text-gray-600 gw:ring-1  gw:ring-gray-300 gw:focus:ring-2 gw:focus:ring-indigo-600 gw:sm:text-sm gw:sm:leading-6",
          className,
        )}
        value={value}
        {...props}
      >
        {options}
      </select>
    </>
  );
}

export default Dropdown;
export { Dropdown };
