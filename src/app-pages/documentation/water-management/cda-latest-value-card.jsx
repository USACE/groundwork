import { UsaceBox, Code, CdaLatestValueCard, Text, H3 } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import QueryClientWarning from "../../../app-components/water-management/query-client-warning";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Water Management",
    href: "/#/docs/water-management",
  },
  {
    text: "CdaLatestValueCard",
    href: "/#/docs/water-management/cda-latest-value-card",
  },
];

const componentProps = [
  {
    name: "label",
    type: "string",
    default: "tsId",
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
    name: "unit",
    type: "string",
    default: "undefined",
    desc: "Specifies the unit or unit system of the response. Options: 'EN', 'SI', specific units (e.g. 'ft')",
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
  {
    name: "cdaUrl",
    type: "string",
    default: "undefined",
    desc: "An alternative URL for the CDA instance if not using the default (e.g. for testing in a development environment).",
  },
];

function CdaLatestValueCardDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="CdaLatestValueCard">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The CdaLatestValueCard can be used to display the most recent
            available data for a specific CWMS time series.
          </Text>
          <Text className="gw-mt-3">
            By default, the component assumes the value was updated within the
            past 24 hours. If not, the component will make a useCatalogTS
            request to retrieve the date of the latest value and re-run the time
            series request for that date. Note that the data-fetching process
            will take longer than normal in this case.
          </Text>
          <QueryClientWarning />
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
