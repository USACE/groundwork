import { useState } from "react";
import { UsaceBox, Code, Text, Toast, Button } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import { IoCloudyNight } from "react-icons/io5";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
];

const componentProps = [
    {
      name: "title",
      type: "string",
      default: "''",
      desc: "Main heading text shown in the toast. Required.",
    },
    {
      name: "description",
      type: "string",
      default: "''",
      desc: "Secondary text providing more details about the toast. Required.",
    },
    {
      name: "icon",
      type: "React.ElementType",
      default: "undefined",
      desc: "Optional custom icon component to display. If not provided, an icon is chosen based on `status`.",
    },
    {
      name: "durationMS",
      type: "number",
      default: "5000",
      desc: "Time in milliseconds before the toast automatically disappears. Also controls the progress bar duration.",
    },
    {
      name: "show",
      type: "boolean",
      default: "false",
      desc: "Whether the toast is visible. Controls transition and rendering.",
    },
    {
      name: "onShow",
      type: "(visible: boolean) => void",
      default: "undefined",
      desc: "Callback triggered when the toast should be hidden. Typically used to update state in the parent.",
    },
    {
      name: "status",
      type: "'success' | 'error' | 'info' | 'warning' | undefined",
      default: "'success'",
      desc: "Determines the default icon and color theme used in the toast and progress bar.",
    },
    {
        name: "showProgress",
        type: "boolean",
        default: "true",
        desc: "Whether to show the progress bar. If false, the progress bar will not be displayed.",
    },
    {
        name: "baseDuration",
        type: "number",
        default: "300",
        desc: "Base duration in milliseconds for the transition of the progress bar. This can be used to customize the speed of the progress bar animation.",
    }
  ];
  

const buttonStates = [
    { color: "green", text: "Success", description: "This is a success message.", status: "success" },
    { color: "red", text: "Error", description: "This is an error message.", status: "error" },
    { color: "blue", text: "Info", description: "This is an info message.", status: "info" },
    { color: "yellow", text: "Warning", description: "This is a warning message.", status: "warning" },
    { color: "purple", text: "Custom Icon", description: "Clouds tonight with a custom icon!", status: "info", icon: IoCloudyNight },
]

function ToastDocs() {
  const [showToast, setShowToast] = useState(false)
  const [toastState, setToastState] = useState({
    title: "Toast Title",
    description: "This is a toast message.",
    status: "success"
  })

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Toast Messages">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Toast messages are used to display short messages to the user. They are typically used to provide feedback
            to the user about an action they have taken or to inform them of a change in the application
            state.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <Toast durationMS={5000} show={showToast} onShow={setShowToast} title={toastState?.title} description={toastState?.description} status={toastState?.status} icon={toastState?.icon ? toastState.icon : null} />
        <div className="gw-flex gw-flex-row gw-flex-wrap gw-gap-3">
            {buttonStates.map((state => (
                <Button key={state.color} color={state.color} onClick={() => {
                    setToastState({
                        title: state?.text,
                        description: state?.description,
                        status: state?.status,
                        icon: state?.icon
                    })
                    setShowToast(true)
                }} className="gw-my-5">{state.text}</Button>
            ))
            )}
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { useState } from "react";
import { UsaceBox, Toast, Button } from "@usace/groundwork";

function ToastExample() {
    const [showToast, setShowToast] = useState(false)
    const [toastState, setToastState] = useState({
        title: "Toast Title",
        description: "This is a toast message.",
        status: "success"
    })
    
    function updateToast() {
        // Update the toast state with new values
        // You could call this in any hook or function to update the toast dynamically
        // The button below demonstrates this
        setToastState({
            title: "Updated Toast Title",
            description: "This is an updated toast message.",
            status: "info" // You can change the status as needed
        });
        // Show the toast
        setShowToast(true);
    }

    return (
        <Button color="blue" onClick={updateToast} className="my-5">
            Show Toast
        </Button>
    )
}
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

export default ToastDocs;
export { ToastDocs };
