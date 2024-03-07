import { UsaceBox, Code, Text, Hero } from "../../../../lib";
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
    type: "string",
    default: "''",
    desc: "The url of thee image to display in the Hero.",
  },
  {
    name: "alt",
    type: "string",
    default: "''",
    desc: "The alt text for the image.",
  },
];

function HeroDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Hero">
        {/* Description of the component and what problem it solves */}
        <Text className="pb-6">
          Add the Hero element to put a big image at the top of your page,
          typically we would use the Hero component on a landing page.
        </Text>
        {/* Example usage - remove if not needed */}
        <div className="rounded-md border border-dashed px-6 py-3 mb-3">
          <Hero
            title="Hero Title"
            subtitle="Hero Subtitle"
            image="https://via.placeholder.com/1500x500"
            alt="Placeholder Image"
          />
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Hero } from "@usace/groundwork";

function Component() {
  return (
    <Hero
      title="Hero Title"
      subtitle="Hero Subtitle"
      image="https://via.placeholder.com/1500x500"
      alt="Placeholder Image"
    />
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="font-bold text-lg pt-6">
          Component API - <Code className="p-2">{`<Hero />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default HeroDocs;
export { HeroDocs };
