import { UsaceBox, H4, Text } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Water Management",
    href: "/#/docs/display",
  },
];

function WaterManagement() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Water Management">
        <div>
          <Text className="gw-pb-6">
            The Water Management community has been working on building out some
            custom components that pair well with the rest of Groundwork. These
            components are designed so that we can consume data from the CWMS
            Data API (CDA) and display it in a way that is consistent with the
            rest of the Groundwork UI.
          </Text>
          <H4>Components</H4>
          <ul>
            <li>
              <a href="/#/docs/water-management">Coming Soon</a>
            </li>
          </ul>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default WaterManagement;
export { WaterManagement };
