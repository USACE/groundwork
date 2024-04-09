import { UsaceBox, Code, Text, Field, Label, Input } from "../../../../lib";
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
    text: "Text Inputs",
    href: "/docs/forms/text-inputs",
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
  {
    name: "placeholder",
    type: "string",
    default: "''",
    desc: "The placeholder text for the input.",
  },
];

const inputTypes = ["text", "email", "password", "tel", "url"];

function TextInputDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Text Inputs">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text className="gw-pb-3">
            The MVP of data entry, the Input. We support all the
            browser-supported input types, but some of the browser native input
            interfaces are a bit wonky so you might want to look at the custom
            inputs for checkboxes/switches, radio buttons, range sliders, and
            file selectors.{" "}
          </Text>
          <Text>
            Adding the type prop to the Input component will tell the browser
            what type of input to render, this doesn't mean there are any
            validation rules applied to the input, just that the browser will
            render the input with the correct interface and information passed
            to screen readers. The telephone type might also be useful for
            mobile devices as many display the numeric keypad for this type.
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
          code={`import { Input, Field, Label } from "@usace/groundwork";

const inputTypes = ["text", "email", "password", "tel", "url"];

function Component() {
  return (
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
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Input />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default TextInputDocs;
export { TextInputDocs };
