import { useEffect, useState } from "react";
import { useCdaCatalogTS, useCdaTimeSeries } from "../../index";

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

  const enableCatalog = !ts.isPending && ts.data?.values.length == 0;

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

  const isPending = ts.isPending || (enableCatalog && catalog.isPending);
  const isFetching = ts.isFetching || catalog.isFetching;

  return { ...ts, isPending, isFetching };
};

export { useCdaLatestValue };
export default useCdaLatestValue;
