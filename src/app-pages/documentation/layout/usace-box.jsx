import { UsaceBox, Code, Text } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Layout",
    href: "/#/docs/layout",
  },
  {
    text: "USACE Box",
    href: "/#/docs/layout/usace-box",
  },
];

const componentProps = [
  {
    name: "title",
    type: "string",
    default: "''",
    desc: "The title to display at the top of the box.",
  },
  {
    name: "customTitle",
    type: "component",
    default: "undefined",
    desc: "Custom component to use as the title portion of the box.",
  },
];

function UsaceBoxDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="USACE Box">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Simple wrapper that adds the theme header with the gray box and red
            highlight.
          </Text>
        </div>
        {/* Example usage */}
        <div className="gw-rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          <UsaceBox title="Example">
            <Text>Some sample content here</Text>
          </UsaceBox>
        </div>
        <CodeExample
          code={`import { UsaceBox, Text } from "@usace/groundwork";

function Component() {
  return (
    <UsaceBox title="Example">
      <Text>Some sample content here</Text>
    </UsaceBox>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw-p-2">{`<SiteWrapper />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default UsaceBoxDocs;
export { UsaceBoxDocs };
