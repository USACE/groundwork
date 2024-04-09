import { useCallback, useState } from "react";
import { UsaceBox, Code, Text, Plot, H2, H3 } from "../../../../lib";
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
    text: "Plotly.js Wrapper",
    href: "/docs/plots/plotly-wrapper",
  },
];

const componentProps = [
  {
    name: "data",
    type: "array of objects",
    default: "[]",
    desc: "Array of data objects, each object represents a trace on the plot. See the Plotly.js documentation for more information.",
  },
  {
    name: "layout",
    type: "object",
    default: "{}",
    desc: "Object representing the layout of the plot. See the Plotly.js documentation for more information.",
  },
  {
    name: "config",
    type: "object",
    default: "{}",
    desc: "Object representing the configuration of the plot. See the Plotly.js documentation for more information.",
  },
  {
    name: "revision",
    type: "number",
    default: "0",
    desc: "A number that when changed will force the plot to redraw. Useful for live updates.",
  },
  {
    name: "onHover",
    type: "function",
    default: "null",
    desc: "A function that will be called when the user hovers over the plot. The function will be passed the hover data.",
  },
  {
    name: "className",
    type: "string",
    default: "''",
    desc: "Additional classes to apply to the plot container.",
  },
  {
    name: "ref",
    type: "React.RefObject",
    default: "undefined",
    desc: "A ref object that can be used to call Plotly methods directly.",
  },
];

/**
 * Data for the basic example
 */
var basicTrace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: "markers",
  type: "scatter",
};

var basicTrace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: "lines",
  type: "scatter",
};

var basicTrace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: "lines+markers",
  type: "scatter",
};

const basicLayout = {
  title: "A Basic Line and Scatter Plot",
};

/**
 * Data for the live update example
 */
var liveTrace1 = {
  x: [1],
  y: [Math.random() * 10],
  type: "scatter",
};

var liveTrace2 = {
  x: [1],
  y: [Math.random() * 10],
  type: "scatter",
};

function addRandomData(cb) {
  if (liveTrace1.x.length > 20) {
    liveTrace1.x.shift();
    liveTrace1.y.shift();
    liveTrace2.x.shift();
    liveTrace2.y.shift();
  }
  liveTrace1.x = [...liveTrace1.x, liveTrace1.x[liveTrace1.x.length - 1] + 1];
  liveTrace1.y = [...liveTrace1.y, Math.random() * 10];
  liveTrace2.x = [...liveTrace2.x, liveTrace2.x[liveTrace2.x.length - 1] + 1];
  liveTrace2.y = [...liveTrace2.y, Math.random() * 10];
  cb && cb();
}

const liveTraceLayout = {
  title: "A Fancy Plot",
};

// place to hold our interval outside of the component scope
var interval;

/**
 * Data for the custom user interaction example
 */
function zeroMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(Array(cols).fill(0));
  }
  return matrix;
}

const heatTrace = {
  type: "heatmap",
  hoverinfo: "none",
  z: zeroMatrix(50, 50),
};

let lastHover = [null, null];

const heatTraceLayout = {
  title: "A Silly Heatmap",
};

/**
 * Shared configuration for all plots
 */
const sharedConfig = {
  displaylogo: false,
};

function PlotlyWrapperDocs() {
  const [liveRevision, setLiveRevision] = useState(0);
  const [heatmapRevision, setHeatmapRevision] = useState(0);

  /**
   * Setup the live update interval, just loads dummy data on some interval
   */
  if (interval) window.clearInterval(interval);
  interval = window.setInterval(() => {
    addRandomData(() => {
      setLiveRevision(liveRevision + 1);
    });
  }, 1000);

  /**
   * Setup for the heatmap hover event
   */
  const handleHover = useCallback((hoverData) => {
    const pt = hoverData?.points[0];
    const x = pt.x;
    const y = pt.y;
    const z = pt.z;
    if (lastHover[0] === x && lastHover[1] === y) {
      return;
    } else {
      heatTrace.z[y][x] = z + 1;
      lastHover = [x, y];
      setHeatmapRevision(heatmapRevision + 1);
    }
  });

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Plotly.js Wrapper">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Our <Code>{`<Plot/>`}</Code> component is a pretty simple wrapper
            around the popular Plotly.js library. Plotly started as a Python
            plotting library and has expanded into a number of supported
            languages. There are a lot of things you can do with Plotly, way
            more than we could document here, so below are some examples of
            using our component, but you should review the{" "}
            <a
              href="https://plotly.com/javascript/"
              target="_blank"
              rel="noreferrer"
              className="gw-underline"
            >
              Plotly.js documentation
            </a>{" "}
            in order to get a full understanding of the API.
          </Text>
          <Text className="gw-pt-3">
            The data, layout and config props map directly to the options
            exposed in the{" "}
            <Code>{`Plotly.newPlot(el, data, layout, config)`}</Code> function.
            There are a couple of additional props that we've added to make it
            easier to update the plot when data changes (revision) and to handle
            various events. If you want low-level control over the plot, you can
            pass a ref to the Plot component and call Plotly methods directly.
          </Text>
        </div>

        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Basic Plot</H3>
        <Text className="gw-pb-3">
          A sample chart right off of the{" "}
          <a
            className="gw-underline"
            target="_blank"
            rel="noreferrer"
            href="https://plotly.com/javascript/line-and-scatter/"
          >
            Plotly example page
          </a>
          .
        </Text>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <Plot
            data={[basicTrace1, basicTrace2, basicTrace3]}
            layout={basicLayout}
            config={sharedConfig}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Plot } from "@usace/groundwork";

let trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: "markers",
  type: "scatter",
};

let trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: "lines",
  type: "scatter",
};

let trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: "lines+markers",
  type: "scatter",
};

const basicLayout = {
  title: "A Basic Line and Scatter Plot",
};

const config = {
  displaylogo: false,
};

function Component() {
  return (
    <Plot
      data={[trace1, trace2, trace3]}
      layout={layout}
      config={config}
    />
  )
}

export default Component;
`}
        />

        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Live Updates</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <Plot
            revision={liveRevision}
            data={[liveTrace1, liveTrace2]}
            layout={liveTraceLayout}
            config={sharedConfig}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Plot } from "@usace/groundwork";
import { useState } from "react";

var trace1 = {
  x: [1],
  y: [Math.random() * 10],
  type: "scatter",
};

var trace2 = {
  x: [1],
  y: [Math.random() * 10],
  type: "scatter",
};

const layout = {
  title: "A Fancy Plot",
};

const config = {
  displaylogo: false,
};

function addRandomData(callback) {
  if (trace1.x.length > 20) {
    trace1.x.shift();
    trace1.y.shift();
    trace2.x.shift();
    trace2.y.shift();
  }
  trace1.x = [...trace1.x, trace1.x[trace1.x.length - 1] + 1];
  trace1.y = [...trace1.y, Math.random() * 10];
  trace2.x = [...trace2.x, trace2.x[trace2.x.length - 1] + 1];
  trace2.y = [...trace2.y, Math.random() * 10];
  callback && callback();
}

let interval;

function Component() {
  const [revision, setRevision] = useState(0);

  if (interval) window.clearInterval(interval);
  interval = window.setInterval(() => {
    addRandomData(() => {
      setRevision(revision + 1);
    });
  }, 1000);

  return (
    <Plot
      revision={revision}
      data={[trace1, trace2]}
      layout={layout}
      config={config}
    />
  )
}

export default Component;
`}
        />

        {/* Example usage - remove if not needed */}
        <H3 className="gw-pt-6 gw-pb-3">Custom User Interaction</H3>
        <Text className="gw-pb-3">
          When you want a heatmap but don't have data, let the user create one
          themselves. Each cell counts the number of times it has been hovered
          over and the color will update accordingly. Have fun making some pixel
          art!
        </Text>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <Plot
            revision={heatmapRevision}
            data={[heatTrace]}
            layout={heatTraceLayout}
            config={sharedConfig}
            onHover={handleHover}
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Plot } from "@usace/groundwork";
import { useCallback, useState } from "react";

const trace = {
  type: "heatmap",
  hoverinfo: "none",
  z: zeroMatrix(50, 50),  //custom function to create a 50x50 matrix of 0s
};

let lastHover = [null, null];

const layout = {
  title: "A Silly Heatmap",
};

function Component() {
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
    <Plot
      revision={revision}
      data={[trace]}
      layout={layout}
      config={config}
      onHover={handleHover}
    />
  )
}

export default Component;
`}
        />

        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Plot />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default PlotlyWrapperDocs;
export { PlotlyWrapperDocs };
