import { UsaceBox, Code, Text, DeleteConfirm, H3 } from "../../../../lib";
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
    text: "Delete / Confirm",
    href: "/docs/buttons/delete-confirm",
  },
];

const componentProps_DeleteConfirm = [
  {
    name: "onDelete",
    type: "function",
    default: "undefined",
    desc: "The function to be called when the delete is confirmed.",
  },
  {
    name: "alignConfirm",
    type: "string",
    default: "right",
    desc: "The alignment of the confirm and cancel buttons. Options are 'left' or 'right'. Default is 'right', which will place the Confirm button to the right of Cancel",
  },
];

function DeleteConfirmDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="DeleteConfirm">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Standard buttons are designed so that when we present the user with
            specific options for an action, they get the same button every time,
            keeping it consistent.
          </Text>
          <Text className="gw-pt-3">
            If you are letting a user delete something, it's good to make sure
            they want to actually do it. The alignConfirm prop can be used to
            manipulate which side the confirm button is on, this is helpful if
            you right-align the delete button in your UI. You want the Cancel
            button to render where Delete was, so if a user is fast-clicking
            they don't accidentally confirm when they didn't mean to.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-mt-6 gw-pb-3">Delete / Confirm</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <DeleteConfirm
            onDelete={() => {
              window.alert("actually delete the thing");
            }}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { DeleteConfirm } from "@usace/groundwork";

function Component() {
  return (
    <DeleteConfirm
      onDelete={() => {
        window.alert("actually delete the thing");
      }}
    />
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<DeleteConfirm />`}</Code>
        </div>
        <PropsTable propsList={componentProps_DeleteConfirm} />
      </UsaceBox>
    </DocsPage>
  );
}

export default DeleteConfirmDocs;
export { DeleteConfirmDocs };
