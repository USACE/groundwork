import { useState } from "react";
import {
  UsaceBox,
  Code,
  Text,
  Dropdown,
  Divider,
  Badge,
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
    text: "Dropdown",
    href: "/docs/forms/dropdown",
  },
];

const componentProps_Fieldset = [
  {
    name: "label",
    type: "string",
    default: "undefined",
    desc: "Sets the text in the label tag for the dropdown.",
  },
  {
    name: "options",
    type: "list",
    default: "undefined",
    required: true,
    desc: "List of options to display in the dropdown. Each option should be an object with a text and value property.",
  },
  {
    name: "labelClassName",
    type: "string",
    default: "undefined",
    desc: "Appends to the label css class.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Appends to the dropdown css class.",
  },
  {
    name: "onChange",
    type: "function",
    default: "undefined",
    desc: "Function to call when the dropdown value changes.",
  },
  {
    name: "<select> attributes",
    type: "passthrough",
    default: "undefined",
    desc: "Any additional props will be passed through to the <select> tag as attributes.",
  },
];

const exampleOptions = [
  { text: "Select Option...", value: null },
  { text: "Option 1", value: "option1" },
  { text: "Option 2", value: "option2" },
  { text: "Option 3", value: "option3" },
];

function DropdownDocs() {
  const [selectedOption, setSelectedOption] = useState("option1");
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Dropdown">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Use the Dropdown component to organize your menu items. You can pass
            any of the normal props that you could to the normal HTML{" "}
            {"<select>"} tag. Then pass an Array of objects to the options prop.
            Each object should have a text and value property.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-w-[50%]">
            <Dropdown
              className={"gw-w-5/6 gw-m-auto"}
              value={selectedOption}
              onChange={(e) => {
                alert("You selected: " + e.target.value);
                setSelectedOption(e.target.value);
              }}
              options={exampleOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="gw-pl-2"
                >
                  {option.text}
                </option>
              ))}
            />
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Dropdown } from "@usace/groundwork";
  
  function Component() {
    const exampleOptions = [
        { text: "Select Option...", value: null },
        { text: "Option 1", value: "option1" },
        { text: "Option 2", value: "option2" },
        { text: "Option 3", value: "option3" },
    ];
    return (
     <div className="w-[50%]">
        <Dropdown
            className={"w-5/6 m-auto"}
            value={exampleOptions}
            onChange={(e) => {
                alert("You selected: " + e.target.value);
            }}
            options={
                exampleOptions.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        className="pl-2"
                    >
                    {option.text}
                </option>
            ))}
        />
    </div>
    )
  }
  
  export default Component;
  `}
        />
        <Divider text="Controlling Dropdown State" />
        <Text>
          If you want to control the state of the dropdown, you can pass a value
          prop to the Dropdown component. This will override the internal state
          management and allow you to control the selected value externally.
        </Text>
        <Badge color="blue" className="gw-my-2">
          If you pass a value prop, you must also handle the onChange.
        </Badge>
        <Badge color="yellow" className="gw-my-2 gw-ms-2">
          The string in the useState is your default value and must be a valid
          value from your options list.
        </Badge>
        <CodeExample
          code={`import { Dropdown } from "@usace/groundwork";
function Component() {
    const [selectedOption, setSelectedOption] = useState("option1"); 
    const exampleOptions = [
        { text: "Select Option...", value: null },
        { text: "Option 1", value: "option1" },
        { text: "Option 2", value: "option2" },
        { text: "Option 3", value: "option3" },
    ];
    return (
        <div className="gw-w-[50%]">
            <Dropdown
                className={"gw-w-5/6 gw-m-auto"}
                value={selectedOption}
                onChange={(e) => {
                    setSelectedOption(e.target.value);
                }}
                options={
                    exampleOptions.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            className="gw-pl-2"
                        >
                            {option.text}
                        </option>
                    ))
                }
            />
        </div>
    );
}
export default Component;`}
        />

        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Dropdown />`}</Code>
        </div>
        <PropsTable propsList={componentProps_Fieldset} />
      </UsaceBox>
    </DocsPage>
  );
}

export default DropdownDocs;
export { DropdownDocs };
