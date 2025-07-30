import { UsaceBox, Code, Button, Text, H3 } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Buttons",
    href: "/#/docs/buttons",
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
    default: "'primary'",
    desc: "The color variant to use.",
  },
  {
    name: "style",
    type: "string",
    default: "'filled'",
    desc: "The style variant to use. Options: 'filled', 'outline', 'plain'.",
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
  {
    name: "size",
    type: "string",
    default: "'md'",
    desc: "The size variant to use. Options: 'xs', 'sm', 'md', 'lg', 'xl'.",
  },
  {
    name: "radius",
    type: "string",
    default: "'md'",
    desc: "The radius variant to use. Options: 'none', 'sm', 'md', 'lg', 'xl'.",
  },
  {
    name: "href",
    type: "string",
    default: "undefined",
    desc: "Add a url to render the button as a link.",
  },
];

const colors = [
  "light",
  "dark",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
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
];

function GenericButtonsDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Generic Buttons">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The Button component can be used to render a basic button with
            pre-defined styles. For more advanced configurations it's
            recommended that you implement your own button using the{" "}
            <Code>{"<button>"}</Code> primitive component.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-flex gw-flex-row gw-flex-wrap gw-gap-3">
            <Button>Default</Button>
            <Button style="outline">Outlined</Button>
            <Button style="plain">Plain</Button>
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
      <Button style="outline">Outlined</Button>
      <Button style="plain">Plain</Button>
      <Button disabled>Disabled</Button>
      <Button href="/docs/buttons">As a Link</Button>
    </div>
  )
}

export default Component;
`}
        />
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Built-in Color Options - Filled</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-flex gw-flex-row gw-flex-wrap gw-gap-3">
            {colors.map((clr) => {
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

const colors = [...];

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

        <H3 className="gw-pt-6 gw-pb-3">Built-in Color Options - Outline</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-flex gw-flex-row gw-flex-wrap gw-gap-3">
            {colors.map((clr) => {
              return (
                <Button key={clr} style="outline" color={clr}>
                  {clr}
                </Button>
              );
            })}
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Button } from "@usace/groundwork";

const colors = [...];

function Component() {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {colors.map((clr) => {
        return (
          <Button key={clr} style="outline" color={clr}>
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

        <H3 className="gw-pt-6 gw-pb-3">Built-in Color Options - Plain</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-flex gw-flex-row gw-flex-wrap gw-gap-3">
            {colors.map((clr) => {
              return (
                <Button key={clr} style="plain" color={clr}>
                  {clr}
                </Button>
              );
            })}
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Button } from "@usace/groundwork";

const colors = [...];

function Component() {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {colors.map((clr) => {
        return (
          <Button key={clr} style="plain" color={clr}>
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

        <H3 className="gw-pt-6 gw-pb-3">Built-in Size Options</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="">
            {["xs", "sm", "md", "lg", "xl"].map((size) => {
              return (
                <Button key={size} size={size} className="gw-mr-3">
                  {size}
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
      {["xs", "sm", "md", "lg", "xl"].map((size) => {
        return (
          <Button key={size} size={size} className="mr-3">
            {size}
          </Button>
        );
      })}
    </div>
  )
}

export default Component;
`}
        />

        <H3 className="gw-pt-6 gw-pb-3">Built-in Radius Options</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="">
            {["none", "sm", "md", "lg", "xl"].map((size) => {
              return (
                <Button key={size} radius={size} className="gw-mr-3">
                  {size}
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
      {["none", "sm", "md", "lg", "xl"].map((size) => {
        return (
          <Button key={size} radius={size} className="mr-3">
            {size}
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
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<SiteWrapper />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default GenericButtonsDocs;
export { GenericButtonsDocs };
