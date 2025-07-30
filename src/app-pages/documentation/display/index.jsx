import { UsaceBox, H4, Text } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Display",
    href: "/#/docs/display",
  },
];

function Display() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Display">
        <div>
          <Text className="gw-pb-6">
            Display components are used to render content to the page with
            built-in formatting.
          </Text>
          <H4>Components</H4>
          <ul>
            <li>
              <a href="/docs/display/badge">
                Badge - A small piece of information that can be displayed on a
                page.
              </a>
            </li>
            <li>
              <a href="/docs/display/headings">
                Headings - Section headings for standard content.
              </a>
            </li>
            <li>
              <a href="/docs/display/hero">
                Hero - A large, prominent section of a page.
              </a>
            </li>
            <li>
              <a href="/docs/display/text">Text - Standard text for a page.</a>
            </li>
            <li>
              <a href="/docs/display/table">Table - A table of data.</a>
            </li>
            <li>
              <a href="/docs/display/accordion">
                Accordion - Stackable / Expandible sections.
              </a>
            </li>
            <li>
              <a href="/docs/display/card">
                Card - Put a box around some content.
              </a>
            </li>
          </ul>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default Display;
export { Display };
