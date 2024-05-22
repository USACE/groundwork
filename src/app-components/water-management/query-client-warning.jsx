import { Card, Text } from "../../../lib";
import { IoWarning } from "react-icons/io5";

const QueryClientWarning = () => {
  return (
    <Card className="gw-my-2">
      <IoWarning className="gw-float-start gw-text-2xl gw-mr-2 gw-text-gray-700" />
      <Text>
        Use of the groundwork data hooks requires that your application be
        wrapped in a QueryClientProvider. Refer to the{" "}
        <a href="/#/docs/water-management/data-hooks" className="gw-underline">
          Data Hooks Overview
        </a>
        .
      </Text>
    </Card>
  );
};

export { QueryClientWarning };
export default QueryClientWarning;
