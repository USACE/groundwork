import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableHeader,
  TableCell,
  Code,
} from "../../lib";

function PropsTable({ propsList }) {
  return (
    <Table striped dense>
      <TableHead>
        <TableRow>
          <TableHeader>Prop</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Default</TableHeader>
          <TableHeader>Description</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {propsList.map((prop) => (
          <TableRow key={prop.name}>
            <TableCell>
              <Code>{prop.name}</Code>
            </TableCell>
            <TableCell>
              <Code>{prop.type}</Code>
            </TableCell>
            <TableCell>
              <Code>{prop.default}</Code>
            </TableCell>
            <TableCell className="text-wrap">{prop.desc}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default PropsTable;
export { PropsTable };
