import { UsaceBox, Code, Text, Button, Divider, Badge } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import { Checkboxes } from "../../../../lib/components/form/checkboxes";
import { useState, useMemo } from "react";

const BASE_URL = import.meta.env.BASE_URL;

const pageBreadcrumbs = [
  { text: "Documentation", href: `${BASE_URL}#/docs` },
  { text: "Forms", href: `${BASE_URL}#/docs/forms` },
  { text: "Checkboxes", href: `${BASE_URL}#/docs/forms/checkboxes` },
];

const checkboxItemProps = [
  {
    name: "label",
    type: "string",
    default: "''",
    desc: "The label text shown next to the checkbox.",
  },
  {
    name: "description",
    type: "string",
    default: "''",
    desc: "Optional description displayed under the label.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    desc: "Whether the checkbox is initially checked.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    desc: "Disable this checkbox.",
  },
  {
    name: "onChange",
    type: "function",
    default: "undefined",
    desc: "Callback fired on checkbox change.",
  },
  {
    name: "id",
    type: "string",
    default: "auto-generated",
    desc: "Unique identifier for the checkbox.",
  },
  {
    name: "name",
    type: "string",
    default: "auto-generated",
    desc: "Name attribute for the checkbox.",
  },
  {
    name: "ariaDescribedBy",
    type: "string",
    default: "auto-generated",
    desc: "ARIA description id for accessibility.",
  },
  {
    name: "className",
    type: "string",
    default: "''",
    desc: "Additional class names to apply to the label element. Overrides default styles.",
  },
  {
    name: "inputProps",
    type: "object",
    default: "{}",
    desc: "Additional props spread onto the underlying <input> element.",
  },
  {
    name: "labelProps",
    type: "object",
    default: "{}",
    desc: "Additional props spread onto the <label> wrapper container.",
  },
];

const componentProps_Checkboxes = [
  {
    name: "content",
    type: "Array<CheckboxItem>",
    default: "[]",
    desc: "Array of checkbox item objects (see CheckboxItem API below).",
  },
  {
    name: "legend",
    type: "string",
    default: "undefined",
    desc: "The screen-reader-only label for the group of checkboxes.",
  },
  {
    name: "className",
    type: "string",
    default: "''",
    desc: "Additional classes to apply to the fieldset wrapper.",
  },
];

function CheckboxesDocs() {
  const [checkedItems, setCheckedItems] = useState({ opt1: true, opt2: false });
  const clearAll = () => setCheckedItems({ opt1: false, opt2: false });
  const allChecked = Object.values(checkedItems).every(Boolean);

  const exampleContent = useMemo(
    () => [
      {
        id: "opt-1",
        label: "Option 1",
        description: "Enable feature one",
        defaultChecked: checkedItems.opt1,
        onChange: (e) =>
          setCheckedItems((prev) => ({ ...prev, opt1: e.target.checked })),
        inputProps: { title: "Checkbox for option 1" },
      },
      {
        id: "opt-2",
        label: "Option 2",
        description: "Enable feature two",
        defaultChecked: checkedItems.opt2,
        onChange: (e) =>
          setCheckedItems((prev) => ({ ...prev, opt2: e.target.checked })),
        inputProps: { title: "Checkbox for option 2" },
        labelProps: { className: "gw-text-blue-400 gw-text-xl" },
      },
    ],
    [checkedItems],
  );

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Checkboxes">
        <div className="gw-pb-6">
          <Text>
            The <Code>{"<Checkboxes />"}</Code> component renders a group of
            styled checkboxes with accessible markup. Each checkbox can be
            customized through the <Code>content</Code> prop which takes an
            array of checkbox metadata.
          </Text>
        </div>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3 gw-w-[50%]">
          <Checkboxes
            key={JSON.stringify(checkedItems)}
            legend="Checkbox Example"
            content={exampleContent}
          />
          <div className="gw-mt-4">
            <Button
              title="Clear all selected options"
              onClick={clearAll}
              color={allChecked ? "red" : "blue"}
            >
              Clear All
            </Button>
            <div className="gw-mt-2 gw-text-sm">
              <strong>Current State:</strong> {JSON.stringify(checkedItems)}
            </div>
          </div>
        </div>
        <CodeExample
          code={`import { useState, useMemo } from "react";
import { Checkboxes, Button } from "@usace/groundwork";

function Component() {
  const [checkedItems, setCheckedItems] = useState({
    opt1: true,
    opt2: false,
  });

  const clearAll = () => setCheckedItems({ opt1: false, opt2: false });
  const allChecked = Object.values(checkedItems).every(Boolean);

  const content = useMemo(() => [
    {
      id: "opt-1",
      label: "Option 1",
      description: "Enable feature one",
      defaultChecked: checkedItems.opt1,
      onChange: (e) => setCheckedItems((prev) => ({ ...prev, opt1: e.target.checked })),
      inputProps: { title: "Checkbox for option 1" },
    },
    {
      id: "opt-2",
      label: "Option 2",
      description: "Enable feature two",
      defaultChecked: checkedItems.opt2,
      onChange: (e) => setCheckedItems((prev) => ({ ...prev, opt2: e.target.checked })),
      inputProps: { title: "Checkbox for option 2" },
      labelProps: { className: "text-blue-400 text-xl" },
    },
  ], [checkedItems]);

  return (
    <>
      <Checkboxes key={JSON.stringify(checkedItems)} legend="Checkbox Example" content={content} />
      <Button onClick={clearAll} color={allChecked ? "red" : "default"}>Clear All</Button>
      <div className="mt-2 text-sm">
        <strong>Current State:</strong> {JSON.stringify(checkedItems)}
      </div>
    </>
  );
}

export default Component;`}
        />
        <Divider className="gw-mt-6 gw-mb-4" text="Checkbox Details" />
        <Text className="gw-mb-4">
          The <Code>{"<Checkboxes />"}</Code> component requires an array of
          checkbox items passed to the <Code>content</Code> prop.
        </Text>
        <Badge color="blue" className="gw-mb-4 gw-ms-1">
          Each item <em>should</em> include at least a <Code>label</Code> and an{" "}
          <Code>id</Code> and an <Code>onChange</Code> handler for
          interactivity.
        </Badge>
        <CodeExample
          code={`<Checkboxes
  legend="Checkbox Example"
  content={[
    {
      id: "opt-1",
      label: "Option 1",
      description: "Enable feature one",
      defaultChecked: true,
      onChange: (e) => alert("Option 1 changed:", e.target.checked),
      inputProps: { title: "Checkbox for option 1" },
      labelProps: { "data-testid": "label-1" },
    },
  ]}
/>`}
        />
        <Text className="gw-my-4">
          Use <Code>inputProps</Code> and <Code>labelProps</Code> to forward
          additional attributes to the rendered checkbox input and the
          surrounding label container respectively.
        </Text>
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Checkboxes />`}</Code>
        </div>
        <PropsTable propsList={componentProps_Checkboxes} />
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Checkbox Item API -{" "}
          <Code className="gw-p-2">{`<CheckboxItem />`}</Code>
        </div>
        <PropsTable propsList={checkboxItemProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default CheckboxesDocs;
export { CheckboxesDocs };
