import { useState } from "react";

export default function Dropdown({
  label,
  options,
  labelClassName,
  className,
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState(options[0].props.value);
  if (!options || options.length === 0) {
    throw new Error(`Dropdown ${label} must have at least one option`);
  }
  return (
    <>
      <label
        htmlFor={label + "-id"}
        className={`gw-block gw-text-sm gw-font-medium gw-leading-6 gw-text-gray-900 ${labelClassName}`}
      >
        {label}
      </label>
      <select
        id={label ? label + "-id" : undefined}
        name={label ? label + "-name" : undefined}
        onChange={(e) => {
          setSelectedValue(e.target.value);
          props.onChange(e);
        }}
        className={`gw-mt-2 gw-block gw-w-full gw-rounded-md gw-border-0 gw-py-1.5 gw-pl-3 gw-pr-10 gw-text-gray-900 gw-ring-1 gw-ring-inset gw-ring-gray-300 focus:gw-ring-2 focus:gw-ring-indigo-600 sm:gw-text-sm sm:gw-leading-6 ${className}`}
        value={selectedValue || options[0].props.value}
        {...props}
      >
        {options}
      </select>
    </>
  );
}
