import { UsaceBox, Code, Button, Text, H3 } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Buttons",
    href: "/docs/buttons",
  },
];

const componentProps = [
  {
    name: "type",
    type: "string",
    default: "'button'",
    desc: "The html button type to use.",
  },
  {
    name: "color",
    type: "string",
    default: "'dark/zinc'",
    desc: "The solid color variant to use.",
  },
  {
    name: "outline",
    type: "boolean",
    default: "false",
    desc: "Render a button with an outline but no background.",
  },
  {
    name: "plain",
    type: "boolean",
    default: "false",
    desc: "Render a plain button with no background or outline.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    desc: "Disable the button.",
  },
  {
    name: "onClick",
    type: "function",
    default: "undefined",
    desc: "Handler that will fire on the click event, all other basic React event handlers are available as well.",
  },
];

function ButtonsDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Buttons">
        {/* Description of the component and what problem it solves */}
        <div className="pb-6">
          <Text>
            The Button component can be used to render a basic button with
            pre-defined styles. For more advanced configurations it's
            recommended that you implement your own button using the{" "}
            <Code>{"<button>"}</Code> primitive component.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="pt-6 pb-3">Basic Usage</H3>
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          <div className="flex flex-row flex-wrap gap-3">
            <Button>Default</Button>
            <Button outline>Outlined</Button>
            <Button plain>Plain</Button>
            <Button disabled>Disabled</Button>
            <Button href="/docs/buttons">As a Link</Button>
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Button } from "@usace/groundwork";

function Component() {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      <Button>Default</Button>
      <Button outline>Outlined</Button>
      <Button plain>Plain</Button>
      <Button disabled>Disabled</Button>
      <Button href="/docs/buttons">As a Link</Button>
    </div>
  )
}

export default Component;
`}
        />
        {/* Example usage - remove if not needed */}
        <H3 className="pt-6 pb-3">Built-in Color Options</H3>
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          <div className="flex flex-row flex-wrap gap-3">
            {[
              "dark/zinc",
              "light",
              "dark/white",
              "dark",
              "white",
              "zinc",
              "indigo",
              "cyan",
              "red",
              "orange",
              "amber",
              "yellow",
              "lime",
              "green",
              "emerald",
              "teal",
              "sky",
              "blue",
              "violet",
              "purple",
              "fuchsia",
              "pink",
              "rose",
            ].map((clr) => {
              return (
                <Button key={clr} color={clr}>
                  {clr}
                </Button>
              );
            })}
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Button } from "@usace/groundwork";

function Component() {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {colors.map((clr) => {
        return (
          <Button key={clr} color={clr}>
            {clr}
          </Button>
        );
      })}
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

export default ButtonsDocs;
export { ButtonsDocs };
