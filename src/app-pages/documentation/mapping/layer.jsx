import { UsaceBox, Code, Text } from "../../../../lib";
import { Layer } from "groundwork-geo"
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
        text: "Layer",
        href: "/docs/mapping/layer",
    },
];

const componentProps = [
    {
        name: "id",
        type: "string",
        default: "none",
        desc: "layer id"
    },
    {
        name: "name",
        type: "string",
        default: "none",
        desc: "layer name"
    },
    {
        name: "source",
        type: "string url or geojson file",
        default: "none",
        desc: "the source of the data for the layer"
    },
];


function LayerDocs() {
    return (
        <DocsPage breadcrumbs={pageBreadcrumbs}>
            <UsaceBox title="Layer Class">
                {/* Description of the component and what problem it solves */}
                <div className="gw-pb-6">
                    <Text>
                        A base layer class that other layer types extend.
                    </Text>
                </div>
                {/* Example code */}
                <CodeExample
                    code={`import { Layer } from "@usace/groundwork";

let layer = new Layer({
    id: 'layer',
    name: 'layer',
    source: "https://example.com
})

export default Component;
`}
                />
                {/* Component props documentation */}
                <div className="gw-font-bold gw-text-lg gw-pt-6">
                    Class API - <Code className="gw-p-2">{`Layer`}</Code>
                </div>
                <PropsTable propsList={componentProps} />
            </UsaceBox>
        </DocsPage>
    );
}

export default LayerDocs;
export { LayerDocs };
