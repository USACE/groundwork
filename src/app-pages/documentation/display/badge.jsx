import { UsaceBox, Code, Text, Badge, BadgeButton } from "../../../../lib";
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
    text: "Badge",
    href: "/#/docs/display/badge",
  },
];

const componentProps_Badge = [
  {
    name: "color",
    type: "string",
    default: "zinc",
    desc: "The color of the badge.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to be added to the badge.",
  },
  {
    name: "...props",
    type: "misc",
    default: "undefined",
    desc: "Additional props to be added to the badge.",
  },
];

const componentProps_BadgeButton = [
  {
    name: "href",
    type: "string",
    default: "''",
    desc: "The URL the badge button will link to if you want to use a Link.",
  },
  {
    name: "color",
    type: "string",
    default: "zinc",
    desc: "The color of the badge.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to be added to the badge.",
  },
  {
    name: "...props",
    type: "misc",
    default: "undefined",
    desc: "Additional props to be added to the badge. Includes all interaction props such as onClick.",
  },
];

const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "zinc",
];

function BadgeDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Badge">
        {/* Description of the component and what problem it solves */}
        <div className="gw:pb-6">
          <Text>
            Use a badge to display a number or short message you want to
            highlight for the user. Badges can also be rendered as buttons to
            allow interactivity.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw:rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          <div className="gw:flex gw:flex-wrap gw:items-center gw:mb-3">
            {colors.map((color) => {
              return (
                <Badge color={color} key={color} className="gw:ml-2">
                  {color}
                </Badge>
              );
            })}
          </div>
          <div className="gw:flex gw:flex-wrap gw:items-center">
            {colors.map((color) => {
              return (
                <BadgeButton
                  color={color}
                  key={color}
                  className="gw:ml-2"
                  onClick={() => {
                    window.alert(`Clicked the ${color} badge`);
                  }}
                >
                  {color}
                </BadgeButton>
              );
            })}
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Badge, BadgeButton } from "@usace/groundwork";

function Component() {
  return (
    <>
      <div className="flex flex-wrap items-center mb-3">
        {colors.map((color) => {
          return (
            <Badge color={color} key={color} className="ml-2">
              {color}
            </Badge>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center">
        {colors.map((color) => {
          return (
            <BadgeButton
              color={color}
              key={color}
              className="ml-2"
              onClick={() => {
                window.alert(\`Clicked the \${color} badge\`);
              }}
            >
              {color}
            </BadgeButton>
          );
        })}
      </div>
    </>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw:font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw:p-2">{`<Badge />`}</Code>
        </div>
        <PropsTable propsList={componentProps_Badge} />

        {/* Component props documentation */}
        <div className="gw:font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw:p-2">{`<BadgeButton />`}</Code>
        </div>
        <PropsTable propsList={componentProps_BadgeButton} />
      </UsaceBox>
    </DocsPage>
  );
}

export default BadgeDocs;
export { BadgeDocs };
