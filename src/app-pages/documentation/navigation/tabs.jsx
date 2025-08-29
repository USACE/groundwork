import { UsaceBox, Code, Text, Tabs, Badge, H3 } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import { VscCloudDownload, VscMail, VscSettingsGear } from "react-icons/vsc";

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
    text: "Tabs",
    href: "/#/docs/navigation/tabs",
  },
];

const componentProps = [
  {
    name: "tabs",
    type: "array[Tab]",
    default: "[]",
    desc: "An array of tabs to display. These are objects with the following properties: name, content, justify, leftSection, rightSection, onClick and are documented in the Tab type.",
  },
  {
    name: "fill",
    type: "boolean",
    default: "false",
    desc: "If true, the tabs will expand to fill the width of their container.",
  },
  {
    name: "defaultIndex",
    type: "number",
    default: "0",
    desc: "The index of the tab that should be active by default when the Tabs component renders.",
  },
];

function TabsDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Tabs">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Tabs can be used to display multiple sub-pages on the same page.
            Using tabs lets you divide up your content so that it is more easily
            navigated by the user.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
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
        <H3 className="gw-mt-6 gw:pb-3">Full Width Tabs</H3>
        <Text>
          Add the fill prop to make the tabs expand to the full width of their
          container.
        </Text>
        <div className="gw-rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          <Tabs
            fill
            defaultIndex={1}
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
      defaultIndex={1}
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
        <H3 className="gw-mt-6 gw:pb-3">More Advanced Usage</H3>
        <Text>
          Add Icons or alerts to tabs, and change the justification to meet your
          needs, and use the click handler to execute arbitrary code on when a
          user clicks a tab, but use it carefully.
        </Text>
        <div className="gw-rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
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
                onClick: (e) => {
                  window.alert(`You clicked me! Tab:${e.target.innerText}`);
                },
              },
            ]}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Badge, Tabs } from "@usace/groundwork";
import { VscCloudDownload, VscMail, VscSettingsGear } from "react-icons/vsc";

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
          onClick: (e) => {
            window.alert(\`You clicked me! Tab:\${e.target.innerText}\`);
          },
        },
      ]}
    />
  )
}

export default Component;
`}
        />

        {/* Component props documentation */}
        <div className="gw-font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw-p-2">{`<Tabs />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default TabsDocs;
export { TabsDocs };
