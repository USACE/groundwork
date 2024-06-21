import { Code } from "../../lib";
import CopyButton from "./copy-button";

// Render a code block for the example
function CodeExample({ code, syntaxHighlight = true, language="jsx" }) {
  return (
    <div className="gw-block gw-relative">
      <div className="gw-block gw-relative gw-p-4 !gw-px-2 gw-whitespace-pre-wrap">
        <Code
          syntaxHighlight={syntaxHighlight}
          language={language}
          className="gw-block"
        >
          {code}
        </Code>
        <div className="gw-absolute gw-top-12 gw-right-12">
          <CopyButton text={code} />
        </div>
      </div>
    </div>
  );
}

export default CodeExample;
export { CodeExample };
