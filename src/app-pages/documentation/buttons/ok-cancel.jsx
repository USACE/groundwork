import { UsaceBox, Code, Text, OkCancel, H3 } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Buttons",
    href: "/docs/buttons",
  },
  {
    text: "OK / Cancel",
    href: "/docs/buttons/ok-cancel",
  },
];

const componentProps_OkCancel = [
  {
    name: "onOk",
    type: "function",
    default: "undefined",
    desc: "The function to be called when the OK button is clicked.",
  },
  {
    name: "onCancel",
    type: "function",
    default: "undefined",
    desc: "The function to be called when the Cancel button is clicked.",
  },
];

function OkCancelDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="OkCancel">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Standard buttons are designed so that when we present the user with
            specific options for an action, they get the same button every time,
            keeping it consistent.
          </Text>
          <Text className="gw-pt-3">
            When we need a simple acknowledgement or a chance to back out, give
            the user the option to hit OK or Cancel using this button.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-mt-6 gw-pb-3">OK / Cancel</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <OkCancel
            onOk={() => {
              window.alert("ok");
            }}
            onCancel={() => {
              window.alert("cancel");
            }}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { OkCancel } from "@usace/groundwork";

function Component() {
  return (
    <OkCancel
      onOk={() => {
        window.alert("ok");
      }}
      onCancel={() => {
        window.alert("cancel");
      }}
    />
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<OkCancel />`}</Code>
        </div>
        <PropsTable propsList={componentProps_OkCancel} />
      </UsaceBox>
    </DocsPage>
  );
}

export default OkCancelDocs;
export { OkCancelDocs };
