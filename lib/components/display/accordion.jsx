import { Disclosure } from "@headlessui/react";
import { VscChevronRight, VscChevronDown } from "react-icons/vsc";
import clsx from "clsx";

function Accordion({
  heading,
  children,
  defaultOpen = false,
  unmountOnClose = false,
}) {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => {
        return (
          <>
            <Disclosure.Button
              className={clsx(
                "flex justify-between items-center w-full shadow px-3 py-2 text-sm font-semibold text-gray-500 bg-gray-50 hover:bg-gray-100",
                open ? "rounded-t" : "rounded"
              )}
            >
              {heading}
              {open ? <VscChevronDown /> : <VscChevronRight />}
            </Disclosure.Button>
            <Disclosure.Panel className="shadow px-3" unmount={unmountOnClose}>
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
