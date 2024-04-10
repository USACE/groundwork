import {
  UsaceBox,
  H3,
  Text,
  Code,
  Card,
  useCdaLocation,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import CdaParamsTable from "../../../app-components/water-management/cda-param-table";
import QueryClientWarning from "../../../app-components/water-management/query-client-warning";
import DocsPage from "../_docs-page";

const LocationCard = () => {
  const { data, isPending, isError } = useCdaLocation({
    cdaParams: { location: "Buckhorn", office: "LRL" },
  });

  if (isPending) return <span>Loading location data...</span>;
  if (isError) return <span>Location error!</span>;

  return (
    <Card className="gw-w-96">
      <H3>Buckhorn Location Data</H3>
      <ul>
        {Object.entries(data) // Convert the response object to an array
          .slice(0, 4) // Get the first four key-value pairs
          .map(([key, value]) => (
            <li key={key}>
              {key}: {value}
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
    text: "useCdaLocation",
    href: "/docs/water-management/use-cda-location",
  },
];

function UseCdaLocation() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="useCdaLocation">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            The useCdaLocation hook can be used to retrieve location data using
            cwms-data-api (CDA). It requires only a location ID and an office
            ID, but can be further customized using additional parameters
            provided through CDA if desired.
          </Text>
          <QueryClientWarning />
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Basic Usage</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <LocationCard />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Card, H3, useCdaLocation } from "@usace/groundwork";

const LocationCard = () => {
  const { data, isPending, isError } = useCdaLocation({
    cdaParams: { location: "Buckhorn", office: "LRL" },
  });

  if (isPending) return <span>Loading location data...</span>;
  if (isError) return <span>Location error!</span>;

  return (
    <Card className="gw-w-fit">
      <H3>Buckhorn Location Data</H3>
      <ul>
        {Object.entries(data) // Convert the response object to an array
          .slice(0, 4) // Get the first four key-value pairs
          .map(([key, value]) => (
            <li key={key}>
              {key}: {value}
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
          <Code className="gw-p-2">{`useCdaLocation({...})`}</Code>
        </div>
        <CdaParamsTable requestObject="Location" requestType="GET" />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseCdaLocation };
export default UseCdaLocation;
