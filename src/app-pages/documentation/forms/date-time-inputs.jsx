import { UsaceBox, Code, Text, Field, Label, Input } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Forms",
    href: "/#/docs/forms",
  },
  {
    text: "Date/Time Input",
    href: "/#/docs/forms/date-time-inputs",
  },
];

const componentProps = [
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    desc: "Disable the input.",
  },
  {
    name: "invalid",
    type: "boolean",
    default: "false",
    desc: "Set the input to an invalid state.",
  },
  {
    name: "name",
    type: "string",
    default: "''",
    desc: "The name attribute for the input.",
  },
  {
    name: "defaultValue",
    type: "string",
    default: "''",
    desc: "The default value for the input.",
  },
  {
    name: "value",
    type: "string",
    default: "''",
    desc: "The value for the input.",
  },
  {
    name: "type",
    type: "string",
    default: "'text'",
    desc: "The type of input.",
  },
];

const inputTypes = ["date", "datetime-local", "month", "time"];

function DateTimeInputDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Input">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Browsers have come a long way when it comes to date/time pickers,
            the Input component can leverage these native pickers by setting the
            type prop to one of the following: date, datetime-local, month,
            time. The Input component is a wrapper around the native input
            element and provides a consistent look and feel across browsers.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-w-[50%]">
            {inputTypes.map((type) => {
              return (
                <div key={type} className="gw-mb-3">
                  <Field>
                    <Label>{type}</Label>
                    <Input type={type} placeholder={type} label="label" />
                  </Field>
                </div>
              );
            })}
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Input, Field } from "@usace/groundwork";

function Component() {
  const inputTypes = ["date", "datetime-local", "month", "time"];

  return (
    <div className="w-[50%]">
      {inputTypes.map((type) => {
        return (
          <div key={type} className="mb-3">
            <Field>
              <Label>{type}</Label>
              <Input type={type} placeholder={type} label="label" />
            </Field>
          </div>
        );
      })}
    </div>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API -{" "}
          <Code className="gw-p-2">{`<Input type={"date" || "datetime-local" || "month" || "time"} />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default DateTimeInputDocs;
export { DateTimeInputDocs };
