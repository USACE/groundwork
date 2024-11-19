import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  VscChevronRight,
  VscChevronLeft,
  VscChevronUp,
  VscChevronDown,
} from "react-icons/vsc";

const AVAIL_DIRECTIONS = ["right", "left", "top", "bottom"];

function PopoutMenu({
  title,
  children,
  level = 0,
  className = "",
  direction = "right",
}) {
  direction = direction.toLowerCase();

  if (!AVAIL_DIRECTIONS.includes(direction)) {
    throw new Error(
      `Invalid direction in component <Popover direction="${direction}". Valid directions are: ${AVAIL_DIRECTIONS.join(
        ", "
      )}`
    );
  }

  // Map direction to position classes
  const directionClasses = {
    right: `gw-left-full gw-transform gw--translate-y-1/2 gw-translate-x-2`,
    left: "gw-right-full gw-transform gw--translate-y-1/2 gw--translate-x-2",
    top: "gw-bottom-full gw-transform gw--translate-x-1/2 gw--translate-y-2",
    bottom: "gw-top-full gw-transform gw--translate-x-1/2 gw-translate-y-2",
  };

  /// Map the icons to their appropriate directions
  const ChevronIcon = {
    right: VscChevronRight,
    left: VscChevronLeft,
    top: VscChevronUp,
    bottom: VscChevronDown,
  }[direction];

  return (
    <Popover
      name="gw-popout-menu"
      className={`gw-z-[${
        level * 10
      }] gw-relative gw-cursor-not-allowed gw-select-none ${className}`}
    >
      {({ open }) => (
        <>
          <PopoverButton
            className={`gw-z-[${
              level * 10 + 1
            }] gw-inline-flex gw-w-full gw-items-center gw-justify-between gw-leading-6 gw-ps-1 focus:gw-outline-none`}
          >
            <span>{title}</span>
            <ChevronIcon
              aria-hidden="true"
              className="gw-h-5 gw-w-5"
              size={12}
            />
          </PopoverButton>

          {open && (
            <PopoverPanel
              transition="true"
              className={`${
                level ? "gw-fixed" : "gw-absolute"
              } gw-max-w-[50vw] gw-mt-2 gw-w-56 gw-shrink gw-rounded-xl gw-bg-white gw-text-sm gw-leading-6 gw-text-gray-900 gw-shadow-lg gw-ring-1 gw-ring-gray-900/5 ${
                directionClasses[direction]
              }`}
              style={{ zIndex: level * 10 + 2 }}
            >
              {({ close }) => (
                <div
                  onClick={() => {
                    close();
                  }}
                >
                  {children}
                </div>
              )}
            </PopoverPanel>
          )}
        </>
      )}
    </Popover>
  );
}

export default PopoutMenu;
export { PopoutMenu };
