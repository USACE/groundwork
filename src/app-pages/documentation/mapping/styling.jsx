import { UsaceBox, Text } from "../../../../lib";
import { Map, MapLayout, GeoJSONLayer } from "@usace/groundwork-geo";
import { CodeExample } from "../../../app-components/code-example";
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
    text: "Styling",
    href: "/docs/mapping/styling",
  },
];

function StyleDocs() {
  const vectorLayer = new GeoJSONLayer({
    id: "usgs",
    name: "USGS 2.5 Earthquakes",
    source:
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson",
    style: {
      "circle-radius": ["get", "mag"],
      "circle-fill-color": "gray",
      "circle-stroke-color": "white",
      "circle-stroke-width": 0.5,
    },
  });
  const otherVectorLayer = new GeoJSONLayer({
    id: "usgs",
    name: "USGS 2.5 Earthquakes",
    source:
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson",
    style: [
      {
        filter: [">", ["get", "mag"], 5.5],
        style: {
          "text-value": ["concat", ["get", "title"], ", ", ["get", "mag"]],
          "text-font": "16px sans-serif",
          "text-fill-color": "white",
          "text-stroke-color": "gray",
          "text-stroke-width": 2,
        },
      },
      {
        else: true,
        filter: [">", ["get", "mag"], 4.5],
        style: {
          "text-value": ["get", "title"],
          "text-font": "12px sans-serif",
          "text-fill-color": "white",
          "text-stroke-color": "gray",
          "text-stroke-width": 2,
        },
      },
    ],
  });
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Styling">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Add custom styles to each layer. Can also add styles based on
            feature properties.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3 gw-h-96">
          <MapLayout>
            <Map mapId={"styles"} layers={[vectorLayer, otherVectorLayer]} />
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
        style: {
            'circle-radius': ['get', 'mag'],
            'circle-fill-color': 'gray',
            'circle-stroke-color': 'white',
            'circle-stroke-width': 0.5,
        }
    })

    const otherVectorLayer = new GeoJSONLayer({
        id: 'usgs',
        name: "USGS 2.5 Earthquakes",
        source: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson",
        type: "geojson",
        visible: true,
        style: [
            {
                filter: ['>', ['get', 'mag'], 5.5],
                style: {
                    'text-value': [
                        'concat',
                        ['get', 'title'],
                        ', ',
                        ['get', 'mag'],
                    ],
                    'text-font': '16px sans-serif',
                    'text-fill-color': 'white',
                    'text-stroke-color': 'gray',
                    'text-stroke-width': 2,
                },
            },
            {
                else: true,
                filter: ['>', ['get', 'mag'], 4.5],
                style: {
                    'text-value': ['get', 'title'],
                    'text-font': '12px sans-serif',
                    'text-fill-color': 'white',
                    'text-stroke-color': 'gray',
                    'text-stroke-width': 2,
                },
            },
        ]
    })

    return (
        <div style={{ height: "h-screen", width: "w-screen" }}>
            <MapLayout>
                <Map mapId={'styles'} layers={[vectorLayer, otherVectorLayer]}/>
            </MapLayout>
        </div>
    )
}

export default Component;
`}
        />
        {/* Component props documentation */}
      </UsaceBox>
    </DocsPage>
  );
}

export default StyleDocs;
export { StyleDocs };
