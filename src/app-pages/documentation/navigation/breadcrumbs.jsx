import {
  Breadcrumbs as BC,
  BreadcrumbItem,
  UsaceBox,
  H3,
  Code,
  Text,
} from "../../../../lib";
import CopyButton from "../../../app-components/copy-button";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const breadcrumbsPropsData = [
  {
    name: "className",
    type: "string",
    default: "''",
    desc: "Additional css classes to add to the breadcrumbs.",
  },
];

const breadcrumbItemPropsData = [
  {
    name: "className",
    type: "string",
    default: "''",
    desc: "Additional css classes to add to the breadcrumb item.",
  },
  {
    name: "href",
    type: "string",
    default: "''",
    desc: "The URL of the breadcrumb item.",
  },
  {
    name: "text",
    type: "string",
    default: "''",
    desc: "The text of the breadcrumb item.",
  },
];

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Navigation",
    href: "/docs/navigation",
  },
  {
    text: "Breadcrumbs",
    href: "/docs/navigation/breadcrumbs",
  },
];

function Breadcrumbs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Breadcrumbs">
        <Text className="gw-pb-6">
          Use breadcrumbs to indicate the current page’s location within a
          hierarchy. Breadcrumbs are typically placed at the top of a page. They
          are links and should be used to help users navigate through the site.
          Breadcrumbs are not a replacement for the browser’s back button. They
          are a supplemental navigation aid.
        </Text>

        <div className="gw-flex gw-justify-start gw-content-center gw-gap-4">
          <Code className="gw-p-1 gw-px-2">{`import { Breadcrumbs, BreadcrumbItem } from "@usace/groundwork";`}</Code>
          <CopyButton
            text={`import { Breadcrumbs, BreadcrumbItem } from "@usace/groundwork";`}
          />
        </div>

        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <BC>
            <BreadcrumbItem href="/docs" text="Documentation" />
            <BreadcrumbItem href="/docs/navigation" text="Navigation" />
            <BreadcrumbItem
              href="/docs/navigation/breadcrumbs"
              text="Breadcrumbs"
            />
          </BC>
        </div>
        <div>
          <CodeExample
            code={`<Breadcrumbs>
  <BreadcrumbItem href="/docs" text="Documentation" />
  <BreadcrumbItem href="/docs/navigation" text="Navigation" />
  <BreadcrumbItem href="/docs/navigation/breadcrumbs" text="Breadcrumbs" />
</Breadcrumbs>
`}
          />
        </div>

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Breadcrumbs />`}</Code>
        </div>
        <PropsTable propsList={breadcrumbsPropsData} />

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<BreadcrumbItem />`}</Code>
        </div>
        <PropsTable propsList={breadcrumbItemPropsData} />
      </UsaceBox>
    </DocsPage>
  );
}

export default Breadcrumbs;
export { Breadcrumbs };
