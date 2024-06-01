import { Disclosure } from "@headlessui/react";
import { VscChevronRight, VscChevronDown } from "react-icons/vsc";
import gwMerge from "../../gw-merge";

function Accordion({
  heading,
  defaultOpen = false,
  unmountOnClose = false,
  children,
}) {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => {
        return (
          <>
            <Disclosure.Button
              className={gwMerge(
                "gw-border",
                "gw-flex gw-justify-between gw-items-center gw-w-full gw-shadow gw-px-3 gw-py-2 gw-text-sm gw-font-semibold gw-text-gray-500 gw-bg-gray-50 hover:gw-bg-gray-100"
              )}
            >
              {heading}
              {open ? <VscChevronDown /> : <VscChevronRight />}
            </Disclosure.Button>
            <Disclosure.Panel
              className="gw-shadow gw-px-3"
              unmount={unmountOnClose}
            >
              {children}
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
}

export default Accordion;
export { Accordion };
