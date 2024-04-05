import {
  UsaceBox,
  H3,
  Text,
  Code,
  Card,
  useCdaCatalogTS,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import CdaParamsTable from "../../../app-components/water-management/cda-param-table";
import DocsPage from "../_docs-page";

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
    text: "useCdaCatalogTS",
    href: "/docs/water-management/use-cda-catalog-ts",
  },
];

function UseCdaCatalogTS() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="useCdaCatalogTS">
        {/* Description of the component and what problem it solves */}
        <div className="pb-6">
          <Text>
            The useCdaCatalogTS hook can be used to retrieve a Catalog of
            timeseries data using cwms-data-api (CDA). It requires an office ID
            and a query parameter such as "like", "timeseries-category-like", or
            "timeseries-group-like".
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="pt-6 pb-3">Basic Usage</H3>
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
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
        <div className="font-bold text-lg pt-6">
          Hook Parameters -{" "}
          <Code className="p-2">{`useCdaCatalogTS({...})`}</Code>
        </div>
        <CdaParamsTable requestObject="Catalog" requestType="GET" />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseCdaCatalogTS };
export default UseCdaCatalogTS;
