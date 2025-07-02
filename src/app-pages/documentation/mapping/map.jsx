import { UsaceBox, Text, Code } from "../../../../lib";
import { Map, MapLayout } from "@usace/groundwork-geo";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const componentProps = [
  {
    name: "mapId",
    type: "string",
    default: "null",
    desc: "Map ID to be referenced in the Maps Object.",
  },
  {
    name: "layers",
    type: "array",
    default: "[]",
    desc: "An array of Layers to be added to the map. Layers will be drawn in array order.",
  },
  {
    name: "viewConfig",
    type: "object",
    default: `{
            center: [-96, 39],
            zoom: 4
        }`,
    desc: "Sets the center and zoom level of the map.",
  },
];

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
    text: "Map",
    href: "/docs/mapping/map",
  },
];

function MapDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Map">
        <Text className="gw-pb-6">
          The Map component is the building block of the library. It must be
          passed as a child to the Map Layout component.
        </Text>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3 gw-h-96 ">
          <MapLayout>
            <Map mapId={"home"} />
          </MapLayout>
        </div>
        <CodeExample
          code={`import { Map, MapLayout } from "@usace/groundwork";

function Component() {
    const config = {
        center: [-90.8, 42.5],
        zoom: 10
    }
    return (
        <div style={{ height: "h-screen", width: "w-screen" }}>
            <MapLayout>
                <Map mapId={"home"} viewConfig={config}/>
            </MapLayout>
        </div>
    )
}

export default Component;
`}
        />
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Map />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default MapDocs;
export { MapDocs };
