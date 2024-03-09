import { UsaceBox, Code, Text, Input } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

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
    text: "Input",
    href: "/docs/forms/input",
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
        <div className="pb-6">
          <Text>
            The MVP of data entry, the Input. We support all the
            browser-supported input types, but some of the browser native input
            interfaces are a bit wonky so you might want to look at the custom
            inputs for checkboxes/switches, radio buttons, range sliders, and
            file selectors.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          {inputTypes.map((type) => {
            return (
              <div key={type} className="mb-3">
                <Input type={type} placeholder={type} />
              </div>
            );
          })}
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
        <div className="font-bold text-lg pt-6">
          Component API - <Code className="p-2">{`<SiteWrapper />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default InputDocs;
export { InputDocs };
