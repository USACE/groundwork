import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";
import {
  VscChevronRight,
  VscChevronLeft,
  VscChevronUp,
  VscChevronDown,
} from "react-icons/vsc";

const AVAIL_DIRECTIONS = ["right", "left", "top", "bottom"];

function PopoutMenu({ title, children, direction = "right", className }) {
  direction = direction.toLowerCase();

  const [isOpen, setIsOpen] = useState(false);

  if (!AVAIL_DIRECTIONS.includes(direction)) {
    throw new Error(
      `Invalid direction in component <Popover direction="${direction}". Valid directions are: ${AVAIL_DIRECTIONS.join(
        ", "
      )}`
    );
  }

  // Map direction to position classes
  const directionClasses = {
    right:
      "gw-left-full gw-top-1/2 gw-transform gw--translate-y-1/2 gw-translate-x-2",
    left: "gw-right-full gw-top-1/2 gw-transform gw--translate-y-1/2 gw--translate-x-2",
    top: "gw-bottom-full gw-left-1/2 gw-transform gw--translate-x-1/2 gw--translate-y-2",
    bottom:
      "gw-top-full gw-left-1/2 gw-transform gw--translate-x-1/2 gw-translate-y-2",
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
      className={`gw-relative gw-cursor-not-allowed gw-select-none ${className}`}
    >
      <PopoverButton
        className="gw-inline-flex gw-w-full gw-items-center gw-justify-between gw-text-sm gw-leading-6 gw-ps-1 focus:gw-outline-none"
      >
        <span>{title}</span>
        <ChevronIcon aria-hidden="true" className="gw-h-5 gw-w-5" size={12} />
      </PopoverButton>

      <PopoverPanel
        transition="true"
        className={`gw-absolute gw-pt-1 ${directionClasses[direction]} gw-z-10 gw-mt-2 gw-w-56 gw-shrink gw-rounded-xl gw-bg-white gw-text-sm gw-leading-6 gw-text-gray-900 gw-shadow-lg gw-ring-1 gw-ring-gray-900/5`}
      >
        {children}
      </PopoverPanel>
    </Popover>
  );
}

export default PopoutMenu;
export { PopoutMenu };
