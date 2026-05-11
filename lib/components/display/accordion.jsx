import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { VscChevronRight, VscChevronDown } from "react-icons/vsc";
import gwMerge from "../../gw-merge";

function Accordion({
  heading,
  defaultOpen = false,
  unmountOnClose = false,
  className,
  isOpen,
  onToggle,
  children,
  ...props
}) {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => {
        const isExpanded = isOpen ?? open;
        return (
          <>
            <DisclosureButton
              aria-expanded={isExpanded}
              aria-controls={`accordion-panel`}
              onClick={onToggle}
              className={gwMerge(
                "gw-flex gw-justify-between gw-items-center gw-w-full gw-shadow gw-px-3 gw-py-2 gw-text-sm gw-font-semibold gw-text-gray-500 gw-bg-gray-50 hover:gw-bg-gray-100",
                open ? "gw-rounded-t" : "gw-rounded",
                className,
              )}
              {...props}
            >
              {heading}
              {open ? <VscChevronDown /> : <VscChevronRight />}
            </DisclosureButton>
            <DisclosurePanel className="gw-shadow" unmount={unmountOnClose}>
              {children}
            </DisclosurePanel>
          </>
        );
      }}
    </Disclosure>
  );
}

export default Accordion;
export { Accordion };
