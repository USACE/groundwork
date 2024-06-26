import { useQuery } from "@tanstack/react-query";
import { buildRequest } from "./cda";

const roundToFiveMinutes = (datetime) => {
  const fiveMinutes = 1000 * 60 * 5;
  return new Date(Math.round(datetime.getTime() / fiveMinutes) * fiveMinutes);
};

const getCdaTimeSeries = async (cdaParams, cdaUrl) => {
  const paramString = new URLSearchParams(cdaParams).toString();
  const url = buildRequest("/timeseries", paramString, cdaUrl);
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

const useCdaTimeSeries = ({ cdaParams, cdaUrl, queryOptions }) => {
  const queryKey = ["cda", "timeseries", cdaParams.name];
  // Round begin/end datetimes to nearest five-minute interval to prevent
  // constant refetching.  There's probably a better way to do this?
  if (cdaParams.begin) {
    const beginDate = new Date(Date.parse(cdaParams.begin));
    const roundedBegin = roundToFiveMinutes(beginDate);
    queryKey.push(`begin: ${roundedBegin.toISOString()}`);
  }
  if (cdaParams.end) {
    const endDate = new Date(Date.parse(cdaParams.end));
    const roundedBegin = roundToFiveMinutes(endDate);
    queryKey.push(`begin: ${roundedBegin.toISOString()}`);
  }
  return useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      return getCdaTimeSeries(cdaParams, cdaUrl);
    },
    ...queryOptions,
  });
};

export { useCdaTimeSeries };
export default useCdaTimeSeries;
