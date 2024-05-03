import { useQuery } from "@tanstack/react-query";
import { buildRequest } from "./cda";

const getCdaTimeSeriesGroup = async (groupId, cdaParams, cdaUrl) => {
  const paramString = new URLSearchParams(cdaParams).toString();
  const url = buildRequest(`/timeseries/group/${groupId}`, paramString, cdaUrl);
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error retrieving data.");
  }
  return response.json();
};

const useCdaTimeSeriesGroup = ({ cdaParams, cdaUrl, queryOptions }) => {
  const { groupId, ...restParams } = cdaParams;
  return useQuery({
    queryKey: ["cda", "group", groupId],
    queryFn: async () => {
      return getCdaTimeSeriesGroup(groupId, restParams, cdaUrl);
    },
    ...queryOptions,
  });
};

export { useCdaTimeSeriesGroup };
export default useCdaTimeSeriesGroup;
