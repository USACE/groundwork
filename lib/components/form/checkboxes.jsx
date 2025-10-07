import gwMerge from "../../gw-merge";
import { Fieldset } from "./fieldset";

function Checkboxes({ content, legend, className, ...props }) {
  if (!content || !Array.isArray(content) || content.length === 0) {
    console.warn(
      "Checkboxes component requires a non-empty array of content items.",
    );
    return null;
  }
  return (
    <Fieldset className={className} {...props}>
      {legend && <legend className="gw:sr-only">{legend}</legend>}
      {content.map((item, index) => (
        <div
          key={[index, "checkbox", legend].join("-")}
          className="gw:space-y-5"
        >
          <div className="gw:flex gw:gap-3">
            <div className="gw:flex gw:h-6 gw:shrink-0 gw:items-center">
              <div className="gw:group gw:grid gw:size-4 gw:grid-cols-1">
                <input
                  defaultChecked={item?.defaultChecked || false}
                  disabled={item?.disabled || false}
                  onClick={item?.onClick}
                  onChange={item?.onChange}
                  {...item?.inputProps}
                  id={item?.id || `checkbox-${index}-${legend}`}
                  name={item?.name || `checkbox-${index}-${legend}`}
                  type="checkbox"
                  aria-describedby={
                    item?.ariaDescribedBy ||
                    item?.name ||
                    `checkbox-${index}-${legend}-description`
                  }
                  className={gwMerge(
                    "gw:col-start-1 gw:row-start-1 gw:appearance-none gw:rounded gw:border gw:border-gray-300 gw:bg-white",
                    "gw:checked:border-indigo-600 gw:checked:bg-indigo-600 gw:indeterminate:border-indigo-600 gw:indeterminate:bg-indigo-600",
                    "gw:focus-visible:outline gw:focus-visible:outline-2 gw:focus-visible:outline-offset-2 gw:focus-visible:outline-indigo-600 gw:disabled:border-gray-300",
                    "gw:disabled:bg-gray-100 gw:disabled:checked:bg-gray-100 gw:forced-colors:appearance-auto",
                    item?.inputProps?.className,
                  )}
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="gw:pointer-events-none gw:col-start-1 gw:row-start-1 gw:size-3.5 gw:self-center gw:justify-self-center gw:stroke-white gw:group-has-disabled:stroke-gray-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="gw:opacity-0 gw:group-has-[:checked]:gw:opacity-100"
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="gw:opacity-0 gw:group-has-indeterminate:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm/6">
              {item?.label && (
                <label
                  htmlFor="comments"
                  className="gw:font-medium gw:text-gray-900"
                  {...item?.labelProps}
                >
                  {item.label}
                </label>
              )}
              {item?.description && (
                <p
                  id={`comments-${item?.id}-description`}
                  className={gwMerge("gw:text-gray-500", item?.className)}
                >
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </Fieldset>
  );
}

export default Checkboxes;
export { Checkboxes };
