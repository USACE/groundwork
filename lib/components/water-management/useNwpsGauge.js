import { useQuery } from "@tanstack/react-query";
import { NWPS_URL } from "./nwps";

const getNwpsGauge = async (sid) => {
  const response = await fetch(NWPS_URL + `/v1/gauges/${sid}`);
  if (!response.ok) {
    throw new Error("Error retrieving data.");
  }
  return response.json();
};

const useNwpsGauge = (sid, queryOptions) => {
  return useQuery({
    queryKey: ["nwps", "gauge", sid],
    queryFn: async () => {
      return getNwpsGauge(sid);
    },
    ...queryOptions,
  });
};

export { useNwpsGauge };
export default useNwpsGauge;
