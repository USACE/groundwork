import { useQuery } from "@tanstack/react-query";
import { buildRequest } from "./cda";

const getCdaLocation = async (location, cdaParams, cdaUrl) => {
  const paramString = new URLSearchParams(cdaParams).toString();
  const url = buildRequest(`/locations/${location}`, paramString, cdaUrl);
  const response = await fetch(url, {
    headers: {
      accept: "application/json;version=2",
    },
  });
  if (!response.ok) {
    throw new Error("Error retrieving data.");
  }
  return response.json();
};

const useCdaLocation = ({ cdaParams, cdaUrl, queryOptions }) => {
  const { location, ...restParams } = cdaParams;
  return useQuery({
    queryKey: ["cda", "location", location],
    queryFn: async () => {
      return getCdaLocation(location, restParams, cdaUrl);
    },
    ...queryOptions,
  });
};

export { useCdaLocation };
export default useCdaLocation;
