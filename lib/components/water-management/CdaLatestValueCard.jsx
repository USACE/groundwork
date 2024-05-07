import { Card, Skeleton, useCdaLatestValue } from "../../index";
import { MdErrorOutline } from "react-icons/md";
import { PiClockThin } from "react-icons/pi";
import { getLatestEntry } from "./cda";

const CdaLatestValueCard = ({
  label,
  tsId,
  office,
  unit,
  digits = 0,
  className,
  cdaUrl,
  ...props
}) => {
  const { data, isPending, isError } = useCdaLatestValue({
    tsId,
    office,
    unit,
    cdaUrl,
  });

  let latestEntry = undefined;
  let noData = false;
  if (data) {
    if (data.values.length > 0) {
      latestEntry = getLatestEntry(data);
    } else {
      noData = true;
    }
  }

  return (
    <Card className={className} {...props}>
      <div className="gw-flex gw-items-center gw-justify-between">
        <p className="gw-font-lg gw-truncate gw-text-lg gw-font-semibold gw-text-black">
          {label ?? tsId}
        </p>
        {isPending ? (
          <Skeleton className="gw-w-20" />
        ) : isError | noData ? (
          <span className="gw-text-lg">
            <MdErrorOutline />
          </span>
        ) : (
          <CardValue
            value={latestEntry[1]}
            units={data.units}
            digits={digits}
          />
        )}
      </div>
      <div className="gw-mt-2 gw-flex gw-justify-between">
        {isPending ? (
          <Skeleton className="gw-w-48" />
        ) : isError ? (
          <span className="gw-text-red-500">Error retrieving data</span>
        ) : noData ? (
          <span>No data found</span>
        ) : (
          <>
            <CardTimestamp datetime={new Date(latestEntry[0])} />
            {/* {change ? <Parameter24hrChange change={change} /> : customBotRight} */}
          </>
        )}
      </div>
    </Card>
  );
};

const CardTimestamp = ({ datetime }) => {
  return (
    <div className="sm:gw-flex">
      <p className="gw-flex gw-items-center gw-text-sm gw-text-gray-500">
        <PiClockThin
          className="gw-mr-1.5 gw-h-5 gw-w-5 gw-flex-shrink-0 gw-text-gray-600"
          aria-hidden="true"
        />
        {datetime ? (
          <time dateTime={datetime.toISOString()}>
            {datetime &&
              datetime.toLocaleString("en-US", {
                day: "numeric",
                year: "numeric", // numeric, 2-digit
                month: "short", // numeric, 2-digit, long, short, narrow
                hour: "numeric", // numeric, 2-digit
                minute: "numeric", // numeric, 2-digit
                // second: 'numeric', // numeric, 2-digit
                timeZoneName: "short",
              })}
          </time>
        ) : (
          <span>-</span>
        )}
      </p>
    </div>
  );
};

const CardValue = ({ value, units, digits = 0 }) => {
  return (
    <div className="gw-ml-2 gw-flex gw-flex-shrink-0">
      <p className="gw-inline-flex gw-px-2 gw-t-ext-lg gw-font-semibold gw-leading-5 gw-text-black">
        {typeof value === "number"
          ? value.toLocaleString(undefined, {
              minimumFractionDigits: digits,
              maximumFractionDigits: digits,
            })
          : "-"}
        <span className="gw-ml-1 gw-text-sm gw-font-normal gw-text-gray-400">
          {units}
        </span>
      </p>
    </div>
  );
};

export { CdaLatestValueCard };
export default CdaLatestValueCard;
