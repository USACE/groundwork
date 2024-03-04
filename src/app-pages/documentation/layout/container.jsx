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
    text: "Container",
    href: "/docs/layout/container",
  },
];

const componentProps = [
  {
    name: "fluid",
    type: "boolean",
    default: "false",
    desc: "If true, the container will be full width. If false, the container will have a max width of 1140px.",
  },
];

function ContainerDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Container">
        {/* Description of the component and what problem it solves */}
        <div className="pb-6">
          <p>
            Use Container to add a section to your page with padding and a max
            with that keeps content within a readable width on users screens, or
            if you want full width all the time, you can set fluid == true.
          </p>
        </div>
        {/* Example usage */}
        <CodeExample
          code={`import { Container } from "@usace/groundwork";

function MyComponent() {
  return (
    <Container>
      <div>{content}</div>
    </Container>
  )
}

export default MyComponent;
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

export default ContainerDocs;
export { ContainerDocs };
