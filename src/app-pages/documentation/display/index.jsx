import { UsaceBox, H4 } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Display",
    href: "/docs/display",
  },
];

function Display() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Display">
        <div>
          <p className="pb-6">
            Display components are used to render content to the page with
            built-in formatting.
          </p>
          <H4>Components</H4>
          <ul>
            <li>
              <a href="/docs/display/headings">
                Headings - Section headings for standard content.
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
