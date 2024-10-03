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
        className={`block text-sm font-medium leading-6 text-gray-900 ${labelClassName}`}
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
        className={`mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
        value={selectedValue || options[0].props.value}
        {...props}
      >
        {options}
      </select>
    </>
  );
}
