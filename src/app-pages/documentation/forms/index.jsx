import { UsaceBox, H4, Text } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Forms",
    href: "/docs/forms",
  },
];

function Forms() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Forms">
        <div>
          <Text className="pb-6">
            Forms are used to collect user input. They include inputs,
            dropdowns, textareas and other controls.
          </Text>
          <H4>Components</H4>
          <ul>
            <a className="hover:underline" href="/docs/forms/input">
              <li>Input - Add / Edit a text field in your form.</li>
            </a>
          </ul>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default Forms;
export { Forms };
