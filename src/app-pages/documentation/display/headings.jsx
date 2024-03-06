import { UsaceBox, Code, H1, H2, H3, H4 } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Display",
    href: "/docs/display",
  },
  {
    text: "Headings",
    href: "/docs/display/headings",
  },
];

const componentProps = [
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

function HeadingsDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Headings">
        {/* Description of the component and what problem it solves */}
        <div className="pb-6">
          <p>
            Headings are used to organize content on the page, use these
            components to get a consistent heading formatting throughout the
            sites.
          </p>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { H1, H2, H3, H4 } from "@usace/groundwork";

function Component() {
  return (
    <>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
    </>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="font-bold text-lg pt-6">
          Component API -{" "}
          <Code className="p-2">{`<H1 />, <H2 />, <H3 />, <H4 />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default HeadingsDocs;
export { HeadingsDocs };
