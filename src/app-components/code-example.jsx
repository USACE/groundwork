import { Code } from "../../lib";
import CopyButton from "./copy-button";

// render a code block for the example
function CodeExample({ code }) {
  return (
    <Code className="gw-block gw-relative gw-p-4 !gw-px-2 gw-whitespace-pre-wrap">
      {code}
      <div className="gw-absolute gw-top-2 gw-right-2">
        <CopyButton text={code} />
      </div>
    </Code>
  );
}

export default CodeExample;
export { CodeExample };
