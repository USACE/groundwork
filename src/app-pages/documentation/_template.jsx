import { UsaceBox, Code, Text } from "../../../../lib";
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
    name: "",
    type: "",
    default: "",
    desc: "",
  },
];

function Docs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Site Wrapper">
        {/* Description of the component and what problem it solves */}
        <div className="pb-6">
          <Text>Description of component</Text>
          <Text className="pt-3">Description continued</Text>
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
