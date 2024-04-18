import {
  UsaceBox,
  Code,
  Text,
  LoginButton,
  H3,
  ProfileDropdown,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import { useState } from "react";

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
    text: "Login Button",
    href: "/docs/buttons/login-button",
  },
];

const componentProps_LoginButton = [
  {
    name: "onClick",
    type: "function",
    default: "undefined",
    desc: "The function to be called when the user clicks the login button.",
  },
];

const componentProps_ProfileDropdown = [
  {
    name: "email",
    type: "string",
    default: "undefined",
    desc: "The email address of the logged-in user, if present we'll try to load a gravatar image for them.",
  },
  {
    name: "username",
    type: "string",
    default: "undefined",
    desc: "The username of the logged-in user, if present we'll use the first letter as a fallback avatar.",
  },
  {
    name: "showLogout",
    type: "boolean",
    default: "false",
    desc: "If true, show a logout link in the dropdown menu.",
  },
  {
    name: "onLogout",
    type: "function",
    default: "undefined",
    desc: "The function to be called when the logout button is clicked.",
  },
  {
    name: "links",
    type: "[Link]",
    default: "[]",
    desc: "An array of objects with 'id', 'text', and 'link' properties to be displayed in the dropdown.",
  },
];

function validateEmail(email) {
  const re = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  return re.test(email);
}

function LoginButtonDocs() {
  const [email, setEmail] = useState("");

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="LoginButton">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The login button is designed to be included in the{" "}
            <Code>navRight</Code> section of the <Code>SiteWrapper</Code>{" "}
            component. It is a simple button that can be used to trigger a login
            action.
          </Text>
          <Text className="gw-pt-3">
            It is designed to pair with the <Code>ProfileDropdown</Code>{" "}
            component so the docs for that are included here as well. You don't
            have to use them together, but it works nicely if you do. We don't
            know what kind of authentication you will be using, so the login
            button allows you to handle the login logic yourself.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-mt-6 gw-pb-3">Login with Profile Menu</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-flex gw-justify-between gw-items-center gw-bg-usace-black gw-text-white gw-rounded-2 gw-p-2">
            {email ? (
              <ProfileDropdown
                email={email}
                showLogout
                onLogout={() => {
                  setEmail("");
                }}
                links={[
                  {
                    id: "profile",
                    text: `View Profile`,
                    link: "#",
                  },
                ]}
              />
            ) : (
              <LoginButton
                onClick={() => {
                  // implement real login logic here
                  const unsafe_input = window.prompt(
                    "Enter your e-mail address"
                  );
                  if (unsafe_input) {
                    if (validateEmail(unsafe_input)) setEmail(unsafe_input);
                    else window.alert("Invalid email address");
                  }
                }}
              />
            )}
            {email && (
              <span className="gw-italic gw-font-light gw-text-sm">{`Logged in as ${email}`}</span>
            )}
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { LoginButton, ProfileDropdown } from "@usace/groundwork";
import { useState } from "react";

function Component() {
  const [email, setEmail] = useState("");
  
  return (
    <div className="flex justify-between items-center bg-usace-black text-white rounded-2 p-2">
      {email ? (
        <ProfileDropdown
          email={email}
          showLogout
          onLogout={() => {
            setEmail("");
          }}
          links={[
            {
              id: "profile",
              text: "View Profile",
              link: "#",
            },
          ]}
        />
      ) : (
        <LoginButton
          onClick={() => {
            // implement real login logic here
            const unsafe_input = window.prompt(
              "Enter your e-mail address"
            );
            if (unsafe_input) {
              if (validateEmail(unsafe_input)) setEmail(unsafe_input);
              else window.alert("Invalid email address");
            }
          }}
        />
      )}
      {email && (
        <span className="italic font-light text-sm">{\`Logged in as \${email}\`}</span>
      )}
    </div>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<LoginButton />`}</Code>
        </div>
        <PropsTable propsList={componentProps_LoginButton} />

        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API -{" "}
          <Code className="gw-p-2">{`<ProfileDropdown />`}</Code>
        </div>
        <PropsTable propsList={componentProps_ProfileDropdown} />
      </UsaceBox>
    </DocsPage>
  );
}

export default LoginButtonDocs;
export { LoginButtonDocs };
