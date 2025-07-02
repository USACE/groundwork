import { UsaceBox, Text, Code } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const componentProps = [
  {
    name: "topToolbar",
    type: "Component",
    default: "null",
    desc: "A React component that will sit above the map, positioned along the top edge.",
  },
  {
    name: "bottomToolbar",
    type: "Component",
    default: "null",
    desc: "A React component that will sit above the map, positioned along the bottom edge.",
  },
  {
    name: "rightToolbar",
    type: "Component",
    default: "null",
    desc: "A React component that will sit above the map, positioned along the right edge.",
  },
  {
    name: "leftToolbar",
    type: "Component",
    default: "null",
    desc: "A React component that will sit above the map, positioned along the left edge.",
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
    text: "Map Layout",
    href: "/docs/mapping/map-layout",
  },
];

function MapLayoutDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Map Layout">
        <Text className="gw-pb-6">
          The Map Layout allows users to add panels and toolbars to the map
          component.
        </Text>
        <CodeExample
          code={`import { Map, MapLayout } from "@usace/groundwork";

function Component() {
    return (
        <div style={{ height: "h-screen", width: "w-screen" }}>
            <MapLayout leftSidebar={<LeftSidebar />} topToolbar={<TopToolbar />}>
                <Map mapId={"map-layout"} />
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

export default MapLayoutDocs;
export { MapLayoutDocs };
