import {
  UsaceBox,
  H3,
  Text,
  Code,
  Card,
  useCdaLatestValue,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import ParamsTable from "../../../app-components/params-table";
import QueryClientWarning from "../../../app-components/water-management/query-client-warning";
import { cdaUrlParam } from "../../../app-components/water-management/shared-docs";
import DocsPage from "../_docs-page";

const hookParams = [
  {
    name: "tsId",
    type: "string",
    required: true,
    desc: "Specifies the time series ID for the requested value.",
  },
  {
    name: "office",
    type: "string",
    required: false,
    desc: "Specifies the owning office of the time series whose data is to be included in the response.",
  },
  {
    name: "unit",
    type: "string",
    required: false,
    desc: "Specifies the unit or unit system of the response. Options: 'EN', 'SI', specific units (e.g. 'ft')",
  },
  cdaUrlParam,
];

const returnParams = [
  {
    name: "datetime",
    type: "number",
    desc: "Timestamp in milliseconds since the UNIX epoch.",
  },
  {
    name: "value",
    type: "number",
    desc: "Time series value at the indicated time.",
  },
  {
    name: "qualityCode",
    type: "number",
    desc: "Numerical quality code of the time series entry.  See CWMS documentation for more information.",
  },
  {
    name: "units",
    type: "string",
    desc: "The units of the retrieved value.",
  },
];

const LatestDataCard = () => {
  const { data, isPending, isError } = useCdaLatestValue({
    tsId: "Buckhorn.Flow-Outflow.Inst.0.0.lrldlb-rev",
    office: "LRL",
    unit: "cfs",
  });

  if (isPending) return <span>Loading latest value...</span>;
  if (isError) return <span>API error!</span>;

  return (
    <Card className="gw-w-96">
      <H3>Buckhorn Outflow</H3>
      {data ? (
        <ul>
          <li>
            Datetime: <strong>{new Date(data.datetime).toISOString()}</strong>
          </li>
          <li>
            Value: <strong>{data.value.toFixed(2)}</strong> {data.units}
          </li>
          <li>
            Quality Code: <strong>{data.qualityCode}</strong>
          </li>{" "}
        </ul>
      ) : (
        <span>No data found.</span>
      )}
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
    text: "useCdaLatestValue",
    href: "/docs/water-management/use-cda-latest-value",
  },
];

function UseCdaLatestValueDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="useCdaLatestValue">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The useCdaLatestValue hook returns the latest value entry from a CDA
            time series. It includes the timestamp, value, quality code, and
            units.
          </Text>
          <Text className="gw-mt-2">
            The hook is an abstraction of the CDA TimeSeries GET and Catalog GET
            endpoints. It first makes a TimeSeries GET request with the default
            time window (now - 24 hours ago) and returns the latest value. If no
            values are found, it makes a Catalog GET request and retrieves the
            timestamp of the latest value. It then repeats the TimeSeries GET
            request with the retrieved timestamp.
          </Text>
          <Text className="gw-mt-2">
            The isPending and isFetching return booleans represent the full
            lifecycle of the abstracted hook (time series AND catalog, if
            needed). All other return parameters represent those returned from
            the time series request.
          </Text>
          <QueryClientWarning />
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <LatestDataCard />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Card, H3, useCdaLatestValue } from "@usace/groundwork";

const LatestDataCard = () => {
  const { data, isPending, isError } = useCdaLatestValue({
    tsId: "Buckhorn.Flow-Outflow.Inst.0.0.lrldlb-rev",
    office: "LRL",
    unit: "cfs",
  });

  if (isPending) return <span>Loading latest value...</span>;
  if (isError) return <span>API error!</span>;

  return (
    <Card className="gw-w-96">
      <H3>Buckhorn Outflow</H3>
      {data ? (
        <ul>
          <li>
            Datetime: <strong>{new Date(data.datetime).toISOString()}</strong>
          </li>
          <li>
            Value: <strong>{data.value.toFixed(2)}</strong> {data.units}
          </li>
          <li>
            Quality Code: <strong>{data.qualityCode}</strong>
          </li>{" "}
        </ul>
      ) : (
        <span>No data found.</span>
      )}
    </Card>
  );
};
`}
        />
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Hook Parameters -{" "}
          <Code className="gw-p-2">{`useCdaLatestValue({...})`}</Code>
        </div>
        <ParamsTable paramsList={hookParams} />
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Return Data Parameters -{" "}
        </div>
        <ParamsTable paramsList={returnParams} showReq={false} />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseCdaLatestValueDocs };
export default UseCdaLatestValueDocs;
