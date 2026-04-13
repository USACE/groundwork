import { UsaceBox, Code, Text, Divider } from "../../../../lib";
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
    text: "Display",
    href: `${BASE_URL}#/docs/display`,
  },
  {
    text: "Divider",
    href: `${BASE_URL}#/docs/display/divider`,
  },
];

const componentProps = [
  {
    name: "text",
    type: "string",
    default: "null",
    desc: "Optional text to display in the center of the divider.",
  },
  {
    name: "className",
    type: "string",
    default: "null",
    desc: "Optional class name to apply to the divider's outer most div.",
  },
  {
    name: "props",
    type: "object",
    default: "null",
    desc: "Additional props to apply to the outer most div. i.e. onClick/etc",
  },
];

function DividerDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Divider">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The <Code>{`<Divider />`}</Code> component is a simple component
            that creates a horizontal line with optional text in the center.
            This component is useful for separating content or sections of a
            page.
          </Text>
        </div>
        <Divider text="For Example" />
        {/* Example usage - remove if not needed */}
        <div className="gw-py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Divider text="OR" />
        <div className="gw-py-3">
          Sodales ut etiam sit amet nisl purus. Feugiat in ante metus dictum at
          tempor commodo ullamcorper a. Ultrices neque ornare aenean euismod
          elementum nisi quis. Quam lacus suspendisse faucibus interdum posuere
          lorem. Purus semper eget duis at. Eu tincidunt tortor aliquam nulla.
          Euismod lacinia at quis risus sed. Maecenas volutpat blandit aliquam
          etiam erat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.
          Et malesuada fames ac turpis egestas maecenas pharetra convallis.
          Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed
          velit.
        </div>
        <Text className="gw-text-center">Divider without text</Text>
        <Divider />
        {/* Example code */}
        <CodeExample
          code={`import { Divider, Text } from "@usace/groundwork";

function Example() {
  return (
    <div className="w-[50%]">
      <div className="py-3">
        Sodales ut etiam sit amet nisl purus. Feugiat in ante metus
        dictum at tempor commodo ullamcorper a. Ultrices neque ornare
        aenean euismod elementum nisi quis. Quam lacus suspendisse
        faucibus interdum posuere lorem. Purus semper eget duis at. Eu
        tincidunt tortor aliquam nulla. Euismod lacinia at quis risus
        sed. Maecenas volutpat blandit aliquam etiam erat. Mattis
        ullamcorper velit sed ullamcorper morbi tincidunt. Et malesuada
        fames ac turpis egestas maecenas pharetra convallis. Malesuada
        bibendum arcu vitae elementum curabitur vitae nunc sed velit.
      </div>
      <Divider text="OR" />
      <div className="py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <Divider text="Colored" dividerColor="blue" className="border-5" />
      <Text className="gw-text-center">Divider without text</Text>
      <Divider />
    </div>
  )
}

export default Example;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Divider ... />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default DividerDocs;
export { DividerDocs };
