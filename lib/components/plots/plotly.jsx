import { useEffect, useRef, useCallback, forwardRef, useMemo } from "react";
import Plotly from "plotly.js-dist";
import "./css-override.css";
import gwMerge from "../../gw-merge";

const hoverHandler = (callback) => (data) => {
  callback && callback(data);
};

const Plot = forwardRef(function InternalPlot(
  {
    data = [],
    layout = {},
    config = {},
    revision = 0,
    className = "",
    onHover,
  },
  ref
) {
  if (!ref) ref = useRef(null);

  const handleHover = useCallback(hoverHandler(onHover));

  useEffect(() => {
    if (!ref.current) return;
    Plotly.newPlot(ref.current, data, layout, config);
    ref.current.on("plotly_hover", handleHover);
  }, [ref.current]);

  useEffect(() => {
    if (!ref.current) return;
    Plotly.newPlot(ref.current, data, layout, config);
    ref.current.on("plotly_hover", handleHover);
  }, [data, layout, config, revision]);

  const plotWrapperClass = useMemo(() => {
    return gwMerge("gw-w-full", className);
  });

  return <div ref={ref} className={plotWrapperClass}></div>;
});

export default Plot;
export { Plot };
