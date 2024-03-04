import { UsaceBox, Code } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
];

const componentProps = [
  {
    name: "headerLinks",
    type: "array[Link]",
    default: "[]",
    desc: "An array of objects to be used as links in the header. Each object should have an id, text, and href property. If you would like a drop-down of links include a children property which is an array of link objects to the top level link.",
  },
];

function Docs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Site Wrapper">
        {/* Description of the component and what problem it solves */}
        <div className="pb-6">
          <p>Description of component</p>
          <p className="pt-3">Description continued</p>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="rounded-md border border-dashed px-6 py-3 mb-3"></div>
        {/* Example code */}
        <CodeExample
          code={`import {  } from "@usace/groundwork";

function Component() {
  return ()
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

export default Docs;
export { Docs };
