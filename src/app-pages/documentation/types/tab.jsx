import { UsaceBox, Text, Code } from "../../../../lib";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const tabProps = [
  {
    name: "name",
    type: "string",
    default: "''",
    desc: "The primary text that will be displayed in the tab.",
  },
  {
    name: "justify",
    type: "string, one of: 'center', 'space-between'",
    default: "center",
    desc: "The justification of the text in the tab. If 'space-between', then justify: space-between will be applied to the tab, spacing out the left section, main text and right section.",
  },
  {
    name: "leftSection",
    type: "component or string",
    default: "null",
    desc: "A component to be displayed to the left of the main text in the tab.",
  },
  {
    name: "rightSection",
    type: "component or string",
    default: "null",
    desc: "A component to be displayed to the right of the main text in the tab.",
  },
  {
    name: "content",
    type: "component",
    default: "null",
    desc: "The content to be displayed when the tab is selected.",
  },
  {
    name: "onClick",
    type: "function",
    default: "undefined",
    desc: "A click handler that will be attached to the tab, it will be fired just prior to the tab content being rendered",
  },
];

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Types",
    href: "/#/docs/types",
  },
  {
    text: "Tab",
    href: "/#/docs/types/tab",
  },
];

function TabDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Tab">
        <Text className="gw-pb-6">
          The Tab type is used to define the objects to be used in the tabs
          array of the Tabs component. It defines what is displayed in the tab
          component and the content that will be displayed when the tab is
          selected.
        </Text>

        <div className="gw-font-bold gw:text-lg gw:pt-6">
          Object - <Code className="gw-p-2">{`tab`}</Code>
        </div>
        <PropsTable propsList={tabProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default TabDocs;
export { TabDocs };
