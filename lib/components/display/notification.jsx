import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { CiCircleCheck, CiWarning, CiCircleInfo } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { GoStop } from "react-icons/go";
import gwMerge from "../../gw-merge";
import ProgressBar from "./progress-bar";

const STATUS_ICONS = {
  success: {icon: CiCircleCheck, className: "gw-text-green-400", backgroundColor: "gw-bg-green-400"}, 
  error: {icon: GoStop, className: "gw-text-red-400", backgroundColor: "gw-bg-red-400"},
  info: {icon: CiCircleInfo, className: "gw-text-blue-400", backgroundColor: "gw-bg-blue-400"},
  warning: {icon: CiWarning, className: "gw-text-yellow-400", backgroundColor: "gw-bg-yellow-400"},
  undefined: {icon: CiCircleCheck, className: "gw-text-gray-400", backgroundColor: "gw-bg-gray-400"},
};

function Notification({ title, description, icon, baseDuration, durationMS, show, onShow, status = "success", showProgress = true }) {
  const [progress, setProgress] = useState(100)

  // Reset progress when the notification is shown
  // This ensures that the progress bar starts from 0 every time the notification is displayed
  useEffect(() => {
    if (show) {
      setProgress(100);
    }
    let notificationCount = document.querySelectorAll('[name="notification"]').length
    if (notificationCount > 1) {
        console.warn(
            `There are multiple notifications on the page. This can lead to unexpected behavior. Please ensure only one notification component is mounted at a time. This is to ensure that the progress bar and close behavior works as expected. Current count: ${notificationCount}`
            );
        }
  }, [show]);

  
  useEffect(() => {
    if (!show || !durationMS || !showProgress ) return;
  
    const intervalMS = 50;
    const steps = durationMS / intervalMS;
  
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev - 100 / steps;
        if (next <= 0) {
          clearInterval(interval);
          // Reset progress once completed
          return 0;
        }
        return next;
      });
    }, intervalMS);
  
    return () => clearInterval(interval);
  }, [show, durationMS, showProgress]);

  useEffect(() => {
    if (!durationMS || !onShow || !show) return;
  
    const timer = setTimeout(() => {
      onShow(false);
      setProgress(100);
    }, durationMS + 300);
  
    return () => clearTimeout(timer);
  }, [durationMS, onShow, show]);

  if (!title || !description) {
    console.warn("No title or description provided for notification component!");
    return null;
  }
  return (
      <div
        aria-live="assertive"
        name="notification"
        role="alert"
        className="gw-pointer-events-none gw-fixed gw-left-0 gw-top-[10rem] gw-w-full gw-flex gw-items-start gw-px-4 gw-py-6 sm:gw-items-start sm:gw-p-6 gw-z-[9999]"
      >
        <div className="gw-flex gw-w-full gw-flex-col gw-items-center gw-space-y-4 sm:gw-items-end">
          <Transition show={show}>
            <div
              className={gwMerge(
                "gw-pointer-events-auto gw-w-full gw-max-w-sm gw-overflow-hidden gw-rounded-lg",
                "gw-bg-white gw-shadow-lg gw-ring-1 gw-ring-black/5 gw-transition data-[closed]:data-[enter]:gw-translate-y-2",
                "gw-data-[enter]:gw-transform data-[closed]:gw-opacity-0 data-[enter]:gw-duration-300 data-[leave]:gw-duration-100",
                "gw-data-[enter]:gw-ease-out data-[leave]:gw-ease-in data-[closed]:data-[enter]:sm:gw-translate-x-2 data-[closed]:data-[enter]:sm:gw-translate-y-0"
              )}
            >
              <div className="gw-p-4">
                <div className="gw-flex gw-items-start gw-mb-2">
                  <div className="gw-shrink-0">
                    {/* <CheckCircleIcon aria-hidden="true"  /> */}
                    {React.createElement(icon ? icon : STATUS_ICONS[status]?.icon, { className: gwMerge(`gw-size-12`, STATUS_ICONS[status]?.className) })}
                  </div>
                  <div className="gw-ml-3 gw-w-0 gw-flex-1 gw-pt-0.5">
                    <p className="gw-text-sm gw-font-medium gw-text-gray-900">
                      {title}
                    </p>
                    <p className="gw-mt-1 gw-text-sm gw-text-gray-500">
                      {description}
                    </p>
                  </div>
                  <div className="gw-ml-4 gw-flex gw-shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        if (onShow) onShow(false);
                      }}
                      className={gwMerge(
                        "gw-inline-flex gw-rounded-md gw-bg-white gw-text-gray-400",
                        "hover:gw-text-gray-500 focus:gw-outline-none focus:gw-ring-2",
                        "focus:gw-ring-indigo-500 focus:gw-ring-offset-2"
                      )}
                    >
                      <span className="gw-sr-only">Close</span>
                      <FaXmark aria-hidden="true" className="gw-size-5" />
                    </button>
                  </div>
                </div>
                { durationMS && showProgress && <ProgressBar hideOnDone={false} bgColor={STATUS_ICONS[status]?.backgroundColor} baseDuration={baseDuration} progress={progress} />}
              </div>
            </div>
          </Transition>
        </div>
      </div>
  );
}

export default Notification;
export { Notification };
