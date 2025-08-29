import { UsaceBox, Code, Text, Field, Label, Textarea } from "../../../../lib";
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
    text: "Text Area",
    href: "/#/docs/forms/textarea",
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
    desc: "Indicate that the field is invalid.",
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
    desc: "A default value for the input.",
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
    desc: "Handler called when the change event is fired.",
  },
  {
    name: "rows",
    type: "number",
    default: "undefined",
    desc: "Number of rows to use as the height for the text area.",
  },
];

function TextareaDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Text Area">
        {/* Description of the component and what problem it solves */}
        <div className="gw:pb-6">
          <Text>
            Like a basic text input, but for longer text, make it big by upping
            the rows prop.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw:rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          <div className="gw:w-1/2">
            <Field>
              <Label>Some long description</Label>
              <Textarea rows={5} />
            </Field>
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Field, Label, Textarea } from "@usace/groundwork";

function Component() {
  return (
    <div className="w-1/2">
      <Field>
        <Label>Some long description</Label>
        <Textarea rows={5} />
      </Field>
    </div>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw:font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw:p-2">{`<SiteWrapper />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default TextareaDocs;
export { TextareaDocs };
