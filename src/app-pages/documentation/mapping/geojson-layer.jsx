import { UsaceBox, Code, Text } from "../../../../lib";
import { Map, MapLayout, GeoJSONLayer } from "@usace/groundwork-geo";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Mapping",
    href: "/docs/mapping",
  },
  {
    text: "GeoJSON Layer",
    href: "/docs/mapping/geojson-layer",
  },
];

const componentProps = [
  {
    name: "id",
    type: "string",
    default: "none",
    desc: "The id of the layer.",
  },
  {
    name: "name",
    type: "string",
    default: "none",
    desc: "The name of the layer.",
  },
  {
    name: "onClick",
    type: "function",
    default: "none",
    desc: "Passes a click function to each feature in the GeoJSON dataset.",
  },
  {
    name: "source",
    type: "string url or geojson file",
    default: "none",
    desc: "The source of the data for the layer.",
  },
  {
    name: "style",
    type: "string",
    default: "none",
    desc: "Styling for the layer. See Styles page for more details. If left blank, loads default styling for geojson.",
  },
  {
    name: "type",
    type: "string",
    default: "geojson",
    desc: "Describes if the layer source is type geojson or esrijson.",
  },
  {
    name: "visible",
    type: "boolean",
    default: "true",
    desc: "Sets the visibility of the layer. Can be toggled using the LayerTree tool.",
  },
];

function GeoJSONLayerDocs() {
  const vectorLayer = new GeoJSONLayer({
    id: "usgs",
    name: "USGS 2.5 Earthquakes",
    source:
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson",
    type: "geojson",
    visible: true,
    onClick:
      (f, _) =>
      ({ store }) => {
        const props = f.getProperties();

        console.log(props);
      },
  });
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="GeoJSON Layer">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            GeoJSON Layer supports data from a url or a local GeoJSON file. Can
            add onClick function to each feature.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3 gw-h-96">
          <MapLayout>
            <Map mapId={"geojson"} layers={[vectorLayer]} />
          </MapLayout>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { GeoJSON, Map, MapLayout } from "@usace/groundwork-geo";

function Component() {
    const vectorLayer = new GeoJSONLayer({
        id: 'usgs',
        name: "USGS 2.5 Earthquakes",
        source: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson",
        type: "geojson",
        visible: true,
        onClick:
            (f, _) => ({ store }) => {
                const props = f.getProperties();

                console.log(props)
            },
    })

    return (
        <div style={{ height: "h-screen", width: "w-screen" }}>
            <MapLayout>
                <Map mapId={'geojson'} layers={[vectorLayer]}/>
            </MapLayout>
        </div>
    )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Class API - <Code className="gw-p-2">{`GeoJSON Layer`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default GeoJSONLayerDocs;
export { GeoJSONLayerDocs };
