import { UsaceBox, Code, Text, Card, H2, H3 } from "../../../../lib";
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
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to add to the card.",
  },
  {
    name: "stretch",
    type: "boolean",
    default: "false",
    desc: "Whether to stretch the card to the height of the tallest card in the row.",
  },
];

function Card1({ ...props }) {
  return (
    <Card {...props}>
      <H2>This Card has lots of text</H2>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Card>
  );
}

function Card2({ ...props }) {
  return (
    <Card {...props}>
      <H2>This one not so much</H2>
      <Text>quis nostrud exercitation ullamco laboris nisi ut aliquip</Text>
    </Card>
  );
}

function Card3({ ...props }) {
  return (
    <Card {...props}>
      <H2>Maybe a little more</H2>
      <Text>
        Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Nunc
        consequat interdum varius sit amet mattis vulputate enim nulla. Lacus
        sed turpis tincidunt id aliquet. Facilisis magna etiam tempor orci eu
        lobortis elementum nibh tellus. Vitae semper quis lectus nulla at
        volutpat diam ut venenatis. Porttitor lacus luctus accumsan tortor
        posuere ac ut. Lectus nulla at volutpat diam ut venenatis tellus in
        metus. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit.
        Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.
        Viverra maecenas accumsan lacus vel facilisis volutpat. Sagittis id
        consectetur purus ut faucibus pulvinar. Ac placerat vestibulum lectus
        mauris ultrices eros in cursus. Id ornare arcu odio ut sem nulla
        pharetra diam sit. Egestas sed sed risus pretium quam. Nisi porta lorem
        mollis aliquam ut porttitor. Lobortis elementum nibh tellus molestie
        nunc. Vitae auctor eu augue ut lectus arcu bibendum at. Egestas pretium
        aenean pharetra magna ac. Consequat semper viverra nam libero justo.
      </Text>
    </Card>
  );
}

function CardDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Site Wrapper">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Sometimes you want to put a box around your content to make it stand
            out from the rest of the page, use a Card to do that.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3>Basic Example</H3>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <Card>
            <H2>Card Title</H2>
            <Text>Card content goes here</Text>
          </Card>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Card, H2, Text } from "@usace/groundwork";

function Component() {
  return (
    <Card>
      <H2>Card Title</H2>
      <Text>Card content goes here</Text>
    </Card>
  )
}

export default Component;
`}
        />

        {/* Example usage - remove if not needed */}
        <H3 className="gw-mt-6">Easy Flex Layout</H3>
        <Text>
          Use the stretch prop to apply vertical stretch to cards in a flex row
          so they are all the same height.
        </Text>
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <div className="gw-mt-3 gw-flex gw-justify-start gw-items-start gw-gap-3">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
          <div className="gw-mt-3 gw-flex gw-justify-start gw-items-start gw-gap-3">
            <Card1 stretch />
            <Card2 stretch />
            <Card3 stretch />
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Card, H2, Text } from "@usace/groundwork";

function Component() {
  return (
    <div className="gw-mt-3 gw-flex gw-justify-start gw-items-start gw-gap-3">
      <Card {...props}>
        <H2>This Card has lots of text</H2>
        <Text>{...}</Text>
      </Card>
      <Card {...props}>
        <H2>This one not so much</H2>
        <Text>{...}</Text>
      </Card>
      <Card {...props}>
        <H2>Maybe a little more</H2>
        <Text>{...}</Text>
      </Card>
    </div>
    <div className="gw-mt-3 gw-flex gw-justify-start gw-items-start gw-gap-3">
      <Card stretch >
        <H2>This Card has lots of text</H2>
        <Text>{...}</Text>
      </Card>
      <Card stretch >
        <H2>This one not so much</H2>
        <Text>{...}</Text>
      </Card>
      <Card stretch >
        <H2>Maybe a little more</H2>
        <Text>{...}</Text>
      </Card>
    </div>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Card />`}</Code>
        </div>
        <PropsTable propsList={componentProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default CardDocs;
export { CardDocs };
