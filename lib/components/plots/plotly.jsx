import { useEffect, useRef, useCallback, forwardRef } from "react";
import clsx from "clsx";
import Plotly from "plotly.js-dist";
import "./css-override.css";

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

  return <div ref={ref} className={clsx("gw-w-full", className)}></div>;
});

export default Plot;
export { Plot };
