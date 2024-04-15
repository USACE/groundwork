import { UsaceBox, Code, Text, Field, Label, Input } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import { useState } from "react";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Forms",
    href: "/docs/forms",
  },
  {
    text: "Color Input",
    href: "/docs/forms/color-input",
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
    desc: "The controlled value for the input.",
  },
  {
    name: "onChange",
    type: "function",
    default: "undefined",
    desc: "The function to call when the input value changes.",
  },
  {
    name: "type",
    type: "string",
    default: "'text'",
    desc: "The type of input, you will need to set this to 'color' in order to use these features.",
  },
];

function ColorInputDocs() {
  const [color, setColor] = useState("#000000");

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Color Input">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The Color Input component is a simple input field that allows users
            to select a color. It is a standard HTML input element with the type
            set to color.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-flex gw-gap-6 gw-items-center gw-w-full">
            <div className="gw-flex-1">
              <Field>
                <Label>Pick a color</Label>
                <Input
                  type="color"
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
              </Field>
            </div>
            <div className="gw-flex-1">
              <div
                className="gw-h-8 gw-w-full gw-text-center gw-text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </div>
            </div>
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Field, Label, Input } from "@usace/groundwork";
import { useState } from "react";

function Component() {
  const [color, setColor] = useState("#000000");

  return (
    <div className="flex gap-6 items-center w-full">
      <div className="flex-1">
        <Field>
          <Label>Pick a color</Label>
          <Input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </Field>
      </div>
      <div className="flex-1">
        <div
          className="h-8 w-full text-center text-white"
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
      </div>
    </div>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API -{" "}
          <Code className="gw-p-2">{`<Input type="color" />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default ColorInputDocs;
export { ColorInputDocs };
