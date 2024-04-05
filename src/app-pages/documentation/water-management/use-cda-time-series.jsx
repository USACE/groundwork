import {
  UsaceBox,
  H3,
  H4,
  Text,
  Code,
  Card,
  useCdaTimeSeries,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import ParamsTable from "../../../app-components/params-table";
import DocsPage from "../_docs-page";

const hookParams = [
  {
    name: "cdaParams",
    type: "object",
    required: true,
    desc: (
      <>
        Parameters provided to CDA for a TimeSeries GET request. See the{" "}
        <a
          href="https://cwms-data.usace.army.mil/cwms-data/swagger-ui.html"
          className="underline"
        >
          CDA Swagger Docs
        </a>
        .
      </>
    ),
  },
  {
    name: "cdaUrl",
    type: "string",
    required: false,
    desc: "An alternative URL for the CDA instance if not using the default (e.g. for testing in a development environment).",
  },
  {
    name: "queryOptions",
    type: "object",
    required: false,
    desc: (
      <>
        Additional options to configure the react-query useQuery request. See
        the{" "}
        <a
          href="https://tanstack.com/query/latest/docs/framework/react/reference/useQuery"
          className="underline"
        >
          React-Query Docs
        </a>
        .
      </>
    ),
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
    text: "useCdaTimeSeries",
    href: "/docs/water-management/use-cda-time-series",
  },
];

function UseCdaTimeSeries() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="useCdaTimeSeries">
        {/* Description of the component and what problem it solves */}
        <div className="pb-6">
          <Text>
            The useCdaTimeSeries hook can be used to retrieve timeseries data
            using cwms-data-api (CDA). It requires only a timeseries ID and an
            office ID, but can be further customized using additional parameters
            provided through CDA if desired.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="pt-6 pb-3">Basic Usage</H3>
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
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
        <div className="font-bold text-lg pt-6">
          Hook Parameters -{" "}
          <Code className="p-2">{`useCdaTimeSeries({...})`}</Code>
        </div>
        <ParamsTable paramsList={hookParams} />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseCdaTimeSeries };
export default UseCdaTimeSeries;
