import {
  UsaceBox,
  H3,
  Text,
  Code,
  Card,
  useCdaTimeSeriesGroup,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import ParamsTable from "../../../app-components/params-table";
import CdaParamsTable from "../../../app-components/water-management/cda-params-table";
import QueryClientWarning from "../../../app-components/water-management/query-client-warning";
import DocsPage from "../_docs-page";

const cdaParams = [
  {
    name: "groupId",
    type: "string",
    required: true,
    desc: "Specifies the timeseries group whose data is to be included in the response.",
  },
  {
    name: "office",
    type: "string",
    required: false,
    desc: "Specifies the owning office of the timeseries group whose data is to be included in the response.",
  },
  {
    name: "unit",
    type: "string",
    required: false,
    desc: "Specifies the category containing the timeseries group whose data is to be included in the response.",
  },
];

const TimeSeriesGroupCard = () => {
  const { data, isPending, isError } = useCdaTimeSeriesGroup({
    cdaParams: {
      groupId: "USGS TS Data Acquisition",
      office: "CWMS",
      categoryId: "Data Acquisition",
    },
  });

  if (isPending) return <span>Loading time series group data...</span>;
  if (isError) return <span>Time series group error!</span>;

  return (
    <Card className="gw-w-96">
      <H3>USGS Data Acquisition</H3>
      <ul>
        {data["assigned-time-series"]
          .slice(0, 2) // Get the first two key-value pairs
          .map((ts) => (
            <li key={ts["timeseries-id"]}>
              <Card className="gw-mb-2">
                <ul>
                  {Object.entries(ts).map(([key, value]) => (
                    <li key={value}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
      </ul>
    </Card>
  );
};

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
    text: "useCdaTimeSeriesGroup",
    href: "/#/docs/water-management/use-cda-time-series-group",
  },
];

function UseCdaTimeSeriesGroupDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="useCdaTimeSeriesGroup">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The useCdaTimeSeriesGroup hook can be used to retrieve metadata and
            associated time series for a given time series group using
            cwms-data-api (CDA). It requires the passing of a groupId, office,
            and categoryId.
          </Text>
          <QueryClientWarning />
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <TimeSeriesGroupCard />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Card, H3, useCdaTimeSeriesGroup } from "@usace/groundwork";

const TimeSeriesGroupCard = () => {
  const { data, isPending, isError } = useCdaTimeSeriesGroup({
    cdaParams: {
      groupId: "USGS TS Data Acquisition",
      office: "CWMS",
      categoryId: "Data Acquisition",
    },
    cdaUrl: "https://cwms-data.usace.army.mil/cwms-data",
  });

  if (isPending) return <span>Loading time series group data...</span>;
  if (isError) return <span>Time series group error!</span>;

  return (
    <Card className="w-96">
      <H3>USGS Data Acquisition</H3>
      <ul>
        {data["assigned-time-series"] // Convert the response object to an array
          .slice(0, 2) // Get the first two key-value pairs
          .map((ts) => (
            <li key={ts["timeseries-id"]}>
              <Card className="gw-mb-2">
                <ul>
                  {Object.entries(ts).map(([key, value]) => (
                    <li key={value}>{\${key}: \${value}}</li>
                  ))}
                </ul>
              </Card>
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
          <Code className="gw-p-2">{`useCdaTimeSeriesGroup({...})`}</Code>
        </div>
        <CdaParamsTable requestObject="TimeSeries Group" requestType="GET" />
        <div className="gw-font-bold gw-text-lg gw-pt-6">cdaParams</div>
        <ParamsTable paramsList={cdaParams} />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseCdaTimeSeriesGroupDocs };
export default UseCdaTimeSeriesGroupDocs;
