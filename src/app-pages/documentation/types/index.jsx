import { UsaceBox } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Types",
    href: "/docs/types",
  },
];

function Types() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Types (sort of)">
        <div>
          While Groundwork is not a typescript library, we define some types to
          help with development, mainly to help with consistency throughout the
          library. Types defined here describe object types that are commonly
          used throughout the library.
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default Types;
export { Types };
