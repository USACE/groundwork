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
          <Text className="gw-pb-6">
            Forms are used to collect user input. They include inputs,
            dropdowns, textareas and other controls.
          </Text>
          <H4>Components</H4>
          <ul>
            <a className="gw-hover:gw-underline" gw-href="gw-/docs/forms/fieldset">
              <li>Fieldset - Organize field components.</li>
            </a>
            <a className="gw-hover:gw-underline" gw-href="gw-/docs/forms/text-inputs">
              <li>Input - Add / Edit a text field in your form.</li>
            </a>
            <a className="gw-hover:gw-underline" gw-href="gw-/docs/forms/textarea">
              <li>Textarea - For when you need lots of information.</li>
            </a>
            <a className="gw-hover:gw-underline" gw-href="gw-/docs/forms/numeric-inputs">
              <li>Numeric - Limit entry to numbers.</li>
            </a>
            <a className="gw-hover:gw-underline" gw-href="gw-/docs/forms/color-input">
              <li>Color - Let a user choose a color.</li>
            </a>
            <a className="gw-hover:gw-underline" gw-href="gw-/docs/forms/date-time-inputs">
              <li>Date/Time - Different ways to pick temporal data.</li>
            </a>
            <a className="gw-hover:gw-underline" gw-href="gw-/docs/forms/input">
              <li>File Input - When we need to let folks upload something.</li>
            </a>
          </ul>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default Forms;
export { Forms };
