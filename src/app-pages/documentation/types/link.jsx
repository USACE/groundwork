import { UsaceBox, Text, Code } from "../../../../lib";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const linkProps = [
  {
    name: "id",
    type: "string",
    default: "''",
    desc: "Used as the key attribute when rendering a list of links, so needs to be unique within the list.",
  },
  {
    name: "href",
    type: "string",
    default: "''",
    desc: "The URL of the link.",
  },
  {
    name: "text",
    type: "string",
    default: "''",
    desc: "The text of the link.",
  },
];

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Types",
    href: "/docs/types",
  },
  {
    text: "Link",
    href: "/docs/types/link",
  },
];

function LinkDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Link">
        <Text className="pb-6">
          The Link type is used to create a link to another page or resource. We
          use it to provide a consistent way of representing links, useful where
          links are configurable or dynamic.
        </Text>

        <div className="font-bold text-lg pt-6">
          Object - <Code className="p-2">{`link`}</Code>
        </div>
        <PropsTable propsList={linkProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default LinkDocs;
export { LinkDocs };
