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

function ParamsTable({ paramsList, showReq = true }) {
  if (!paramsList || !paramsList.length)
    return (
      <Text className="gw:pt-3">This hook does not accept any parameters.</Text>
    );
  return (
    <Table striped dense>
      <TableHead>
        <TableRow>
          <TableHeader>Parameter</TableHeader>
          <TableHeader>Type</TableHeader>
          {showReq && <TableHeader>Required?</TableHeader>}
          <TableHeader>Description</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {paramsList.map((param) => (
          <TableRow key={param.name}>
            <TableCell>
              <Code>{param.name}</Code>
            </TableCell>
            <TableCell>
              <Code>{param.type}</Code>
            </TableCell>
            {showReq && (
              <TableCell>
                <Code>{param.required ? "required" : "optional"}</Code>
              </TableCell>
            )}
            <TableCell className="gw:text-wrap">{param.desc}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ParamsTable;
export { ParamsTable };
