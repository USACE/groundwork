import { Card, Text } from "../../../lib";
import { IoWarning } from "react-icons/io5";

const QueryClientWarning = () => {
  return (
    <Card className="my-2">
      <IoWarning className="float-start text-2xl mr-2 text-gray-700" />
      <Text>
        Use of the groundwork data hooks requires that your application be
        wrapped in a QueryClientProvider. Refer to the{" "}
        <a href="/docs/water-management/data-hooks" className="underline">
          Data Hooks Overview
        </a>
        .
      </Text>
    </Card>
  );
};

export { QueryClientWarning };
export default QueryClientWarning;
