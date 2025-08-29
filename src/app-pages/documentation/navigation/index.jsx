import { UsaceBox, H4, Text } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Navigation",
    href: "/#/docs/navigation",
  },
];

function Navigation() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Navigation">
        <div>
          <Text className="gw:pb-6">
            Navigation components are used to help users find their way around
            the site. They include breadcrumbs and other components that help
            users understand where they are in the site and how to get around.
          </Text>
          <H4>Components</H4>
          <ul>
            <li>
              <a href="/docs/navigation/breadcrumbs">
                Breadcrumbs - Keep track of where you are in the site
              </a>
            </li>
            <li>
              <a href="/docs/navigation/tabs">
                Tabs - Display multiple sub-pages on the same page
              </a>
            </li>
          </ul>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default Navigation;
export { Navigation };
