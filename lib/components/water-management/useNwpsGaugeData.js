import { useQuery } from "@tanstack/react-query";
import { NWPS_URL } from "./nwps";

const getNwpsGaugeData = async (sid, product) => {
  let fullUrl = NWPS_URL + `/v1/gauges/${sid}/stageflow`;
  if (product == "observed" || product == "forecast") fullUrl += `/${product}`;
  const response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error("Error retrieving data.");
  }
  return response.json();
};

const useNwpsGaugeData = ({ sid, product, queryOptions }) => {
  return useQuery({
    queryKey: ["nwps", "gauge", sid, "data", `${product}`],
    queryFn: async () => {
      return getNwpsGaugeData(sid, product);
    },
    ...queryOptions,
  });
};

export { useNwpsGaugeData };
export default useNwpsGaugeData;
