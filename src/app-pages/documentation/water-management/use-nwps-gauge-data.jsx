import {
  UsaceBox,
  H3,
  Text,
  Code,
  Card,
  useNwpsGaugeData,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import ParamsTable from "../../../app-components/params-table";
import QueryClientWarning from "../../../app-components/water-management/query-client-warning";
import {
  NwpsApiLink,
  queryOptionsParam,
} from "../../../app-components/water-management/shared-docs";
import DocsPage from "../_docs-page";

const hookParams = [
  {
    name: "sid",
    type: "string",
    required: true,
    desc: "The NWS site identifier for the requested location (typically 5 characters, e.g. CATK2)",
  },
  {
    name: "product",
    type: "string",
    required: false,
    desc: "Specify the product to be returned. Note that using this option will change the structure of the response object. Options: 'observed', 'forecast'",
  },
  queryOptionsParam,
];

const NwpsForecastCard = () => {
  const { data, isPending, isError } = useNwpsGaugeData({
    sid: "HLDK2",
    product: "forecast",
  });

  if (isPending) return <span>Loading NWPS gauge data...</span>;
  if (isError) return <span>NWPS error!</span>;

  return (
    <Card>
      <H3>Heidelberg Forecasted Stages</H3>
      <ul>
        {data.data.slice(0, 5).map((datum) => (
          <li key={datum.validTime}>
            <strong>
              {datum.primary} {data.primaryUnits}
            </strong>{" "}
            @ {datum.validTime}
          </li>
        ))}
      </ul>
    </Card>
  );
};

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
    text: "useNwpsGaugeData",
    href: "/docs/water-management/use-nwps-gauge-data",
  },
];

function UseNwpsGaugeDataDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="useNwpsGaugeData">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The useNwpsGaugeData hook can be used to retrieve observed and
            forecasted stage and flow data from the National Weather Service
            using the National Weather Prediction Service (NWPS) API. It
            requires only the NWS site identifier for the requested location.
            Forecasted data and flow data are dependent on the existence of a
            forecast model and a rating curve for the requested location,
            respectively.
          </Text>
          <NwpsApiLink />
          <QueryClientWarning />
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <NwpsForecastCard />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Card, H3, useNwpsGaugeData } from "@usace/groundwork";

const NwpsForecastCard = () => {
  const { data, isPending, isError } = useNwpsGaugeData({
    sid: "HLDK2",
    product: "forecast",
  });

  if (isPending) return <span>Loading NWPS gauge data...</span>;
  if (isError) return <span>NWPS error!</span>;

  return (
    <Card>
      <H3>Heidelberg Forecasted Stages</H3>
      <ul>
        {data.data.slice(0, 5).map((datum) => (
          <li key={datum.validTime}>
            <strong>
              {datum.primary} {data.primaryUnits}
            </strong>{" "}
            @ {datum.validTime}
          </li>
        ))}
      </ul>
    </Card>
  );
};
`}
        />
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Hook Parameters -{" "}
          <Code className="gw-p-2">{`useNwpsGaugeData({...})`}</Code>
        </div>
        <ParamsTable paramsList={hookParams} />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseNwpsGaugeDataDocs as UseNwpsGaugeDocs };
export default UseNwpsGaugeDataDocs;
