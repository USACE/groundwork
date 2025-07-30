import { UsaceBox, H4, Text } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Layout",
    href: "/#/docs/layout",
  },
];

function Layout() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Layout">
        <div>
          <Text className="gw-pb-6">
            Layout components are used to structure your content on the page.
            They include simple wrappers for using{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox">
              Flexbox layouts
            </a>{" "}
            and styled containers for displaying content using the standard
            flourish (see the top of this section.)
          </Text>
          <H4>Components</H4>
          <ul>
            <a className="gw-hover:gw-underline" href="/docs/layout/container">
              <li>Container - a simple wrapper to manage margins.</li>
            </a>
            <a className="gw-hover:gw-underline" href="/docs/layout/usace-box">
              <li>
                USACE Box - A container with a header and the red and gray
                flourish on top.
              </li>
            </a>
          </ul>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default Layout;
export { Layout };
