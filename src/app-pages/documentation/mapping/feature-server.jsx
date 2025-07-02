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
    text: "Feature Server",
    href: "/docs/mapping/feature-server",
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

function FeatureServerDocs() {
  const esriPointLayer = new GeoJSONLayer({
    id: "usace-river-mile-markers",
    name: "USACE River Mile Markers",
    source:
      "https://services7.arcgis.com/n1YM8pTrFmm7L4hs/arcgis/rest/services/usace_river_mile_markers/FeatureServer/0",
    type: "esrijson",
    onClick:
      (f, _) =>
      ({ store }) => {
        const props = f.getProperties();

        console.log(props);
      },
  });
  const esriPolygonLayer = new GeoJSONLayer({
    id: "usace-districts",
    name: "USACE Districts",
    source:
      "https://services7.arcgis.com/n1YM8pTrFmm7L4hs/arcgis/rest/services/usace_cw_districts/FeatureServer/0",
    type: "esrijson",
  });

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Feature Server Layer">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>Use the GeoJSON layer class to load ESRI datasets.</Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3 gw-h-96">
          <MapLayout>
            {/* <LayerTree /> */}
            <Map
              mapId={"feature-server"}
              layers={[esriPointLayer, esriPolygonLayer]}
            />
          </MapLayout>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { GeoJSON, Map, MapLayout } from "@usace/groundwork";

function Component() {
    const esriPointLayer = new GeoJSONLayer({
        id: 'usace-river-mile-markers',
        name: 'USACE River Mile Markers',
        source: 'https://services7.arcgis.com/n1YM8pTrFmm7L4hs/arcgis/rest/services/usace_river_mile_markers/FeatureServer/0',
        type: "esrijson",
         onClick:
            (f, _) => ({ store }) => {
                const props = f.getProperties();

                console.log(props)
            }
    })
    const esriPolygonLayer = new GeoJSONLayer({
        id: 'usace-districts',
        name: 'USACE Districts',
        source: 'https://services7.arcgis.com/n1YM8pTrFmm7L4hs/arcgis/rest/services/usace_cw_districts/FeatureServer/0',
        type: "esrijson"
    })

    return (
        <div style={{ height: "h-screen", width: "w-screen" }}>
            <MapLayout>
                <Map mapId={'feature-server'} layers={[esriPointLayer, esriPolygonLayer]}/>
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

export default FeatureServerDocs;
export { FeatureServerDocs };
