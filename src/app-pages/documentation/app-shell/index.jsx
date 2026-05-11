import { UsaceBox, H4, Text } from "../../../../lib";
import DocsPage from "../_docs-page";

const BASE_URL = import.meta.env.BASE_URL;

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: `${BASE_URL}#/docs`,
  },
  {
    text: "Application Shell",
    href: `${BASE_URL}#/docs/app-shell`,
  },
];

function AppShell() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Application Shell">
        <Text className="gw-pb-6">
          The application shell consists of components that are shared across
          many pages, this way we can re-use components for the header, footer,
          etc... and don't have to worry about getting them all to match. The
          easiest way to start your app is to use the SiteWrapper component to
          wrap your custom page, then you only have to concentrate on your
          specific content.
        </Text>
        <H4>Components</H4>
        <ul>
          <li>
            <a href={`${BASE_URL}#/docs/app-shell/site-wrapper`}>
              Site Wrapper - Add the standard header and footer to your pages
            </a>
          </li>
          <li>
            <a href={`${BASE_URL}#/docs/app-shell/search`}>
              Search - Customizable search options
            </a>
          </li>
        </ul>
      </UsaceBox>
    </DocsPage>
  );
}

export default AppShell;
export { AppShell };
