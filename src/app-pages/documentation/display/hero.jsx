import { UsaceBox, Code, Text, Hero, Badge, H2 } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
];

const componentProps = [
  {
    name: "title",
    type: "string",
    default: "''",
    desc: "The title of the Hero.",
  },
  {
    name: "subtitle",
    type: "string",
    default: "''",
    desc: "The subtitle of the Hero.",
  },
  {
    name: "image",
    type: "string || string[]",
    default: "''",
    desc: "The image or list of images to display in the hero.",
  },
  {
    name: "alt",
    type: "string || string[]",
    default: "''",
    desc: "The alt text or list of text for the image(s).",
  },
  {
    name: "duration_ms",
    type: "integer",
    default: "12000",
    desc: "Optionally: Given a list of images set the duration (in ms) between each image. Defaults to 12s or 12000ms.",
  },
  {
    name: "imgHeight",
    type: "string",
    default: "null",
    desc: 'Optional: Sets the height style attribute of the <img> to a specific "height" that you can specify here. I.e. "30vh"',
  },
  {
    name: "imgWidth",
    type: "string",
    default: "null",
    desc: 'Optional: Sets the width style attribute of the <img> to a specific "width" that you can specify here. I.e. "30vw"',
  },
  {
    name: "opacity",
    type: "decimal",
    default: ".5",
    desc: 'Optional: Sets the brightness of the image. 1 is darkest, 0 is brightest. I.e. ".3"',
  }
];

function HeroDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Hero">
        {/* Description of the component and what problem it solves */}
        <Text className="gw-pb-6">
          Add the Hero element to put a big image at the top of your page,
          typically we would use the Hero component on a landing page.
        </Text>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <Hero
            title="Hero Title"
            subtitle="Hero Subtitle"
            image="1500x400.png"
            alt="Placeholder Image"
            opacity={.5}
          />
        </div>
        <Badge
          color="yellow"
          className={
            "gw-m-5 gw-w-full gw-flex gw-flex-col"
          }
        >
          ⚠ NOTE: When using images on your site please consider compressing
          them!
          <div
            className="gw-cursor-pointer gw-underline gw-decoration-solid gw-decoration-gray-500"
            onClick={() => {
              // Navigate to the img compression tag on the page
              // # TODO: Hash router seems to break hash referencing? 
              document
                .getElementById("img-compression")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Click to read more: Image Compression
          </div>{" "}
        </Badge>
        {/* Example code */}
        <div>
          <CodeExample
            code={`import { Hero } from "@usace/groundwork";

function Component() {
  return (
    <Hero
      title="Hero Title"
      subtitle="Hero Subtitle"
      image="https://via.placeholder.com/1500x500"
      alt="Placeholder Image"
      opacity={.5}
    />
  )
}

export default Component;
`}
          />
          <Text className="gw-pb-6">
            Specify an image and alt text for the Hero component.
          </Text>
        </div>
        <UsaceBox title="Rotating Example">
          <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
            <Hero
              title="Hero Title"
              subtitle="Hero Subtitle"
              className="h-48"
              imgHeight={"30vh"}
              image={[
                "FT_GIBSON_20181115.min.jpg",
                "taylorsville-SPPRu4Rw.jpg",
                "nww-lucky-peak-dam.jpg",
              ]}
              alt={["Ft Gibson Dam", "Taylorsville", "NWW Lucky Peak Dam"]}
              opacity={.5}
            />
          </div>
          <div>
            <CodeExample
              code={`import { Hero } from "@usace/groundwork";
// List Example with multiple images
function Component() {
  return (
    <Hero
        title="Hero Title"
        subtitle="Hero Subtitle"
        image={["https://via.placeholder.com/1500x500", "https://via.placeholder.com/1500x500"]}
        alt={["Placeholder Image1", "Placeholder Image2"]}
        duration_ms={12000}  // This is default to 12s - but showing its usage here!
        opacity={.5}
        />
  )
}

export default Component;
`}
            />
            <Text className="gw-pb-6">
              The Hero component can also take a list of images and alt text for
              a slideshow effect.
            </Text>
          </div>
          {/* Component props documentation */}
          <div className="gw-font-bold gw-text-lg gw-pt-6">
            Component API - <Code className="gw-p-2">{`<Hero />`}</Code>
          </div>
          <PropsTable propsList={componentProps} />
        </UsaceBox>
      </UsaceBox>

      <div id="img-compression">
        <UsaceBox title="Image Compression">
          When placing images on your site it is advisable for a good user
          experience to compress the image. There are modern compression
          techniques that can help reduce the loss of image quality. We
          recommend{" "}
          <a
            className="gw-underline gw-decoration-solid gw-decoration-gray-500"
            href="https://tinypng.com"
          >
            TinyPNG.com
          </a>{" "}
          as a free online tool to get started!
        </UsaceBox>
      </div>
    </DocsPage>
  );
}

export default HeroDocs;
export { HeroDocs };
