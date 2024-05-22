import {
  UsaceBox,
  Code,
  Text,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableHeader,
  TableCell,
} from "../../../../lib";
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
    text: "Table",
    href: "/#/docs/display/table",
  },
];

const componentProps_Table = [
  {
    name: "bleed",
    type: "boolean",
    default: "false",
    desc: "Remove padding from the table.",
  },
  {
    name: "dense",
    type: "boolean",
    default: "false",
    desc: "Make the table more compact.",
  },
  {
    name: "grid",
    type: "boolean",
    default: "false",
    desc: "Add a grid to the table.",
  },
  {
    name: "striped",
    type: "boolean",
    default: "false",
    desc: "Add a striped background to the table.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to add to the table.",
  },
  {
    name: "...props",
    type: "any",
    default: "undefined",
    desc: "Additional props to pass to the table.",
  },
];

const componentProps_TableHead = [];

const componentProps_TableBody = [];

const componentProps_TableRow = [
  {
    name: "href",
    type: "string",
    default: "undefined",
    desc: "The href for the row if used as a link",
  },
  {
    name: "target",
    type: "string",
    default: "undefined",
    desc: "The target for the row.",
  },
  {
    name: "title",
    type: "string",
    default: "undefined",
    desc: "The title for the row.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to add to the row.",
  },
  {
    name: "...props",
    type: "any",
    default: "undefined",
    desc: "Additional props to pass to the row.",
  },
];

const componentProps_TableHeader = [];

const componentProps_TableCell = [];

const timestamps = [
  "03-06-2024T15:07:34Z",
  "03-06-2024T15:12:34Z",
  "03-06-2024T15:17:34Z",
  "03-06-2024T15:22:34Z",
  "03-06-2024T15:27:34Z",
  "03-06-2024T15:32:34Z",
  "03-06-2024T15:37:34Z",
  "03-06-2024T15:42:34Z",
  "03-06-2024T15:47:34Z",
  "03-06-2024T15:52:34Z",
];
const dummyData = timestamps.map((timestamp, index) => ({
  id: index,
  timestamp,
  value: Math.random() * 100,
}));

function TableDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Table">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Text>
            Use the Table components to render a table of information for your
            users. There are a few options for customizing the format of the
            table.
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw-border gw-border-dashed gw-px-6 gw-py-3 gw-mb-3">
          <Table striped dense>
            <TableHead>
              <TableRow>
                <TableHeader>ID</TableHeader>
                <TableHeader>Timestamp</TableHeader>
                <TableHeader>Value</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Code>{item.id}</Code>
                  </TableCell>
                  <TableCell>
                    <Code>{item.timestamp}</Code>
                  </TableCell>
                  <TableCell>
                    <Code>{item.value}</Code>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { Table, TableBody, TableRow, TableHead, TableHeader, TableCell, Code } from "@usace/groundwork";

function Component() {
  return (
    <Table striped dense>
      <TableHead>
        <TableRow>
          <TableHeader>ID</TableHeader>
          <TableHeader>Timestamp</TableHeader>
          <TableHeader>Value</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {dummyData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Code>{item.id}</Code>
            </TableCell>
            <TableCell>
              <Code>{item.timestamp}</Code>
            </TableCell>
            <TableCell>
              <Code>{item.value}</Code>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<Table />`}</Code>
        </div>
        <PropsTable propsList={componentProps_Table} />

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<TableHead />`}</Code>
        </div>
        <PropsTable propsList={componentProps_TableHead} />

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<TableBody />`}</Code>
        </div>
        <PropsTable propsList={componentProps_TableBody} />

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<TableRow />`}</Code>
        </div>
        <PropsTable propsList={componentProps_TableRow} />

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<TableHeader />`}</Code>
        </div>
        <PropsTable propsList={componentProps_TableHeader} />

        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<TableCell />`}</Code>
        </div>
        <PropsTable propsList={componentProps_TableCell} />
      </UsaceBox>
    </DocsPage>
  );
}

export default TableDocs;
export { TableDocs };
