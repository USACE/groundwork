import { Code } from "../../lib";

// render a code block for the example
function CodeBlock({ code }) {
  return (
    <Code className="gw-block gw-relative gw-p-4 !gw-px-2 gw-whitespace-pre-wrap">
      {code}
    </Code>
  );
}

export default CodeBlock;
export { CodeBlock };
