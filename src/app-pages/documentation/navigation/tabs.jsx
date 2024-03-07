import { UsaceBox, Code, Text, Tabs, Badge, H3 } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import { VscCloudDownload, VscMail, VscSettingsGear } from "react-icons/vsc";

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
    text: "Tabs",
    href: "/docs/navigation/tabs",
  },
];

const componentProps = [
  {
    name: "tabs",
    type: "array[Tab]",
    default: "[]",
    desc: "An array of tabs to display. These are objects with the following properties: name, content, justify, leftSection, rightSection and are documented in the Tab type.",
  },
  {
    name: "fill",
    type: "boolean",
    default: "false",
    desc: "If true, the tabs will expand to fill the width of their container.",
  },
];

function TabsDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Tabs">
        {/* Description of the component and what problem it solves */}
        <div className="pb-6">
          <Text>
            Tabs can be used to display multiple sub-pages on the same page.
            Using tabs lets you divide up your content so that it is more easily
            navigated by the user.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="pb-3">Basic Usage</H3>
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          <Tabs
            tabs={[
              {
                name: "Downloads",
                content: "Download list goes here",
              },
              {
                name: "Messages",
                content: "Messages, how many are unread though?",
              },
              {
                name: "Settings",
                content: "Some special settings here",
              },
            ]}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Tabs } from "@usace/groundwork";

function Component() {
  return (
    <Tabs
      tabs={[
        {
          name: "Downloads",
          content: "Download list goes here",
        },
        {
          name: "Messages",
          content: "Messages, how many are unread though?",
        },
        {
          name: "Settings",
          content: "Some special settings here",
        },
      ]}
    />
  )
}

export default Component;
`}
        />

        {/* Example usage - remove if not needed */}
        <H3 className="mt-6 pb-3">Full Width Tabs</H3>
        <Text>
          Add the fill prop to make the tabs expand to the full width of their
          container.
        </Text>
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          <Tabs
            fill
            tabs={[
              {
                name: "Downloads",
                content: "Download list goes here",
              },
              {
                name: "Messages",
                content: "Messages, how many are unread though?",
              },
              {
                name: "Settings",
                content: "Some special settings here",
              },
            ]}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Tabs } from "@usace/groundwork";

function Component() {
  return (
    <Tabs
      fill
      tabs={[
        {
          name: "Downloads",
          content: "Download list goes here",
        },
        {
          name: "Messages",
          content: "Messages, how many are unread though?",
        },
        {
          name: "Settings",
          content: "Some special settings here",
        },
      ]}
    />
  )
}

export default Component;
`}
        />

        {/* Example usage - remove if not needed */}
        <H3 className="mt-6 pb-3">More Advanced Usage</H3>
        <Text>
          Add Icons or alerts to tabs, and change the justification to meet your
          needs.
        </Text>
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          <Tabs
            fill
            tabs={[
              {
                name: "Downloads",
                justify: "space-between",
                content: "Download list goes here",
                leftSection: <VscCloudDownload />,
                rightSection: <span></span>,
              },
              {
                name: "Messages",
                content: "Messages, Now including unread count!",
                leftSection: <VscMail />,
                rightSection: <Badge color="red">3</Badge>,
              },
              {
                name: "Settings",
                justify: "space-between",
                content: "Some special settings here",
                rightSection: <VscSettingsGear />,
              },
            ]}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Tabs } from "@usace/groundwork";

function Component() {
  return (
    <Tabs
      fill
      tabs={[
        {
          name: "Downloads",
          justify: "space-between",
          content: "Download list goes here",
          leftSection: <VscCloudDownload />,
          rightSection: <span></span>,
        },
        {
          name: "Messages",
          content: "Messages, Now including unread count!",
          leftSection: <VscMail />,
          rightSection: <Badge color="red">3</Badge>,
        },
        {
          name: "Settings",
          justify: "space-between",
          content: "Some special settings here",
          rightSection: <VscSettingsGear />,
        },
      ]}
    />
  )
}

export default Component;
`}
        />

        {/* Component props documentation */}
        <div className="font-bold text-lg pt-6">
          Component API - <Code className="p-2">{`<Tabs />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default TabsDocs;
export { TabsDocs };
