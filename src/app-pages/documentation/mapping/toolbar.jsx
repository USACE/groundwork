import { UsaceBox, Code, Text } from "../../../../lib";
import { Map, MapLayout, BasemapPicker, Toolbar, ToolbarButton, Panel, LayerTree, GeoJSONLayer } from "groundwork-geo"
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

import { FaQuestionCircle } from "react-icons/fa";


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
        text: "Toolbar",
        href: "/docs/mapping/toolbar",
    },
];

const componentProps = [
    {
        name: "tools",
        type: "[object]",
        default: "none",
        desc: "Array of tools to render"
    }
];
const TestButton = ({ ...props }) => {
    return (
        <ToolbarButton {...props}>
            <FaQuestionCircle size={24} />
        </ToolbarButton>
    )
}
const TestPanel = ({ children, ...props }) => {
    return (
        <Panel {...props}>
            <h1>Hello World</h1>
        </Panel>
    );
};

const TestTool = {
    id: "test-tool",
    Button: TestButton,
    Panel: TestPanel,
};

function ToolbarDocs() {
    const vectorLayer = new GeoJSONLayer({
        id: 'usgs',
        name: "USGS 2.5 Earthquakes",
        source: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson",
        type: "geojson",
        visible: true
    })
    return (
        <DocsPage breadcrumbs={pageBreadcrumbs}>
            <UsaceBox title="Toolbar">
                {/* Description of the component and what problem it solves */}
                <div className="gw-pb-6">
                    <Text>
                        Adds a top toolbar to the Map. Can add custom tools and others.
                    </Text>
                </div>
                {/* Example usage - remove if not needed */}
                <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3 gw-h-96">
                    <MapLayout topToolbar={<Toolbar tools={[BasemapPicker, TestTool, LayerTree]} />} >
                        <Map mapId={'toolbar'} layers={[vectorLayer]} />
                    </MapLayout>
                </div>
                {/* Example code */}
                <CodeExample
                    code={`import { Map, MapLayout,  BasemapPicker, Toolbar, ToolbarButton, Panel, LayerTree } from "@usace/groundwork";

import { FaQuestionCircle } from "react-icons/fa";

function Component() {
    const TestButton = ({ ...props }) => {
        return (
            <ToolbarButton {...props}>
                <FaQuestionCircle size={24} />
            </ToolbarButton>
        )
    }
    const TestPanel = ({ children, ...props }) => {
        return (
            <Panel {...props}>
                <h1>Hello World</h1>
            </Panel>
        );
    };

    const TestTool = {
        id: "test-tool",
        Button: TestButton,
        Panel: TestPanel,
    };

    return (
        <div style={{ height: "h-screen", width: "w-screen" }}>
            <MapLayout topToolbar={<Toolbar tools={[BasemapPicker, TestTool, LayerTree]} />}>
                <Map mapId={'toolbar'} />
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

export default ToolbarDocs;
export { ToolbarDocs };
