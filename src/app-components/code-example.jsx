import { Code } from "../../lib";
import CopyButton from "./copy-button";

// render a code block for the example
function CodeExample({ code }) {
  return (
    <Code className="block relative p-4 px-2 whitespace-pre-wrap">
      {code}
      <div className="absolute top-2 right-2">
        <CopyButton text={code} />
      </div>
    </Code>
  );
}

export default CodeExample;
export { CodeExample };
