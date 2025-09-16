import { UsaceBox, Code, Text, TextLink, Strong } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Display",
    href: "/#/docs/display",
  },
  {
    text: "Text",
    href: "/#/docs/display/Text",
  },
];

const componentProps_Text = [
  {
    name: "className",
    type: "string",
    default: "''",
    desc: "Additional classes to add to the component.",
  },
  {
    name: "...props",
    type: "misc",
    default: "undefined",
    desc: "Additional props to pass to the component.",
  },
];

const componentProps_Strong = [
  {
    name: "className",
    type: "string",
    default: "''",
    desc: "Additional classes to add to the component.",
  },
  {
    name: "...props",
    type: "misc",
    default: "undefined",
    desc: "Additional props to pass to the component.",
  },
];

const componentProps_TextLink = [
  {
    name: "className",
    type: "string",
    default: "''",
    desc: "Additional classes to add to the component.",
  },
  {
    name: "href",
    type: "string",
    default: "undefined",
    desc: "The URL to link to.",
  },
  {
    name: "...props",
    type: "misc",
    default: "undefined",
    desc: "Additional props to pass to the component.",
  },
];

function TextDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Text">
        {/* Description of the component and what problem it solves */}
        <Text className="gw-pb-6">
          The Text and associated components are used to provide a consistent
          style to the typography of the sites. The TextLink and Strong
          components are meant to be used within the Text component to provide
          additional formatting.
        </Text>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <Text>
            These components provide some simple out-of-the-box formatting, we
            can use them to <Strong>Emphasize a message</Strong> or{" "}
            <TextLink href="#">Link</TextLink> to other resources.
          </Text>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Strong, Text, TextLink } from "@usace/groundwork";

function Component() {
  return (
    <Text>
      These components provide some simple out-of-the-box formatting, we
      can use them to <Strong>Emphasize a message</Strong> or{" "}
      <TextLink href="#">Link</TextLink> to other resources.
    </Text>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Text />`}</Code>
        </div>
        <PropsTable propsList={componentProps_Text} />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Strong />`}</Code>
        </div>
        <PropsTable propsList={componentProps_Strong} />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<TextLink />`}</Code>
        </div>
        <PropsTable propsList={componentProps_TextLink} />
      </UsaceBox>
    </DocsPage>
  );
}

export default TextDocs;
export { TextDocs };
