import { UsaceBox, Code, Text, Image } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
    {
        text: "Documentation",
        href: "/docs",
    },
    {
        text: "Display",
        href: "/docs/display",
    },
    {
        text: "Image",
        href: "/docs/display/image",
    },
];

const componentProps = [
    {
        name: "alt",
        type: "string",
        default: "undefined",
        desc: "The alt text of the image.",
    },
    {
        name: "aria-label",
        type: "string",
        default: "undefined",
        desc: "ARIA label for image.",
    },
    {
        name: "image",
        type: "string",
        default: "undefined",
        desc: "The source of the image to be displayed.",
    },
    {
        name: "imgHeight",
        type: "integer",
        default: "undefined",
        desc: "The image height.",
    },
    {
        name: "imgWeight",
        type: "integer",
        default: "undefined",
        desc: "The image width.",
    }
];

function ImageDocs() {
    return (
        <DocsPage breadcrumbs={pageBreadcrumbs}>
            <UsaceBox title="Image">
                {/* Description of the component and what problem it solves */}
                <div className="gw-pb-6">
                    <Text>
                        A generic image component
                    </Text>
                </div>
                {/* Example usage - remove if not needed */}
                <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
                    <div className="gw-flex gw-justify-center gw-items-center">
                        <Image
                            alt="An example image"
                            aria-label="An example image"
                            image="nww-lucky-peak-dam.jpg"
                            imgHeight={200}
                            imgWidth={400}
                        />
                    </div>
                </div>
                {/* Example code */}
                <CodeExample
                    code={`import { Image } from "@usace/groundwork";


function Component() {
  return (
       <Image
            alt="Lucky Peak Dam"
            aria-label="Lucky Peak Dam"
            image="/nww-lucky-peak-dam.jpg"
            imgHeight={400}
            imgWidth={800}
        />
    )
}

export default Component;
`}
                />
                {/* Component props documentation */}
                <div className="gw-font-bold gw-text-lg gw-pt-6">
                    Component API - <Code className="gw-p-2">{`<Image/>`}</Code>
                </div>
                <PropsTable propsList={componentProps} />
            </UsaceBox>
        </DocsPage>
    );
}

export default ImageDocs;
export { ImageDocs };
