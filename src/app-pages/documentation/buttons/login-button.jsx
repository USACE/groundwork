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
    text: "Delete / Confirm",
    href: "/docs/buttons/delete-confirm",
  },
];

const componentProps_LoginButton = [
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
        <div className="pb-6">
          <Text>
            The login button is designed to be included in the{" "}
            <Code>navRight</Code> section of the <Code>SiteWrapper</Code>{" "}
            component. It is a simple button that can be used to trigger a login
            action.
          </Text>
          <Text className="pt-3">
            It is designed to pair with the <Code>ProfileDropdown</Code>{" "}
            component so the docs for that are included here as well. You don't
            have to use them together, but it works nicely if you do.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="mt-6 pb-3">Login with Profile Menu</H3>
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
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
              <span className="italic font-light text-sm">{`Logged in as ${email}`}</span>
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
        <div className="font-bold text-lg pt-6">
          Component API - <Code className="p-2">{`<LoginButton />`}</Code>
        </div>
        <PropsTable propsList={componentProps_LoginButton} />
      </UsaceBox>
    </DocsPage>
  );
}

export default LoginButtonDocs;
export { LoginButtonDocs };
