import {
  UsaceBox,
  H3,
  Text,
  Code,
  Card,
  useCdaCatalogTS,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import ParamsTable from "../../../app-components/params-table";
import CdaParamsTable from "../../../app-components/water-management/cda-params-table";
import QueryClientWarning from "../../../app-components/water-management/query-client-warning";
import DocsPage from "../_docs-page";

const cdaParams = [
  {
    name: "like",
    type: "string",
    required: true,
    desc: "Posix regular expression matching against the timeseries id.",
  },
  {
    name: "office",
    type: "string",
    required: false,
    desc: "3-4 letter office name representing the district you want to isolate data to.",
  },
];

const CatalogCard = () => {
  const { data, isPending, isError } = useCdaCatalogTS({
    cdaParams: { office: "LRL", like: "Buckhorn.Flow-Inflow" },
  });

  if (isPending) return <span>Loading catalog data...</span>;
  if (isError) return <span>Catalog error!</span>;

  return (
    <Card className="gw-w-fit">
      <H3>Buckhorn Inflow Records</H3>
      <ul>
        <li>TimeSeries ID: Latest Timestamp</li>
        {data.entries.map((entry) => (
          <li key={entry.name}>
            {entry.name}: {entry.extents?.[0]?.["latest-time"]}
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
    text: "useCdaCatalogTS",
    href: "/#/docs/water-management/use-cda-catalog-ts",
  },
];

function UseCdaCatalogTS() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="useCdaCatalogTS">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The useCdaCatalogTS hook can be used to retrieve a Catalog of
            timeseries data using cwms-data-api (CDA). It requires an office ID
            and a query parameter such as "like", "timeseries-category-like", or
            "timeseries-group-like".
          </Text>
          <QueryClientWarning />
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <CatalogCard />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Card, H3, useCdaCatalogTS } from "@usace/groundwork";

const CatalogCard = () => {
  const { data, isPending, isError } = useCdaCatalogTS({
    cdaParams: { office: "LRL", like: "Buckhorn.Flow-Inflow" },
  });

  if (isPending) return <span>Loading catalog data...</span>;
  if (isError) return <span>Catalog error!</span>;

  return (
    <Card className="w-fit">
      <H3>Buckhorn Inflow Records</H3>
      <ul>
        <li>TimeSeries ID: Latest Timestamp</li>
        {data.entries.map((entry) => (
          <li key={entry.name}>
            {entry.name}: {entry.extents?.[0]?.["latest-time"]}
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
          <Code className="gw-p-2">{`useCdaCatalogTS({...})`}</Code>
        </div>
        <CdaParamsTable requestObject="Catalog" requestType="GET" />
        <div className="gw-font-bold gw-text-lg gw-pt-6">cdaParams</div>
        <ParamsTable paramsList={cdaParams} />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseCdaCatalogTS };
export default UseCdaCatalogTS;
