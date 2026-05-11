import { UsaceBox, Code, Text } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const BASE_URL = import.meta.env.BASE_URL;

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: `${BASE_URL}#/docs`,
  },
  {
    text: "Layout",
    href: `${BASE_URL}#/docs/layout`,
  },
  {
    text: "Container",
    href: `${BASE_URL}#/docs/layout/container`,
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
        <div className="gw-pb-6">
          <Text>
            Use Container to add a section to your page with padding and a max
            with that keeps content within a readable width on users screens, or
            if you want full width all the time, you can set fluid == true.
          </Text>
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
      </UsaceBox>

      <UsaceBox title={<div>Component API</div>}>
        {/* Component props documentation */}
        <Code className="gw-p-2">{`<SiteWrapper fluid />`}</Code>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default ContainerDocs;
export { ContainerDocs };
