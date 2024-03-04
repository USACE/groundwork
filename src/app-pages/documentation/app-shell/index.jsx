import { UsaceBox, H4 } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Application Shell",
    href: "/docs/app-shell",
  },
];

function AppShell() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Application Shell">
        <div className="pb-6">
          The application shell consists of components that are shared across
          many pages, this way we can re-use components for the header, footer,
          etc... and don't have to worry about getting them all to match. The
          easiest way to start your app is to use the SiteWrapper component to
          wrap your custom page, then you only have to concentrate on your
          specific content.
        </div>
        <H4>Components</H4>
        <ul>
          <li>
            <a href="/docs/app-shell/site-wrapper">Site Wrapper</a>
          </li>
        </ul>
      </UsaceBox>
    </DocsPage>
  );
}

export default AppShell;
export { AppShell };
