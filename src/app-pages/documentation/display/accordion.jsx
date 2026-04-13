import { UsaceBox, Code, Text, Accordion, Badge } from "../../../../lib";
import Link from "../../../../lib/components/navigation/link";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import { LuPartyPopper } from "react-icons/lu";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Display",
    href: "/#/docs/display",
  },
  {
    text: "Accordion",
    href: "/#/docs/display/accordion",
  },
];

const componentProps = [
  {
    name: "heading",
    type: "string | component",
    default: "undefined",
    desc: "The header of the accordion. Can be plain text or a custom component.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    desc: "Whether the accordion is open by default.",
  },
  {
    name: "unmountOnClose",
    type: "boolean",
    default: "false",
    desc: "Whether to unmount the content when the accordion is closed. False will cause the content to be hidden but still in the DOM.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to apply to the accordion header.",
  },
  {
    name: "isOpen",
    type: "boolean",
    default: "undefined",
    desc: "Whether the accordion is open. If provided, this will override the defaultOpen prop and the open state will be controlled by the parent component.",
  },
  {
    name: "onToggle",
    type: "function",
    default: "undefined",
    desc: "Callback function to call when the accordion is toggled.",
  },
  {
    name: "children",
    type: "node",
    default: "undefined",
    desc: "The content of the accordion when expanded.",
  },
  {
    name: "props",
    type: "object",
    default: "undefined",
    desc: (
      <>
        Additional props to pass to the accordion components. See{" "}
        <Link
          href="https://headlessui.com/react/disclosure#disclosure-panel"
          className="gw-underline"
        >
          Headless UI Disclosure
        </Link>{" "}
        docs for more info.
      </>
    ),
  },
];

function AccordionDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Accordion">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Accordions allow you to stack lots of information into a smaller
            vertical space by putting content into collapsible sections. The
            header of the accordion can be plain text or a custom component
            including other components such as a badge or icon.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-w-[50%]">
            <Accordion
              defaultOpen
              heading={
                <span className="gw-flex gw-justify-between gw-w-full gw-items-center gw-gap-1">
                  Start Here
                  <Badge color="green" className="gw-mr-2">
                    <LuPartyPopper className="gw-mr-1" />
                    new!
                  </Badge>
                </span>
              }
            >
              <div className="gw-py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </Accordion>
            <Accordion heading="Then Look Here">
              <div className="gw-py-3">
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
            </Accordion>
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Accordion, Badge } from "@usace/groundwork";
import { LuPartyPopper } from "react-icons/lu";


function Component() {
  return (
    <div className="w-[50%]">
      <Accordion
        defaultOpen
        heading={
          <span className="flex justify-between w-full items-center gap-1">
            Start Here
            <Badge color="green" className="mr-2">
              <LuPartyPopper className="mr-1" />
              new!
            </Badge>
          </span>
        }
      >
        <div className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Accordion>
      <Accordion heading="Then Look Here">
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
      </Accordion>
    </div>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Accordion />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default AccordionDocs;
export { AccordionDocs };
