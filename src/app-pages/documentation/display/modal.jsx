import { useState } from "react";
import { UsaceBox, Code, Modal, Button, Skeleton } from "../../../../lib";
import CodeExample from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Modal",
    href: "/#/docs/modal",
  },
];

const componentProps = [
  {
    name: "opened",
    type: "boolean",
    default: "false",
    desc: "Controls the visibility of the modal. Closed by default.",
  },
  {
    name: "onClose",
    type: "function",
    default: "null",
    desc: "Function to call when the modal is closed.",
  },
  {
    name: "dialogTitle",
    type: "string",
    default: "null",
    desc: "Title of the modal dialog.",
  },
  {
    name: "dialogDescription",
    type: "string",
    default: "null",
    desc: "Description of the modal dialog.",
  },
  {
    name: "buttons",
    type: "ReactNode",
    default: "null",
    desc: "Button components to display at the bottom of the modal.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "null",
    desc: "Content to display in the modal.",
  },
  {
    name: "size",
    type: "string",
    default: "2xl",
    desc: "Size of the modal dialog. Options include: 'sx', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', 'full'.",
  },
  {
    name: "isStatic",
    type: "boolean",
    default: "false",
    desc: "Whether the element should ignore the internally managed open/closed state.",
  },
  {
    name: "autoFocus",
    type: "boolean",
    default: "false",
    desc: "Whether or not the dialog should receive focus when first rendered.",
  },
  {
    name: "dialogTransition",
    type: "boolean",
    default: "false",
    desc: "Whether the element should render transition attributes like data-closed, data-enter and data-leave.",
  },
  {
    name: "unmount",
    type: "boolean",
    default: "true",
    desc: "Whether the element should be unmounted or hidden based on the open/closed state.",
  },
  {
    name: "role",
    type: "string",
    default: "dialog",
    desc: "The role to apply to the dialog root element. Options include: 'dialog' , 'alertdialog'",
  },
  {
    name: "dialogPanelTransition",
    type: "boolean",
    default: "false",
    desc: "Whether the element should render transition attributes like data-closed, data-enter and data-leave.",
  },
  {
    name: "className",
    type: "string",
    default: "null",
    desc: "Additional class names to apply to the modal dialog.",
  },
];

function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [imageSrc, setImageSrc] = useState(
    `https://www.wpc.ncep.noaa.gov/qpf/p168i.gif?_=${new Date().getTime()}`,
  );

  const refreshImage = () => {
    setIsLoading(true);
    setImageSrc(
      `https://www.wpc.ncep.noaa.gov/qpf/p168i.gif?_=${new Date().getTime()}`,
    );
    setIsOpen(true);
  };

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Modal Example">
        <Modal
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          dialogTitle="QPF Forecast"
          dialogDescription="1-7 Day Quantitative Precipitation Forecast"
          size="2xl"
          staticWidth={true}
          buttons={
            <div className="gw:flex gw:justify-end gw:gap-4">
              <Button className="gw:w-full" onClick={refreshImage}>
                Refresh Image
              </Button>
              <Button
                color="secondary"
                className="gw:w-full"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          }
        >
          <div>
            {isLoading && (
              <Skeleton className="gw:w-[80vw] gw:max-w-[800px] gw:h-[50vh]" />
            )}
            <img
              alt="QPF"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "800px",
                margin: "0 auto",
                display: isLoading ? "none" : "block",
              }}
              src={imageSrc}
              onLoad={() => {
                setIsLoading(false);
              }}
              onError={() => setIsLoading(false)}
            />
            <div className="gw:text-center">
              Last Updated:
              {new Date(parseInt(imageSrc?.split("?_=")[1])).toLocaleString()}
            </div>
          </div>
        </Modal>
        <Button
          onClick={() => setIsOpen(true)}
          title="Click to open!"
          className="gw:mb-5"
        >
          Open Modal
        </Button>
        <div>
          <CodeExample
            code={`import { useState } from "react";
import { Modal, Button } from "@usace/groundwork";
function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [imageSrc, setImageSrc] = useState(
    \`https://www.wpc.ncep.noaa.gov/qpf/p168i.gif?_=\${new Date().getTime()}\`
  );

  const refreshImage = () => {
    setIsLoading(true);
    setImageSrc(
      \`https://www.wpc.ncep.noaa.gov/qpf/p168i.gif?_=\${new Date().getTime()}\`
    );
  };
  return (
        <div>
         <Modal
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          dialogTitle="QPF Forecast"
          dialogDescription="1-7 Day Quantitative Precipitation Forecast"
          size="2xl"
          staticWidth={true}
          buttons={
            <div className="gw:flex gw:justify-end gw:gap-4">
              <Button
                className="gw:w-full"
                onClick={() => {
                  refreshImage();
                  setIsOpen(true);
                }}
              >
                Refresh Image
              </Button>
              <Button
                color="secondary"
                className="gw:w-full"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          }
        >
          <div>
            {isLoading && (
              <Skeleton className="gw:w-[80vw] gw:max-w-[800px] gw:h-[50vh]" />
            )}
            <img
              alt="QPF"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "800px",
                margin: "0 auto",
                display: isLoading ? "none" : "block",
              }}
              src={imageSrc}
              onLoad={() => {
                setIsLoading(false);
              }}
              onError={() => setIsLoading(false)}
            />
            <div className="gw:text-center">
              Last Updated:
              {new Date(parseInt(imageSrc?.split("?_=")[1])).toLocaleString()}
            </div>
          </div>
        </Modal>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    </div>
  )
}

export default Example;
`}
          />
        </div>
        {/* Component props documentation */}
        <div className="gw:font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw:p-2">{`<Modal ... />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default ModalDocs;
export { ModalDocs };
