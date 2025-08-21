import { UsaceBox, H4, Text } from "../../../../lib";
import DocsPage from "../_docs-page";

const BASE_URL = import.meta.env.BASE_URL;

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: `${BASE_URL}#/docs`,
  },
  {
    text: "Types",
    href: `${BASE_URL}#/docs/types`,
  },
];

function Types() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Types (sort of)">
        <Text className="gw-pb-6">
          While Groundwork is not a typescript library, we define some types to
          help with development, mainly to help with consistency throughout the
          library. Types defined here describe object types that are commonly
          used throughout the library.
        </Text>
        <H4>Components</H4>
        <ul>
          <a
            className="gw-hover:gw-underline"
            href={`${BASE_URL}#/ocs/types/link`}
          >
            <li>Link - Group text and a href attribute.</li>
          </a>
          <a
            className="gw-hover:gw-underline"
            href={`${BASE_URL}#/docs/types/tab`}
          >
            <li>Tab - Define the behavior of the tabs component.</li>
          </a>
        </ul>
      </UsaceBox>
    </DocsPage>
  );
}

export default Types;
export { Types };
