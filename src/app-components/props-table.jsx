import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableHeader,
  TableCell,
  Text,
  Code,
} from "../../lib";

function PropsTable({ propsList }) {
  if (!propsList || !propsList.length)
    return (
      <Text className="gw-pt-3">
        This component does not expose any component-specific props.
      </Text>
    );
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
              <Code className="gw-text-wrap">{prop.type}</Code>
            </TableCell>
            <TableCell>
              <Code>{prop.default}</Code>
            </TableCell>
            <TableCell className="gw-text-wrap">{prop.desc}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default PropsTable;
export { PropsTable };
