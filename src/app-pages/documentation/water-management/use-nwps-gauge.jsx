import { UsaceBox, H3, Text, Code, Card, useNwpsGauge } from "../../../../lib";
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
  queryOptionsParam,
];

const NwpsCard = () => {
  const { data, isPending, isError } = useNwpsGauge({ sid: "HLDK2" });

  if (isPending) return <span>Loading NWPS gauge data...</span>;
  if (isError) return <span>NWPS error!</span>;

  return (
    <Card>
      <H3>{data.name}</H3>
      <ul>
        {Object.entries(data.flood.categories).map(([cat, catData]) => (
          <li key={cat}>
            {cat}: <strong>{catData.stage}</strong> {data.flood.stageUnits}
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
    text: "useNwpsGauge",
    href: "/docs/water-management/use-nwps-gauge",
  },
];

function UseNwpsGaugeDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="useNwpsGauge">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The useNwpsGauge hook can be used to retrieve gauge metadata from
            the National Weather Service using the National Weather Prediction
            Service (NWPS) API. It requires only the NWS site identifier for the
            requested location and returns data such as the location
            coordinates, flood categories, and current stage.
          </Text>
          <NwpsApiLink />
          <QueryClientWarning />
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <NwpsCard />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Card, H3, useNwpsGauge } from "@usace/groundwork";

const NwpsCard = () => {
  const { data, isPending, isError } = useNwpsGauge({sid: "HLDK2"});

  if (isPending) return <span>Loading NWPS gauge data...</span>;
  if (isError) return <span>NWPS error!</span>;

  return (
    <Card>
      <H3>{data.name}</H3>
      <ul>
        {Object.entries(data.flood.categories).map(([cat, catData]) => (
          <li key={cat}>
            {cat}: <strong>{catData.stage}</strong> {data.flood.stageUnits}
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
          <Code className="gw-p-2">{`useNwpsGauge({...})`}</Code>
        </div>
        <ParamsTable paramsList={hookParams} />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseNwpsGaugeDocs };
export default UseNwpsGaugeDocs;
