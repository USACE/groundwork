import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { CiCircleCheck, CiWarning, CiCircleInfo } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { GoStop } from "react-icons/go";
import gwMerge from "../../gw-merge";
import ProgressBar from "./progress-bar";

const STATUS_ICONS = {
  success: {icon: CiCircleCheck, className: "gw-text-green-400"},
    error: {icon: GoStop, className: "gw-text-red-400"},
    info: {icon: CiCircleInfo, className: "gw-text-blue-400"},
    warning: {icon: CiWarning, className: "gw-text-yellow-400"},
    undefined: {icon: CiCircleCheck, className: undefined},
  
};
function Toast({ title, description, icon, durationMS=5000, show, onShow, status = "success" }) {
  if (!status) status = "success"

  const [progress, setProgress] = useState(0)

  
  setTimeout(() => {
        setProgress(progress + 1 > 100 ? 0 : progress + 1);
    }, durationMS);

  useEffect(() => {
    // Handle the close timer based on if durationMS is set
    if (durationMS && onShow) {
        const timer = setTimeout(() => {
            onShow(false);
        }, durationMS);
        return () => clearTimeout(timer);
    }


  }, [durationMS, onShow, show]);

  if (!title || !description) {
    console.warn("No title or description provided for toast component!");
    return null;
  }
  return (
      <div
        aria-live="assertive"
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
                <ProgressBar bgColor={STATUS_ICONS[status]?.className} durationMS={durationMS} progress={progress} />
              <div className="gw-p-4">
                <div className="gw-flex gw-items-start">
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
              </div>
            </div>
          </Transition>
        </div>
      </div>
  );
}

export default Toast;
export { Toast };
