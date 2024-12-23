import { UsaceBox, H4, Text } from "../../../../lib";
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
];

function Mapping() {
    return (
        <DocsPage breadcrumbs={pageBreadcrumbs}>
            <UsaceBox title="Mapping">
                <Text className="gw-pb-6">
                    Groundwork mapping library using an openlayers map
                </Text>
                <H4>Components</H4>
                <ul>
                    <a className="gw-hover:gw-underline" href="/docs/mapping/map">
                        <li>Map - Map component.</li>
                    </a>
                    <a className="gw-hover:gw-underline" href="/docs/mapping/layer">
                        <li>Layer - Generic Layer class types to add to map.</li>
                    </a>
                    <a className="gw-hover:gw-underline" href="/docs/mapping/geojson-layer">
                        <li>GeoJSON Layer -GeoJSON Layer class types to add to map.</li>
                    </a>
                    <a className="gw-hover:gw-underline" href="/docs/mapping/feature-server">
                        <li>Feature Server - ArcGIS compatible GeoJSON layer.</li>
                    </a>
                    <a className="gw-hover:gw-underline" href="/docs/mapping/map-server">
                        <li>Map Server - ArcGIS compatible map service layer.</li>
                    </a>
                </ul>
            </UsaceBox>
        </DocsPage>
    );
}

export default Mapping;
export { Mapping };
