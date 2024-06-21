import { UsaceBox, Code, Text } from "../../../../lib";
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
  {
    name: "sidebar",
    type: `[
  {
    id: string,
    text: string,
    href: string
  }
]`,
    default: "null",
    desc: "If a list is provided the container will have a sidebar with the list of links.",
  },
  {
    name: "breadcrumbs",
    type: `[
  {
    text: string,
    href: string
  }
]`,
    default: "null",
    desc: "If a list is provided the container will create breadcrumbs with the trail of links.",
  },
];

function ContainerDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Container (No Sidebar or Breadcrumbs)">
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

      <UsaceBox title="Container (Sidebar with Breadcrumbs)">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            You can optionally specify sidebar, breadcrumbs, or both. This is in
            addition to the options in the previous example.
          </Text>
        </div>
        {/* Example usage */}
        <CodeExample
          ignoreComments={true}
          code={`import { Container } from "@usace/groundwork";
// Where sidebarLinks and breadcrumbLinks are .js files with the following:
import sidebarLinks from "./sidebar-links";
// format for either file:
// export default [
//   {
//     id: "link-1",
//     text: "Link 1",
//     href: "/link-1"
//   }, 
//  ]

import breadcrumbLinks from "./breadcrumb-links";
// format for breadcrumb-links.js
// export default [
//   {
//     text: "Documentation",
//     href: "/docs"
//   },
// ]

function MyComponent() {
  return (
    <Container sidebar={sidebarLinks} breadcrumbs={breadcrumbLinks}>
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
        <Code className="gw-p-2">{`<SiteWrapper fluid sidebar={sidebarLinks} breadcrumbs={breadcrumbLinks} />`}</Code>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default ContainerDocs;
export { ContainerDocs };
