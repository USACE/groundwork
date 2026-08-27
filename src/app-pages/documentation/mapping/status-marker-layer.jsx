import { UsaceBox, Code, Text } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const BASE_URL = import.meta.env.BASE_URL;

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: `${BASE_URL}#/docs`,
  },
  {
    text: "Mapping",
    href: `${BASE_URL}#/docs/mapping`,
  },
  {
    text: "Status Marker Layer",
    href: `${BASE_URL}#/docs/mapping/status-marker-layer`,
  },
];

const componentProps = [
  {
    name: "source",
    type: "array or GeoJSON FeatureCollection",
    default: "[]",
    desc: "Point records to render. GeoJSON coordinates must be longitude, latitude.",
  },
  {
    name: "statusAccessor",
    type: "function",
    default: "threshold status from statusValue or value",
    desc: "Returns the status bucket used to choose the marker color. Use a numeric bucket, missing, or transparent.",
  },
  {
    name: "shapeAccessor",
    type: "function",
    default: "reservoir/project triangle, lock square, other diamond",
    desc: "Returns circle, triangle, square, or diamond for each marker.",
  },
  {
    name: "labelAccessor",
    type: "function",
    default: "mapLabel, publicName, name, or id",
    desc: "Returns the text label drawn above the marker.",
  },
  {
    name: "fit",
    type: "boolean",
    default: "false",
    desc: "Fits the map view to the marker extent after the layer is added.",
  },
  {
    name: "onClick",
    type: "function",
    default: "undefined",
    desc: "Receives the clicked OpenLayers feature and map coordinate.",
  },
];

function StatusMarkerLayerDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Status Marker Layer">
        <Text className="gw-pb-6">
          StatusMarkerLayer renders point datasets with configurable status
          colors, marker shapes, labels, and click handling. It is intended for
          office-neutral status maps where the application owns the data query
          and domain-specific grouping.
        </Text>
        <CodeExample
          code={`import {
  getThresholdStatus,
  Map,
  MapLayout,
  StatusLegend,
  StatusMarkerLayer
} from "@usace/groundwork-geo";

const locations = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-95.8, 35.3] },
      properties: {
        name: "Example.Project",
        publicName: "Example Project",
        locationType: "reservoir",
        statusValue: 62
      }
    }
  ]
};

const layers = [
  new StatusMarkerLayer({
    id: "project-status",
    name: "Project Status",
    source: locations,
    fit: true,
    statusAccessor: (location) =>
      location.statusValue == null
        ? "missing"
        : getThresholdStatus(location.statusValue),
    onClick: (feature) => console.log(feature.getProperties())
  })
];

function Component() {
  return (
    <div>
      <MapLayout>
        <Map mapId="status-map" layers={layers} />
      </MapLayout>
      <StatusLegend title="Percent Full/Flow" />
    </div>
  );
}`}
        />
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Class API - <Code className="gw-p-2">{`StatusMarkerLayer`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default StatusMarkerLayerDocs;
export { StatusMarkerLayerDocs };
