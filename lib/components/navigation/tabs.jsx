import { Tab } from "@headlessui/react";
import gwMerge from "../../gw-merge";

function Tabs({ tabs, fill = false, defaultIndex = 0 }) {
  return (
    <Tab.Group defaultIndex={defaultIndex}>
      <Tab.List className="gw-flex gw-flex-wrap gw-gap-x-1 gw-text-gray-500 gw-font-semibold gw-border-b-2 gw-border-gray-300">
        {tabs.map((tab, idx) => (
          <Tab
            key={idx}
            onClick={
              typeof tab.onClick === "function" ? tab.onClick : undefined
            }
            className={({ selected }) => {
              const base = "gw-px-4 gw-py-2 gw-shadow hover:gw-bg-gray-100";
              const fillCls = fill ? "gw-flex-auto" : "";
              const selectedCls = selected ? "gw-bg-gray-50" : "";

              return gwMerge(base, fillCls, selectedCls);
            }}
          >
            <span
              className={`gw-flex ${
                tab.justify === "space-between"
                  ? "gw-justify-between"
                  : "gw-justify-center"
              } gw-items-center`}
            >
              {tab.leftSection && (
                <span className="gw-mr-2">{tab.leftSection}</span>
              )}
              {tab.name}
              {tab.rightSection && (
                <span className="gw-ml-2">{tab.rightSection}</span>
              )}
            </span>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.name} className="gw-bg-white gw-p-0">
            {tab.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
export { Tabs };
