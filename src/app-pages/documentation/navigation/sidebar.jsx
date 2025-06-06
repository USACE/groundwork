import { UsaceBox, H3, Code, Text, Sidebar, Badge } from "../../../../lib";
import CopyButton from "../../../app-components/copy-button";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import examplePopoutLinks from "../../../example-popout-links";
import exampleRegularLinks from "../../../example-regular-links";

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
    name: "title",
    type: "string",
    default: "Contents",
    desc: "Optional, the title of the sidebar.",
  },
  {
    name: "selectedPath",
    type: "string",
    default: "null",
    desc: "The path of the currently selected page, if it matches the href of a link, that link will be highlighted.",
  },
  {
    name: "sidebarLinks",
    type: `[
      {
        id: string,
        text: string,
        href: string,
        children: [
            id: string,
            text: string,
            href: string,
            children: [ 
                id: string,
                text: string,
                href: string
            ]
        ]
      }
    ]`,
    default: "null",
    desc: "An array of objects to be used as links in the header. Each object should have an id, text, and href. Setting the href to null will create a disabled link. Optionally add a prop of 'target'='_blank' to open the link in a new tab.",
  },
  {
    name: "id",
    type: "string",
    default: "null",
    desc: "Sets the id attribute of the sidebar container. Useful for targeting with JavaScript and/or CSS.",
  },
  {
    name: "enablePopout",
    type: "boolean",
    default: "false",
  },
  {
    name: "popoutDirection",
    type: "string",
    default: "right",
    desc: "The direction to open the popout menu. Options are 'right', 'left', 'top', and 'bottom'.",
  },
  {
    name: "onChange",
    type: "Event handler",
    default: "null",
    desc: "Function to be called when the selected path changes. The function will be called with the new path as an argument.",
  },
  {
    name: "maxScrollHeight",
    type: "string",
    default: "50vh",
    desc: "Set the max height the scrollbar should go to. If the list of links exceeds this height a scrollbar will appear. Accepts any valid CSS string.",
  },
];

function SidebarDocs() {
  const currentPath = document.location.pathname;

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Sidebar">
        <Text className="gw-pb-6">
          Use Sidebar to provide additional navigation within a given page. This
          will create a navigable side menu that users can use in addition to
          the header.
        </Text>

        <div className="gw-flex gw-justify-start gw-content-center gw-gap-4">
          <Code className="gw-p-1 gw-px-2">{`import { Sidebar } from "@usace/groundwork";`}</Code>
          <CopyButton text={`import { Sidebar } from "@usace/groundwork";`} />
        </div>

        <Badge color="yellow" className="gw-my-3">
          NOTE: Sidebar is click to use. Specifying children will provide a
          clickable menu with the first item in that menu being the root link.
        </Badge>
        <H3 className="gw-pt-6 gw-pb-3">Sidebar (With Popout Menu)</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="md:gw-grid gw-grid-cols-12 gw-gap-6">
            <div className="md:gw-block md:gw-col-span-2">
              <Sidebar
                title="Contents"
                selectedPath={currentPath}
                sidebarLinks={examplePopoutLinks}
                enablePopout={true}
                popoutDirection="right"
              />
            </div>
            <div className="gw-col-span-12 md:gw-col-span-10">
              Your Main Page Content Here!
            </div>
          </div>
        </div>
        <Badge color="yellow" className="gw-my-2">
          NOTE: If you want your home page to have a sidebar, use the{" "}
          {"<Container>"}. <b>Otherwise</b> leave it out.
        </Badge>
        <div>
          <CodeExample
            code={`import { UsaceBox, Sidebar } from "@usace/groundwork";
import { useConnect } from "redux-bundler-hook";
import examplePopoutLinks from "./examplePopoutLinks";
const currentPath = document.location.pathname;

function Component() {
    <Container>
        <div className="md:grid grid-cols-12 gap-6">
            <div className="md:block md:col-span-2">
              <Sidebar
                title="Contents"
                selectedPath={currentPath}
                sidebarLinks={examplePopoutLinks}
                enablePopout={true}
                popoutDirection="right"
              />
            </div>
            <div className="col-span-12 md:col-span-10">
                Your Main Page Content Here!
            </div>
        </div>
    </Container>
}
export default Component;`}
          />
        </div>

        <H3 className="gw-pt-6 gw-pb-3">Sidebar (NO Popout Menu)</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="md:gw-grid gw-grid-cols-12 gw-gap-6">
            <div className="md:gw-block md:gw-col-span-2">
              <Sidebar
                title="Contents"
                selectedPath={currentPath}
                sidebarLinks={exampleRegularLinks}
              />
            </div>
            <div className="gw-col-span-12 md:gw-col-span-10">
              Your Main Page Content Here!
            </div>
          </div>
        </div>
        <Badge color="yellow" className="gw-my-2">
          NOTE: If you want your home page to have a sidebar, use the{" "}
          {"<Container>"}. <b>Otherwise</b> leave it out.
        </Badge>
        <div>
          <CodeExample
            code={`import { UsaceBox, Sidebar } from "@usace/groundwork";
import exampleRegularLinks from "./exampleRegularLinks";
const currentPath = document.location.pathname;

function Component() {
    <Container>
        <div className="md:grid grid-cols-12 gap-6">
            <div className="md:block md:col-span-2">
                <Sidebar 
                  title="Contents" 
                  selectedPath={currentPath}
                  sidebarLinks={exampleRegularLinks}
                />
            </div>
            <div className="col-span-12 md:col-span-10">
                Your Main Page Content Here!
            </div>
        </div>
    </Container>
}
export default Component;`}
          />
        </div>

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API -{" "}
          <Code className="gw-p-2">{`<Sidebar title={title} selectedPath={path} sidebarLinks={sidebarLinks} />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default SidebarDocs;
export { SidebarDocs };
