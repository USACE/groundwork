import { UsaceBox, Code, Text } from "../../../../lib";
import { Map, MapLayout, TileLayer } from "@usace/groundwork-geo";
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
    text: "Tile Layer",
    href: "/docs/mapping/tile-layer",
  },
];

const componentProps = [
  {
    name: "id",
    type: "string",
    default: "none",
    desc: "The id of the layer",
  },
  {
    name: "name",
    type: "string",
    default: "none",
    desc: "The name of the layer",
  },
  {
    name: "source",
    type: "string url or geojson file",
    default: "none",
    desc: "The url of the dataset.",
  },
  {
    name: "style",
    type: "string",
    default: "none",
    desc: "Styling for the layer. See Styles page for more details. If left blank, loads default styling for geojson.",
  },
  {
    name: "visible",
    type: "boolean",
    default: "true",
    desc: "Sets the visibility of the layer. Can be toggled using the LayerTree tool.",
  },
];

function XYZTileLayerDocs() {
  const exampleTile = new TileLayer({
    id: "xyz",
    name: "XYZ",
    source: "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png",
  });

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="XYZ Tile Layer">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>Tile layer class for XYZ datasets.</Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3 gw-h-96 ">
          <MapLayout>
            <Map mapId="tile-layer" layers={[exampleTile]} />
          </MapLayout>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { TileLayer, Map, MapLayout  } from "@usace/groundwork";

function Component() {
   const exampleTile = new TileLayer({
        id: 'xyz',
        name: "XYZ",
        source: "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png"
    })
    
    return (
        <div style={{ height: "h-screen", width: "w-screen" }}>
            <MapLayout>
                <Map mapId={'tile'} layers={[exampleTile]} />
            </MapLayout>
        </div>
    )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<SiteWrapper />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default XYZTileLayerDocs;
export { XYZTileLayerDocs };
