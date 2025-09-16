import { useState } from "react";
import gwMerge from "../../gw-merge";

function Dropdown({
  label,
  options,
  labelClassName = "",
  className = "",
  onChange,
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState(options[0]?.value);
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
          "gw-block gw-text-sm gw-font-medium gw-leading-6 gw-text-gray-900",
          labelClassName,
        )}
      >
        {label}
      </label>
      <select
        id={label}
        name={label}
        onChange={(e) => {
          setSelectedValue(e.target.value);
          onChange(e);
        }}
        className={gwMerge(
          "gw-mt-2 gw-block gw-w-full gw-rounded-md gw-border-0 gw-py-1.5 gw-pl-3 gw-pr-10 gw-text-gray-900 gw-ring-1 gw-ring-inset gw-ring-gray-300 focus:gw-ring-2 focus:gw-ring-indigo-600 sm:gw-text-sm sm:gw-leading-6",
          className,
        )}
        {...props}
        value={selectedValue}
      >
        {options}
      </select>
    </>
  );
}

export default Dropdown;
export { Dropdown };
