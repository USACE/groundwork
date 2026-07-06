import { UsaceBox, Code, Text, Field, Label, Input } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const BASE_URL = import.meta.env.BASE_URL;

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: `${BASE_URL}#/docs`,
  },
  {
    text: "Forms",
    href: `${BASE_URL}#/docs/forms`,
  },
  {
    text: "Input",
    href: `${BASE_URL}#/docs/forms/input`,
  },
];

const componentProps = [
  {
    name: "headerLinks",
    type: "array[Link]",
    default: "[]",
    desc: "An array of objects to be used as links in the header. Each object should have an id, text, and href property. If you would like a drop-down of links include a children property which is an array of link objects to the top level link.",
  },
];

const inputTypes = [
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "month",
  "number",
  "password",
  "range",
  "tel",
  "text",
  "time",
  "url",
  "week",
];

function InputDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Input">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The MVP of data entry, the Input. We support all the
            browser-supported input types, but some of the browser native input
            interfaces are a bit wonky so you might want to look at the custom
            inputs for checkboxes/switches, radio buttons, range sliders, and
            file selectors.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-w-[50%gw-]">
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
          code={`import {  } from "@usace/groundwork";

function Component() {
  return ()
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<SiteWrapper />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default InputDocs;
export { InputDocs };
