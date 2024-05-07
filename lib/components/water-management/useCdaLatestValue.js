import { useEffect, useState } from "react";
import { useCdaCatalogTS, useCdaTimeSeries } from "../../index";
import { getLatestEntry } from "./cda";

const useCdaLatestValue = ({ tsId, office, unit, cdaUrl }) => {
  const [latestDate, setLatestDate] = useState();
  const begin = latestDate;
  const end = latestDate;
  const ts = useCdaTimeSeries({
    cdaParams: {
      name: tsId,
      office,
      ...(unit && { unit }),
      ...(begin && { begin }),
      ...(end && { end }),
    },
    cdaUrl: cdaUrl,
  });

  const enableCatalog = !ts.isPending && ts.data?.values.length === 0;

  const catalog = useCdaCatalogTS({
    cdaParams: { office, like: tsId },
    cdaUrl: cdaUrl,
    queryOptions: {
      enabled: enableCatalog,
    },
  });

  useEffect(() => {
    if (!catalog.data) {
      return;
    }
    setLatestDate(
      new Date(catalog.data.entries[0].extents[0]["latest-time"]).toISOString()
    );
  }, [catalog]);

  const isPending =
    ts.isPending || (enableCatalog && (catalog.isPending || !latestDate));

  const isFetching = ts.isFetching || catalog.isFetching;

  const latestEntry = ts.data ? getLatestEntry(ts.data) : undefined;

  const data = latestEntry
    ? {
        datetime: latestEntry[0],
        value: latestEntry[1],
        qualityCode: latestEntry[2],
        units: ts.data.units,
      }
    : undefined;

  return { ...ts, data, isPending, isFetching };
};

export { useCdaLatestValue };
export default useCdaLatestValue;
