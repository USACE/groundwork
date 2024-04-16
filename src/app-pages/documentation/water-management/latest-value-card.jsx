import { UsaceBox, Code, CdaLatestValueCard, Text, H3 } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Water Management",
    href: "/docs/water-management",
  },
  {
    text: "LatestValueCard",
    href: "/docs/water-management/latest-value-card",
  },
];

const componentProps = [
  {
    name: "label",
    type: "string",
    default: "undefined",
    desc: "The label/title of the card.",
  },
  {
    name: "tsId",
    type: "string",
    default: "undefined",
    desc: "The time series ID of the value to be retrieved.",
  },
  {
    name: "office",
    type: "string",
    default: "undefined",
    desc: "The office code of the data's owning office.",
  },
  {
    name: "digits",
    type: "number",
    default: 0,
    desc: "The number of trailing digits to display after the decimal.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to add to the card.",
  },
];

function CdaLatestValueCardDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="CDA Latest Value Card">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The CDA Latest Value Card can be used to display the most recent
            available data for a specific CWMS time series. This component
            assumes that the data has been updated in the past 24 hours.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3>Basic Example</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-w-96">
            <CdaLatestValueCard
              label="Buckhorn Elevation"
              office="LRL"
              tsId="Buckhorn-Lake.Elev.Inst.5Minutes.0.USGS-rev"
              digits={2}
            />
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { LatestValueCard } from "@usace/groundwork";

function Component() {
  return (
    <div className="w-96">
      <CdaLatestValueCard
        label="Buckhorn Elevation"
        office="LRL"
        tsId="Buckhorn-Lake.Elev.Inst.5Minutes.0.USGS-rev"
        digits={2}
      />
    </div>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API -{" "}
          <Code className="gw-p-2">{`<CdaLatestValueCard />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default CdaLatestValueCardDocs;
export { CdaLatestValueCardDocs };
