import { useMemo, useState } from "react";
import { UsaceBox, Code, Text, H3, RadioGroup } from "../../../../lib";
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
    text: "Radio Group",
    href: `${BASE_URL}#/docs/forms/RadioGroup`,
  },
];

const componentProps_RadioGroup = [
  {
    name: "legend",
    type: "string",
    default: "null",
    desc: "Optional fieldset legend shown above the radio options",
  },
  {
    name: "label",
    type: "string",
    default: "null",
    desc: "Optional description below the legend, above the options",
  },
  {
    name: "content",
    type: "Array<{ id: string, text: string, onClick?: function, onChange?: function }>",
    default: "null",
    desc: "Array of objects that defines each radio option's text, id, and optional click/change handlers",
  },
  {
    name: "defaultChecked",
    type: "string",
    default: "null",
    desc: "ID of the option that should be checked by default",
  },
  {
    name: "className",
    type: "string",
    default: "null",
    desc: "Additional classes to apply to the <fieldset>",
  },
];

const FT_TO_METERS_SCALAR = 0.3048;

function RadioGroupDocs() {
  const [units, setUnits] = useState(null);
  const [value, setValue] = useState(200);
  useMemo(() => {
    if (units?.toLowerCase() == "en")
      setValue((value / FT_TO_METERS_SCALAR).toFixed(2));
    else if (units?.toLowerCase() == "si")
      setValue((value * FT_TO_METERS_SCALAR).toFixed(2));
  }, [units]);
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Radio Group">
        <div className="gw-pb-6">
          <Text>
            The <Code>{"<RadioGroup />"}</Code> component renders a vertical
            stack of radio buttons with an optional legend and description
            label. It is built with accessibility and consistent Tailwind
            styling, allowing developers to provide dynamic options and handlers
            per option.
          </Text>
        </div>

        <H3 className="gw-mt-6 gw-pb-3">Example</H3>
        <RadioGroup
          legend="System"
          label="Select A Measurement System"
          defaultChecked="radio-en"
          content={[
            {
              id: "radio-en",
              text: "English",
              onClick: () => setUnits("en"),
            },
            {
              id: "radio-si",
              text: "Metric",
              onChange: () => setUnits("si"),
            },
          ]}
        />
        <div className="gw-my-3">
          <Text>
            {value} {units == "si" ? "m" : "ft"}
          </Text>
        </div>

        <CodeExample
          code={`import { RadioGroup } from "@usace/groundwork";

function Example() {

  const [units, setUnits] = useState(null);
  const [value, setValue] = useState(200);
  const content = [
        {
          id: "radio-en",
          text: "English",
          onClick: () => setUnits("EN"),
        },
        {
          id: "radio-si",
          text: "Metric",
          onChange: () => setUnits("SI"),
        },
    ]
  useMemo(() => {
    if (units?.toLowerCase() == "en")
      setValue((value / FT_TO_METERS_SCALAR).toFixed(2));
    else if (units?.toLowerCase() == "si")
      setValue((value * FT_TO_METERS_SCALAR).toFixed(2));
  }, [units]);
  return (
    <>
        <RadioGroup
            legend="System"
            label="Select A Measurement System"
            defaultChecked="radio-en"
            content={content}
            />
        <div className="my-3">
        <Text>{value} {units == "si" ? "m" : "ft"}</Text>
        </div>
    </>
  );
}`}
        />

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API -{" "}
          <Code className="gw-p-2">{`<RadioGroup legend={legend} label={label} content={content} ...etc />`}</Code>
        </div>

        <PropsTable propsList={componentProps_RadioGroup} />
      </UsaceBox>
    </DocsPage>
  );
}

export default RadioGroupDocs;
export { RadioGroupDocs };
