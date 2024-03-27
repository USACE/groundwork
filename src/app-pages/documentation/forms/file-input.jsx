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
    text: "File Input",
    href: "/docs/forms/file-input",
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

const inputTypes = ["file"];

function FileInputDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="File Input">
        {/* Description of the component and what problem it solves */}
        <div className="pb-6">
          <Text>
            For now we are including a basic file input using the browser
            default interface, we may add prettier options in the future.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          <div className="w-[50%]">
            <div className="mb-3">
              <Field>
                <Label>Choose a file</Label>
                <Input type="file" />
              </Field>
            </div>
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Input, Field } from "@usace/groundwork";

function Component() {
  return (
    <div className="w-[50%]">
      <div className="mb-3">
        <Field>
          <Label>Choose a file</Label>
          <Input type="file" />
        </Field>
      </div>
    </div>
  )
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

export default FileInputDocs;
export { FileInputDocs };
