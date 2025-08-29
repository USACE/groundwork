import { UsaceBox, Code, Skeleton, Text } from "../../../../lib";
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
    text: "Skeleton",
    href: "/#/docs/display/skeleton",
  },
];

const componentProps = [
  {
    name: "type",
    type: "string",
    default: "'value'",
    desc: "A base size for the Skeleton.  Options: 'card', 'value'.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to add to the skeleton.",
  },
];

function SkeletonDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Skeleton">
        {/* Description of the component and what problem it solves */}
        <div className="gw:pb-6">
          <Text>
            The Skeleton component can be used as a placeholder to indicate that
            data is being loaded through an asynchronous request (e.g. a data
            hook) but is not yet ready for display.
          </Text>
          <Text className="gw:pt-3">
            Typically, the Skeleton should roughly approximate the size of the
            anticipated data. This allows asynchronous data to fill in
            gracefully rather than causing drastic layout changes as data
            arrives.
          </Text>
          <Text className="gw:pt-3">
            Some basic size types are included, but the component can be further
            customized as needed through the className property.
          </Text>
        </div>
        {/* Example usage */}
        <div className="gw:rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          <Skeleton type="card" />
          <br />
          <Skeleton type="value" />
        </div>
        <CodeExample
          code={`import { Skeleton } from "@usace/groundwork";

function Component() {
  return (
    <Skeleton type="card" />
    <br />
    <Skeleton type="value" />
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw:font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw:p-2">{`<Skeleton />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default SkeletonDocs;
export { SkeletonDocs };
