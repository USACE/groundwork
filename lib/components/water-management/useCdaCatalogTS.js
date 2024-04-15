import { useQuery } from "@tanstack/react-query";
import { buildRequest } from "./cda";

const getCdaCatalogTS = async (cdaParams, cdaUrl) => {
  const paramString = new URLSearchParams(cdaParams).toString();
  const url = buildRequest("/catalog/TIMESERIES", paramString, cdaUrl);
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

const useCdaCatalogTS = ({ cdaParams, cdaUrl, queryOptions }) =>
  useQuery({
    queryKey: ["cda", "catalog", cdaParams.like],
    queryFn: async () => {
      return getCdaCatalogTS(cdaParams, cdaUrl);
    },
    ...queryOptions,
  });

export { useCdaCatalogTS };
export default useCdaCatalogTS;
