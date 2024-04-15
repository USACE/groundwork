import {
  UsaceBox,
  H3,
  Text,
  Code,
  Card,
  useCdaLocation,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import ParamsTable from "../../../app-components/params-table";
import CdaParamsTable from "../../../app-components/water-management/cda-params-table";
import QueryClientWarning from "../../../app-components/water-management/query-client-warning";
import DocsPage from "../_docs-page";

const cdaParams = [
  {
    name: "location",
    type: "string",
    required: true,
    desc: "Specifies the CWMS Location ID for the requested location.",
  },
  {
    name: "office",
    type: "string",
    required: false,
    desc: "Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location information from all offices shall be returned.",
  },
  {
    name: "unit",
    type: "string",
    required: false,
    desc: "Specifies the unit or unit system of the response. Options: 'EN', 'SI', specific units (e.g. 'ft')",
  },
];

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
        <div className="gw-font-bold gw-text-lg gw-pt-6">cdaParams</div>
        <ParamsTable paramsList={cdaParams} />
      </UsaceBox>
    </DocsPage>
  );
}

export { UseCdaLocation };
export default UseCdaLocation;
