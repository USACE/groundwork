import { UsaceBox, H3, Code, Text, Sidebar } from "../../../../lib";
import CopyButton from "../../../app-components/copy-button";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

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
    text: "Sidebar",
    href: "/docs/navigation/sidebar",
  },
];
const componentProps = [
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
        desc: "An array of objects to be used as links in the header. Each object should have an id, text, and href.",
      }
];

function Breadcrumbs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Breadcrumbs">
        <Text className="gw-pb-6">
          Use Sidebar to provide additional navigation within a given page. This
          will create a navigable side menu that users can use in addition to
          the header.
        </Text>

        <div className="gw-flex gw-justify-start gw-content-center gw-gap-4">
          <Code className="gw-p-1 gw-px-2">{`import { Sidebar } from "@usace/groundwork";`}</Code>
          <CopyButton text={`import { Sidebar } from "@usace/groundwork";`} />
        </div>

        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3"></div>
        <div>
          <CodeExample
            code={`import { UsaceBox, Sidebar } from "@usace/groundwork";
import sidebarLinks from "./sidebarLinks";
<Container fluid>
    <div className="gw-grid gw-grid-cols-12 gw-gap-6">
        <div className="gw-hidden md:gw-block md:gw-col-span-2">
            <Sidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="gw-col-span-12 md:gw-col-span-10">
            <UsaceBox title="Sidebar Example">
                Hello World
            </UsaceBox>
        </div>
    </div>
</Container>`}
          />
        </div>

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Sidebar />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default Breadcrumbs;
export { Breadcrumbs };
