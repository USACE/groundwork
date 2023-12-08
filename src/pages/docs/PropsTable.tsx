import Code from "../../../lib/components/display/Code";
import {
  Table,
  THead,
  TBody,
  Tr,
  Td,
  Th,
} from "../../../lib/components/display/Table";

interface PropsTableProps {
  props: {
    name: string;
    type: string | (() => JSX.Element);
    defaultValue: string;
    description: string;
  }[];
}

const PropsTable = ({ props }: PropsTableProps) => {
  return (
    <Table $mt={1} striped verticalSpacing="sm">
      <THead>
        <Tr>
          <Th>Prop</Th>
          <Th>Type</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </Tr>
      </THead>
      <TBody>
        {props.map((prop) => {
          return (
            <Tr key={prop.name}>
              <Td>
                <Code>{prop.name}</Code>
              </Td>
              <Td>
                <Code>
                  {typeof prop.type === "function" ? prop.type() : prop.type}
                </Code>
              </Td>
              <Td>
                <Code>{prop.defaultValue}</Code>
              </Td>
              <Td>{prop.description}</Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};

export default PropsTable;
