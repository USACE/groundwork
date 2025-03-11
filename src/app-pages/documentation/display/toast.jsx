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
    name: "heading",
    type: "string | component",
    default: "undefined",
    desc: "The header of the accordion. Can be plain text or a custom component.",
  },
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
        <Toast show={showToast} onShow={setShowToast} title={toastState?.title} description={toastState?.description} status={toastState?.status} icon={toastState?.icon ? toastState.icon : null} />

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
        <Button color="green" onClick={() => {
            setToastState({
                title: "Success",
                description: "This is a success message.",
                status: "success", 
            })
            setShowToast(true)
        }} className="gw-my-5">Show Toast</Button>
        <Button color="red" onClick={() => {
            setToastState({
                title: "Error",
                description: "This is an error message.",
                status: "error"
            })
            setShowToast(true)
        }} className="gw-my-5">Show Toast</Button>
        <Button color="blue" onClick={() => {
            setToastState({
                title: "Info",
                description: "This is an info message.",
                status: "info"
            })
            setShowToast(true)
        }} className="gw-my-5">Show Toast</Button>
        <Button color="yellow" onClick={() => {
            setToastState({
                title: "Warning",
                description: "This is a warning message.",
                status: "warning"
            })
            setShowToast(true)
        }} className="gw-my-5">Show Toast</Button>
        <Button color="purple" onClick={() => {
            setToastState({
                title: "Cloudy Night",
                description: "Clouds tonight with a custom icon!",
                status: "info",
                icon: IoCloudyNight
            })
            setShowToast(true)
        }} className="gw-my-5"  >🌙 Custom Icon Toast</Button>
        {/* Example code */}
        <CodeExample
          code={`
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
