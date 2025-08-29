import { useEffect, useState } from "react";
import { UsaceBox, Code, Text, ProgressBar, Button } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Display",
    href: "/#/docs/display",
  },
  {
    text: "Progress Bar",
    href: "/#/docs/display/progress-bar",
  },
];

const componentProps_ProgressBar = [
  {
    name: "progress",
    type: "number",
    default: "0",
    desc: "The progress of the bar. Must be a number between 0 and 100.",
  },
  {
    name: "hideOnDone",
    type: "boolean",
    default: "true",
    desc: "Whether to hide the progress bar when the progress reaches 100.",
  },
  {
    name: "showProgress",
    type: "boolean",
    default: "true",
    desc: "Whether to show the progress percentage text on the bar.",
  },
  {
    name: "bgColor",
    type: "string",
    default: "gw:bg-blue-600",
    desc: "The background color of the progress bar.",
  },
  {
    name: "textColor",
    type: "string",
    default: "gw:text-blue-100",
    desc: "The text color of the progress bar.",
  },
  {
    name: "baseDuration",
    type: "number",
    default: "300",
    desc: "The base duration in milliseconds for the progress bar. The time of animation between frames.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to be added to the progress bar.",
  },
];

function ProgressDocs() {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      if (progress < 100) setProgress(progress + 1 > 100 ? 0 : progress + 1);
    }, 100);
  }, [progress]);
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Progress Bar">
        <div className="gw:pb-6">
          <Text className="gw:mb-3">
            The Progress Bar component is a simple way to display the progress
            of a task or process.
          </Text>
          <Text>
            It can be used to show the progress of a file upload, a form
            submission, or any other task that has a defined start and end
            point.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw:rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          {progress == 100 ? (
            <div>
              Done! 🎉{" "}
              <Button
                title="Restart the loader example!"
                onClick={() => {
                  setProgress(0);
                }}
              >
                Restart
              </Button>
            </div>
          ) : (
            <ProgressBar progress={progress} showProgress={true} />
          )}
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Badge, BadgeButton } from "@usace/groundwork";

function Component() {
    import { ProgressBar, Button } from "@usace/groundwork";
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setProgress(progress + 1 > 100 ? 0 : progress + 1);
        }, 100);
  }, [progress]);
  
  if (progress == 100) return (
        <div>
            Done! 🎉{" "}
            <Button
                title="Restart the loader example!"
                onClick={() => {
                setProgress(0);
                }}
            >
                Restart
            </Button>
        </div>
    )
    return (
        <ProgressBar
        progress={progress}
        showProgress={true}
        />
    )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw:font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw:p-2">{`<ProgressBar />`}</Code>
        </div>
        <PropsTable propsList={componentProps_ProgressBar} />
      </UsaceBox>
    </DocsPage>
  );
}

export default ProgressDocs;
export { ProgressDocs };
