import { UsaceBox, Code, Text, Field, Label, Input } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import { useState } from "react";

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
    text: "Numeric Inputs",
    href: "/#/docs/forms/numeric-input",
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
    type: "number | range",
    default: "'text'",
    desc: "Since this is the same Input component as the text input, that's the default, you will want to use 'number' or 'range' to get the features documented here.",
  },
  {
    name: "min",
    type: "number",
    default: "undefined",
    desc: "The minimum value for the input.",
  },
  {
    name: "max",
    type: "number",
    default: "undefined",
    desc: "The maximum value for the input.",
  },
  {
    name: "step",
    type: "number",
    default: "undefined",
    desc: "The step value for the range input or the up and down arrows of the number input.",
  },
];

function NumericInputDocs() {
  const [numberValue, setNumberValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Numeric Inputs">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            When you want a number, not some random text, use the numeric
            inputs. We have a range slider component, but you can (should?) use
            the browser native range. Styling the range slider for cross-browser
            compatibility is a bit of a pain.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-w-[50%gw-]">
            <div className="gw-mb-3">
              <Field>
                <Label>Number</Label>
                <Input
                  type="number"
                  placeholder="number"
                  value={numberValue}
                  onChange={(e) => {
                    setNumberValue(e.target.value);
                  }}
                />
              </Field>
            </div>
            <div className="gw-mb-3">
              <Field>
                <Label>{`Range - Value = ${rangeValue}`}</Label>
                <Input
                  type="range"
                  min={0}
                  max={100}
                  value={rangeValue}
                  onChange={(e) => {
                    setRangeValue(e.target.value);
                  }}
                />
              </Field>
            </div>
            <div className="gw-mb-3">
              <Field>
                <Label>Browser Range</Label>
                <div className="gw-mt-1">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={rangeValue}
                    onChange={(e) => {
                      setRangeValue(e.target.value);
                    }}
                  />
                </div>
              </Field>
            </div>
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Field, Label, Input } from "@usace/groundwork";
import { useState } from "react";

function Component() {
  const [numberValue, setNumberValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <>
      <div className="mb-3">
        <Field>
          <Label>Number</Label>
          <Input
            type="number"
            placeholder="number"
            value={numberValue}
            onChange={(e) => {
              setNumberValue(e.target.value);
            }}
          />
        </Field>
      </div>
      <div className="mb-3">
        <Field>
          <Label>{\`Range - Value = \${rangeValue}\`}</Label>
          <Input
            type="range"
            min={0}
            max={100}
            value={rangeValue}
            onChange={(e) => {
              setRangeValue(e.target.value);
            }}
          />
        </Field>
      </div>
      <div className="mb-3">
        <Field>
          <Label>Browser Range</Label>
          <div className="mt-1">
            <input
              type="range"
              min="0"
              max="100"
              value={rangeValue}
              onChange={(e) => {
                setRangeValue(e.target.value);
              }}
            />
          </div>
        </Field>
      </div>
    </>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API -{" "}
          <Code className="gw-p-2">{`<Input type={"number" || "range"} />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default NumericInputDocs;
export { NumericInputDocs };
