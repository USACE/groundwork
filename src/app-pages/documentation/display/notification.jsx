import { useState } from "react";
import {
  UsaceBox,
  Code,
  Text,
  Notification,
  Button,
  Divider,
} from "../../../../lib";
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
    desc: "Main heading text shown in the notification. Required.",
  },
  {
    name: "description",
    type: "string",
    default: "''",
    desc: "Secondary text providing more details about the notification. Required.",
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
    desc: "Time in milliseconds before the notification automatically disappears. Also controls the progress bar duration.",
  },
  {
    name: "show",
    type: "boolean",
    default: "false",
    desc: "Whether the notification is visible. Controls transition and rendering.",
  },
  {
    name: "onShow",
    type: "(visible: boolean) => void",
    default: "undefined",
    desc: "Callback triggered when the notification should be hidden. Typically used to update state in the parent.",
  },
  {
    name: "status",
    type: "'success' | 'error' | 'info' | 'warning' | undefined",
    default: "'success'",
    desc: "Determines the default icon and color theme used in the notification and progress bar.",
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
  },
];

const buttonStates = [
  {
    color: "green",
    text: "Success",
    description: "This is a success message.",
    status: "success",
  },
  {
    color: "red",
    text: "Error",
    description: "This is an error message.",
    status: "error",
  },
  {
    color: "blue",
    text: "Info",
    description: "This is an info message.",
    status: "info",
  },
  {
    color: "yellow",
    text: "Warning",
    description: "This is a warning message.",
    status: "warning",
  },
  {
    color: "purple",
    text: "Custom Icon",
    description: "Clouds tonight with a custom icon!",
    status: "info",
    icon: IoCloudyNight,
  },
];

function NotificationDocs() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationState, setNotificationState] = useState({
    title: "Notification Title",
    description: "This is a notification message.",
    status: "success",
  });

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Notification Messages">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Notification messages are used to display popup messages to the
            user. They are typically used to provide feedback about an action
            they have taken or to inform them of a change in the application
            state.
          </Text>
        </div>
        <Divider text="Alternatives" />
        <Text>
          Consider{" "}
          <a
            className="gw-underline"
            href="https://fkhadra.github.io/react-toastify/introduction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-toastify
          </a>{" "}
          for more complex notifications or alerts that require multiple
          messages to be displayed at once.
        </Text>
        <Divider text="Usage" />
        <Text>
          The notification component is used to display a message to the user.
          It can be used to show success, error, info, warning, or even custom
          messages. It will remain open by default or it can be set to close
          automatically after a specified duration.
        </Text>
        {/* Example usage - remove if not needed */}
        <Divider text="Examples" />
        <Notification
          show={showNotification}
          onShow={setShowNotification}
          title={notificationState?.title}
          description={notificationState?.description}
          status={notificationState?.status}
          icon={notificationState?.icon ? notificationState.icon : null}
        />
        <div className="gw-flex gw-flex-row gw-flex-wrap gw-gap-3">
          {buttonStates.map((state) => (
            <Button
              key={state.color}
              color={state.color}
              onClick={() => {
                setNotificationState({
                  title: state?.text,
                  description: state?.description,
                  status: state?.status,
                  icon: state?.icon,
                });
                setShowNotification(true);
              }}
              className="gw-my-5"
            >
              {state.text}
            </Button>
          ))}
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { useState } from "react";
import { UsaceBox, Notification, Button } from "@usace/groundwork";

function NotificationExample() {
    const [showNotification, setShowNotification] = useState(false)
    const [notificationState, setNotificationState] = useState({
        title: "Notification Title",
        description: "This is a notification message.",
        status: "success"
    })
    
    function updateNotification() {
        // Update the notification state with new values
        // You could call this in any hook or function to update the notification dynamically
        // The button below demonstrates this
        setNotificationState({
            title: "Updated Notification Title",
            description: "This is an updated notification message.",
            status: "info" // You can change the status as needed
        });
        // Show the notification
        setShowNotification(true);
    }

    return (
        <Button color="blue" onClick={updateNotification} className="my-5">
            Show Notification
        </Button>
    )
}
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Notification />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default NotificationDocs;
export { NotificationDocs };
