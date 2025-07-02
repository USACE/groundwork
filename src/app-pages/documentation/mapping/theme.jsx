import { UsaceBox, Text, Code } from "../../../../lib";
import {
  Map,
  MapLayout,
  Toolbar,
  cobalt,
  BasemapPicker,
} from "@usace/groundwork-geo";
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
    text: "Theme",
    href: "/docs/mapping/theme",
  },
];

function ThemeDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Theme">
        <Text className="gw-pb-6">
          Create a custom theme and apply it to the Map Layout component.
        </Text>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3 gw-h-96 ">
          <MapLayout
            theme={cobalt}
            topToolbar={<Toolbar tools={[BasemapPicker]} />}
          >
            <Map mapId={"theme"} />
          </MapLayout>
        </div>
        <CodeExample
          code={`const cobalt = {
    colors: {
        sidebar: {
            foreground: "#aaa",
            background: "#15232d",
            selectedForeground: "#fff",
            popoverForeground: "#fff",
            popoverBackground: "#193549",
            popoverBorder: "#406179cc",
        },
        panel: {
            foreground: "#fff",
            background: "#193549",
            resizeHandle: "#234E6D",
        },
        treeview: {
            backgroundHover: "#234E6D",
            hierarchyBorder: "#aaaaaa59",
        },
        toolbar: {
            foreground: "#fff",
            foregroundDisabled: "#aaa",
            background: "#15232d",
            backgroundHover: "#15232d",
            backgroundActive: "#15232d",
            backgroundDisabled: "#15232d",
            inputBackground: "#193549",
            inputForeground: "#fff",
            inputBorder: "#0d3a58",
            inputBorderFocused: "#406179cc",
            searchItemBackground: "#193549",
            searchItemForeground: "#fff",
            searchItemBackgroundHover: "#234E6D",
        },
    },
};

export default cobalt;
export { cobalt };`}
        />
        <CodeExample
          code={`import { Map, MapLayout } from "@usace/groundwork";
import cobalt from "./cobalt";

function Component() {
    return (
        <div style={{ height: "h-screen", width: "w-screen" }}>
            <MapLayout theme={cobalt} topToolbar={<Toolbar tools={[BasemapPicker]} />}>
                <Map mapId={"theme"} />
            </MapLayout>
        </div>
    )
}

export default Component;
`}
        />
      </UsaceBox>
    </DocsPage>
  );
}

export default ThemeDocs;
export { ThemeDocs };
