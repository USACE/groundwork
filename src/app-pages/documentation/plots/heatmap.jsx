import { useCallback, useState } from "react";
import { UsaceBox, Code, Text, Plot } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Plots",
    href: "/docs/plots",
  },
  {
    text: "Heatmap",
    href: "/docs/plots/heatmap",
  },
];

const componentProps = [
  {
    name: "",
    type: "",
    default: "",
    desc: "",
  },
];

function zeroMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(Array(cols).fill(0));
  }
  return matrix;
}

const trace = {
  type: "heatmap",
  hoverinfo: "none",
  z: zeroMatrix(50, 50),
};

let lastHover = [null, null];

function HeatmapDocs() {
  const [revision, setRevision] = useState(0);

  const handleHover = useCallback((hoverData) => {
    const pt = hoverData?.points[0];
    const x = pt.x;
    const y = pt.y;
    const z = pt.z;
    if (lastHover[0] === x && lastHover[1] === y) {
      return;
    } else {
      trace.z[y][x] = z + 1;
      lastHover = [x, y];
      setRevision(revision + 1);
    }
  });

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Heatmap">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>Description of component</Text>
          <Text className="gw-pt-3">Description continued</Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <Plot
            data={[trace]}
            layout={{
              width: 800,
              height: 500,
            }}
            onHover={handleHover}
            revision={revision}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import {  } from "@usace/groundwork";

function Component() {
  return ()
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

export default HeatmapDocs;
export { HeatmapDocs };
