import { UsaceBox, Code } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Layout",
    href: "/docs/layout",
  },
  {
    text: "USACE Box",
    href: "/docs/layout/usace-box",
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
        <div className="pb-6">
          <p>
            Simple wrapper that adds the theme header with the gray box and red
            highlight.
          </p>
        </div>
        {/* Example usage */}
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          <UsaceBox title="Example">Some sample content here</UsaceBox>
        </div>
        <CodeExample
          code={`import { UsaceBox } from "@usace/groundwork";

function Component() {
  return (
    <UsaceBox title="Example">
      Some sample content here
    </UsaceBox>
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

export default UsaceBoxDocs;
export { UsaceBoxDocs };
