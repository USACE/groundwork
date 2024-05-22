import {
  UsaceBox,
  H3,
  Text,
  Code,
  Card,
  useCdaTimeSeries,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import ParamsTable from "../../../app-components/params-table";
import CdaParamsTable from "../../../app-components/water-management/cda-params-table";
import QueryClientWarning from "../../../app-components/water-management/query-client-warning";
import DocsPage from "../_docs-page";

const cdaParams = [
  {
    name: "name",
    type: "string",
    required: true,
    desc: "Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.",
  },
  {
    name: "office",
    type: "string",
    required: false,
    desc: "Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching time series information from all offices shall be returned.",
  },
  {
    name: "unit",
    type: "string",
    required: false,
    desc: "Specifies the unit or unit system of the response. Options: 'EN', 'SI', specific units (e.g. 'ft')",
  },
  {
    name: "begin",
    type: "string",
    required: false,
    desc: "Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.",
  },
  {
    name: "end",
    type: "string",
    required: false,
    desc: "Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.",
  },
];

const OutflowCard = () => {
  const { data, isPending, isError } = useCdaTimeSeries({
    cdaParams: {
      name: "Buckhorn.Flow-Outflow.Ave.1Hour.1Hour.lrldlb-comp",
      office: "LRL",
    },
  });

  if (isPending) return <span>Loading timeseries data...</span>;
  if (isError) return <span>Timeseries error!</span>;

  return (
    <Card className="gw-w-96">
      <H3>Buckhorn Outflow Data</H3>
      <ul>
        <li>Time - Value</li>
        {data.values
          .filter((entry) => !!entry[1]) // Remove empty records
          .slice(-5) // Trim to the last 5 values
          .map((entry) => {
            const time = new Date(entry[0]).toLocaleTimeString();
            const value = entry[1].toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
            return (
              <li key={entry[0]}>
                {time} - {value}
              </li>
            );
          })}
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
    text: "useCdaTimeSeries",
    href: "/#/docs/water-management/use-cda-time-series",
  },
];

function UseCdaTimeSeries() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="useCdaTimeSeries">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The useCdaTimeSeries hook can be used to retrieve timeseries data
            using cwms-data-api (CDA). It requires only a timeseries ID and an
            office ID, but can be further customized using additional parameters
            provided through CDA if desired.
          </Text>
          <QueryClientWarning />
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <OutflowCard />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Card, H3, useCdaTimeSeries } from "@usace/groundwork";

const OutflowCard = () => {
  const { data, isPending, isError } = useCdaTimeSeries({
    cdaParams: {
      name: "Buckhorn.Flow-Outflow.Ave.1Hour.1Hour.lrldlb-comp",
      office: "LRL",
    },
  });

  if (isPending) return <span>Loading timeseries data...</span>;
  if (isError) return <span>Timeseries error!</span>;

  return (
    <Card className="w-96">
      <H3>Buckhorn Outflow Data</H3>
      <ul>
        <li>Time - Value</li>
        {data.values
          .filter((entry) => !!entry[1]) // Remove empty records
          .slice(-5) // Trim to the last 5 values
          .map((entry) => {
            const time = new Date(entry[0]).toLocaleTimeString();
            const value = entry[1].toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
            return (
              <li key={entry[0]}>
                {time} - {value}
              </li>
            );
          })}
      </ul>
    </Card>
  );
};
`}
        />
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Hook Parameters -{" "}
          <Code className="gw-p-2">{`useCdaTimeSeries({...})`}</Code>
        </div>
        <CdaParamsTable requestObject="TimeSeries" requestType="GET" />
        <div className="gw-font-bold gw-text-lg gw-pt-6">cdaParams</div>
        <ParamsTable paramsList={cdaParams} />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseCdaTimeSeries };
export default UseCdaTimeSeries;
