import {
  UsaceBox,
  Code,
  Text,
  Fieldset,
  Field,
  Label,
  Legend,
  Input,
  Textarea,
  FieldGroup,
} from "../../../../lib";
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
    text: "Fieldset",
    href: "/docs/forms/fieldset",
  },
];

const componentProps_Fieldset = [
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    desc: "Disable all fields within the fieldset",
  },
];

function FieldsetDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Fieldset">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Use the Fieldset, FieldGroup, Label, Field and Legend components to
            organize your forms, these provide styling as well as organize the
            data entry components for assistive technologies.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-w-[50%gw-]">
            <Fieldset>
              <Legend>Fieldset Title</Legend>
              <Text>You can add some more instructions like this...</Text>
              <FieldGroup>
                <Field>
                  <Label htmlFor="input">Input Label</Label>
                  <Input id="input" />
                </Field>
                <Field>
                  <Label htmlFor="textarea">Textarea Label</Label>
                  <Textarea id="textarea" />
                </Field>
              </FieldGroup>
            </Fieldset>
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Fieldset, Legend, Text, FieldGroup, Field, Label, Input, Textarea } from "@usace/groundwork";

function Component() {
  return (
    <div className="gw-w-[50%gw-]">
      <Fieldset>
        <Legend>Fieldset Title</Legend>
        <Text>You can add some more instructions like this...</Text>
        <FieldGroup>
          <Field>
            <Label htmlFor="input">Input Label</Label>
            <Input id="input" />
          </Field>
          <Field>
            <Label htmlFor="textarea">Textarea Label</Label>
            <Textarea id="textarea" />
          </Field>
        </FieldGroup>
      </Fieldset>
    </div>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Fieldset />`}</Code>
        </div>
        <PropsTable propsList={componentProps_Fieldset} />

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<FieldGroup />`}</Code>
        </div>
        <Text className="gw-mt-3">
          This component does not expose any component-specific props.
        </Text>

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Field />`}</Code>
        </div>
        <Text className="gw-mt-3">
          This component does not expose any component-specific props.
        </Text>

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Legend />`}</Code>
        </div>
        <Text className="gw-mt-3">
          This component does not expose any component-specific props.
        </Text>

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Label />`}</Code>
        </div>
        <Text className="gw-mt-3">
          This component does not expose any component-specific props.
        </Text>
      </UsaceBox>
    </DocsPage>
  );
}

export default FieldsetDocs;
export { FieldsetDocs };
