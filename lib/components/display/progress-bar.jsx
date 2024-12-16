import gwMerge from "../../gw-merge";

const ProgressBar = ({
  progress,
  hideOnDone = true,
  showProgress,
  bgColor = "gw-bg-blue-600",
  textColor = "gw-text-blue-100",
  className,
  baseDuration = 300,
  ...props
}) => {
  if (typeof progress !== "number") {
    throw new Error("Progress is expected to be a number!");
  }
  // Prevent unexpected CSS situations
  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;

  return (
    <div
      className={gwMerge(
        `gw-w-full gw-bg-gray-200 gw-rounded-full dark:gw-bg-gray-700`,
        hideOnDone && progress === 100 ? "gw-hidden" : ""
      )}
    >
      <div
        className={gwMerge(
          bgColor,
          textColor,
          showProgress && "gw-min-h-4",
          `gw-text-xs gw-font-medium gw-text-center gw-p-0.5 gw-leading-none gw-rounded-full`,
          className
        )}
        style={{
          width: `${Math.round(progress)}%`,
          transition: `width ${baseDuration}ms ease-in-out`,
        }}
        {...props}
      >
        {/* Show the progress text after 5% of the total to ensure there is room for the text to display */}
        {showProgress && progress > 5 ? `${progress.toFixed(0)} %` : ""}
      </div>
    </div>
  );
};

export { ProgressBar };
export default ProgressBar;
