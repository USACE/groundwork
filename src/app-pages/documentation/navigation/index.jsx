import { UsaceBox } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Navigation",
    href: "/docs/navigation",
  },
];

function Navigation() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Navigation">
        <div>
          <p>
            These are docs docs go to{" "}
            <a href="/docs/navigation/breadcrumbs">Breadcrumbs</a>
          </p>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default Navigation;
export { Navigation };
