import { Tab } from "@headlessui/react";
import clsx from "clsx";

function Tabs({ tabs, fill = false }) {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="flex flex-wrap gap-x-1 text-gray-500 font-semibold border-b-2 border-gray-300">
        {tabs.map((tab, idx) => (
          <Tab
            key={idx}
            className={({ selected }) => {
              const base = "px-4 py-2 shadow hover:bg-gray-100";
              const fillCls = fill ? "flex-auto" : "";
              const selectedCls = selected ? "bg-gray-50" : "";

              return clsx(base, fillCls, selectedCls);
            }}
          >
            <span
              className={`flex ${
                tab.justify === "space-between"
                  ? "justify-between"
                  : "justify-center"
              } items-center`}
            >
              {tab.leftSection && (
                <span className="mr-2">{tab.leftSection}</span>
              )}
              {tab.name}
              {tab.rightSection && (
                <span className="ml-2">{tab.rightSection}</span>
              )}
            </span>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.name} className="bg-white p-0">
            {tab.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
export { Tabs };
