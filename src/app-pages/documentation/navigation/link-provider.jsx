import { UsaceBox, H3, Code, Text } from "../../../../lib";
import CopyButton from "../../../app-components/copy-button";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Navigation",
    href: "/#/docs/navigation",
  },
  {
    text: "Link Provider",
    href: "/#/docs/navigation/link-provider",
  },
];
const componentProps = [
  {
    name: "component",
    type: "Component",
    default: "<a>",
    desc: "The external library component that will be used for links, e.g. <Link> from React Router.",
  },
  {
    name: "hrefMap",
    type: "string",
    default: "href",
    desc: "The property of the external component that maps to href, e.g. 'to' for React Router.",
  },
];

function LinkProviderDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Link Provider">
        <Text className="gw-pb-6">
          Use the Link Provider to inject link components from other client-side
          routing libraries into Groundwork.
        </Text>
        <Text className="gw-pb-6">
          By default, Groundwork assumes the use of standard{" "}
          {<Code>{"<a>"}</Code>} elements to represent all links, including
          internal routes. The default recommendation is to handle internal
          routing using redux-bundler and internal-nav-helper.
        </Text>
        <Text className="gw-pb-6">
          The Link Provider utility component allows the user to utilize other
          popular client-side routing libraries such as React Router, TanStack
          Router, or Wouter by injecting their provided link components into
          Groundwork. Components that expose internal links such as Sidebar and
          Site Wrapper will then utilize the provided link component rather than
          a standard {<Code>{"<a>"}</Code>} element, allowing control by the
          external library.
        </Text>

        <div className="gw-flex gw:justify-start gw:content-center gw:gap-4">
          <Code className="gw-p-1 gw:px-2">{`import { LinkProvider } from "@usace/groundwork";`}</Code>
          <CopyButton
            text={`import { LinkProvider } from "@usace/groundwork";`}
          />
        </div>

        <H3 className="gw-pt-6 gw:pb-3">Link Provider for React Router</H3>
        <Text className="gw-italic">client-router.jsx</Text>
        <div>
          <CodeExample
            code={`import { LinkProvider } from "@usace/groundwork";
import { Link } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "locations", element: <LocationsSummary /> },
        {
          path: "locations/:location",
          element: <LocationDetail />,
        },
      ],
    },
  ],
);

function ClientRouter() {
    <LinkProvider component={Link} hrefMap="to">
      <RouterProvider router={router} />
    </LinkProvider>
}

export default ClientRouter;`}
          />
          <br />
          <Text className="gw-italic">main.jsx</Text>
          <CodeExample
            code={`import React from "react";
import ReactDOM from "react-dom/client";
import ClientRouter from "client-router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClientRouter />
  </React.StrictMode>
);`}
          />
        </div>

        <div className="gw-font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw-p-2">{`<LinkProvider />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default LinkProviderDocs;
export { LinkProviderDocs };
