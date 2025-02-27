import { useState } from "react";
import { UsaceBox, Code, Modal, Button } from "../../../../lib";
import CodeExample from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Modal",
    href: "/docs/modal",
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
    name: "className",
    type: "string",
    default: "null",
    desc: "Additional class names to apply to the modal dialog.",
  },
];

function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Modal Example">
        <Modal
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          dialogTitle="Modal Title"
          dialogDescription="Modal Description"
          size="2xl"
          buttons={
            <div className="gw-flex gw-justify-end gw-gap-4">
              <Button className="gw-w-full" onClick={() => setIsOpen(false)}>
                I Agree
              </Button>
              <Button
                color="secondary"
                className="gw-w-full"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nobis
          pariatur, nulla aliquam aut ad! Atque, ab tempore, quasi delectus quae
          neque eos alias doloribus quibusdam, voluptatem dignissimos libero
          nemo! Odit praesentium doloribus molestias maiores laboriosam sed
          esse, omnis corporis minima dolorum optio quam atque! Molestiae
          deserunt ullam natus quae repellendus tempore sapiente quod totam
          reprehenderit ipsa, unde cupiditate! Sunt. Ducimus officia quaerat
          minus ea animi laborum earum dolorum nesciunt inventore atque qui,
          enim veritatis cumque totam harum, sunt praesentium! Doloribus
          perspiciatis, sequi soluta quia id mollitia dicta nemo porro. Ut quo
          laborum illum numquam sed nulla repudiandae, consequuntur tempora
          accusamus sequi cumque perspiciatis in eum soluta? Porro perferendis
          impedit ipsam quia modi possimus, dolores illo hic, id placeat
          deleniti! Consectetur cumque iure fugiat ea maxime! Alias vitae
          dolorem, repudiandae odio sapiente quasi asperiores cupiditate ad
          facilis tenetur ut ratione laborum libero eius et neque rerum
          blanditiis itaque a nostrum.
        </Modal>
        <Button
          onClick={() => setIsOpen(true)}
          title="Click to open!"
          className="gw-mb-5"
        >
          Open Modal
        </Button>
        <div>
          <CodeExample
            code={`import { useState } from "react";
import { Modal, Button } from "@usace/groundwork";
function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div>
         <Modal
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          dialogTitle="Modal Title"
          dialogDescription="Modal Description"
          size="2xl"
          buttons={
            <div className="gw-flex gw-justify-end gw-gap-4">
              <Button className="gw-w-full" onClick={() => setIsOpen(false)}>
                I Agree
              </Button>
              <Button
                color="secondary"
                className="gw-w-full"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          }
        >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
        nobis pariatur, nulla aliquam aut ad! Atque, ab tempore, quasi
        delectus quae neque eos alias doloribus quibusdam, voluptatem
        dignissimos libero nemo! Odit praesentium doloribus molestias
        maiores laboriosam sed esse, omnis corporis minima dolorum optio
        quam atque! Molestiae deserunt ullam natus quae repellendus tempore
        sapiente quod totam reprehenderit ipsa, unde cupiditate! Sunt.
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
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Modal ... />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default ModalDocs;
export { ModalDocs };
