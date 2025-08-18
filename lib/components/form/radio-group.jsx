import gwMerge from "../../gw-merge";
import { Fieldset } from "./fieldset";

function RadioGroup({
  legend,
  content,
  label,
  defaultChecked,
  className,
  ...props
}) {
  if (!content) throw new Error("content is required for radio group!");

  return (
    <Fieldset className={gwMerge("gw-my-2", className)} {...props}>
      {legend && (
        <legend className="gw-text-sm/6 gw-font-semibold gw-text-gray-900">
          {legend}
        </legend>
      )}
      {label && (
        <p className="gw-mt-1 gw-text-sm/6 gw-text-gray-600">{label}</p>
      )}
      <div className="gw-mt-6 gw-space-y-6">
        {content.map((buttonItem, idx) => {
          const id = buttonItem?.id || `radio-${label}-${idx}`;
          return (
            <div key={id} className="gw-flex gw-items-center">
              <input
                defaultChecked={id === defaultChecked}
                onClick={buttonItem?.onClick}
                onChange={buttonItem?.onChange}
                id={id}
                name="notification-method"
                type="radio"
                className="gw-relative gw-size-4 gw-appearance-none gw-rounded-full gw-border gw-border-gray-300 gw-bg-white before:gw-absolute before:gw-inset-1 before:gw-rounded-full before:gw-bg-white checked:gw-border-indigo-600 checked:gw-bg-indigo-600 focus-visible:gw-outline focus-visible:gw-outline-2 focus-visible:gw-outline-offset-2 focus-visible:gw-outline-indigo-600 disabled:gw-border-gray-300 disabled:gw-bg-gray-100 disabled:before:gw-bg-gray-400 forced-colors:gw-appearance-auto forced-colors:gw-before:gw-hidden [&:not(:checked)]:gw-before:gw-hidden"
              />
              <label
                htmlFor={id}
                className={gwMerge(
                  "gw-ml-3 gw-block gw-text-sm/6 gw-font-medium gw-text-gray-900",
                  buttonItem?.className,
                )}
              >
                {buttonItem.text}
              </label>
            </div>
          );
        })}
      </div>
    </Fieldset>
  );
}

RadioGroup.defaultProps = {
  legend: "string",
  content: [{ id: 0, text: "string" }],
  label: "string",
  onClick: () => {},
  onChange: () => {},
  defaultChecked: "string",
  className: "string",
};

export default RadioGroup;
export { RadioGroup };
