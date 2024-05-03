import { Text } from "../../../lib";

export const queryOptionsParam = {
  name: "queryOptions",
  type: "object",
  required: false,
  desc: (
    <>
      Additional options to configure the TanStack Query useQuery request. See
      the{" "}
      <a
        href="https://tanstack.com/query/latest/docs/framework/react/reference/useQuery"
        className="gw-underline"
      >
        TanStack Query Docs
      </a>
      .
    </>
  ),
};

export const NwpsApiLink = () => (
  <Text className="gw-my-2">
    For more information, see the{" "}
    <a href="https://api.water.noaa.gov/nwps/v1/docs/" className="gw-underline">
      NWPS API Documentation
    </a>
    .
  </Text>
);
