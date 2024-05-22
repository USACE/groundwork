import { UsaceBox, H4, Text } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Plots",
    href: "/#/docs/plots",
  },
];

function Plots() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Plots">
        <Text className="gw-pb-6">
          We use Plotly.js to create plots in Groundwork. This is a simple
          wrapper around Plotly.js to make it easier to use in a React app. We
          might add more libraries or customized components using Plotly
          specialized for certain applications in the future.
        </Text>
        <H4>Components</H4>
        <ul>
          <a
            className="gw-hover:gw-underline"
            href="/#/docs/plots/plotly-wrapper"
          >
            <li>
              Plotly Wrapper - Simple wrapper around the Plotly.js library
            </li>
          </a>
        </ul>
      </UsaceBox>
    </DocsPage>
  );
}

export default Plots;
export { Plots };
