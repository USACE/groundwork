import { useConnect } from "redux-bundler-hook";
import { UsaceBox } from "../../../lib";
import { VscChevronRight } from "react-icons/vsc";

const sidebarLinks = [
  {
    title: "Getting Started",
    href: "/docs",
  },
  {
    title: "Application Shell",
    href: "/docs/app-shell",
    children: [
      {
        title: "Site Wrapper",
        href: "/docs/app-shell/site-wrapper",
      },
      {
        title: "Search",
        href: "/docs/app-shell/search",
      },
    ],
  },
  {
    title: "Layout",
    href: "/docs/layout",
    children: [
      {
        title: "Container",
        href: "/docs/layout/container",
      },
      {
        title: "UsaceBox",
        href: "/docs/layout/usace-box",
      },
    ],
  },
  {
    title: "Navigation",
    href: "/docs/navigation",
    children: [
      {
        title: "Breadcrumbs",
        href: "/docs/navigation/breadcrumbs",
      },
      {
        title: "Tabs",
        href: "/docs/navigation/tabs",
      },
    ],
  },
  {
    title: "Buttons",
    href: "/docs/buttons",
    children: [
      {
        title: "Generic Buttons",
        href: "/docs/buttons/generic-buttons",
      },
      {
        title: "Ok/Cancel",
        href: "/docs/buttons/ok-cancel",
      },
      {
        title: "Delete/Confirm",
        href: "/docs/buttons/delete-confirm",
      },
    ],
  },
  {
    title: "Display",
    href: "/docs/display",
    children: [
      {
        title: "Badge",
        href: "/docs/display/badge",
      },
      {
        title: "Headings",
        href: "/docs/display/headings",
      },
      {
        title: "Hero",
        href: "/docs/display/hero",
      },
      {
        title: "Text",
        href: "/docs/display/text",
      },
      {
        title: "Table",
        href: "/docs/display/table",
      },
      {
        title: "Accordion",
        href: "/docs/display/accordion",
      },
      {
        title: "Card",
        href: "/docs/display/card",
      },
    ],
  },
  {
    title: "Forms",
    href: "/docs/forms",
    children: [
      {
        title: "Input",
        href: "/docs/forms/input",
      },
    ],
  },
  {
    title: "Water Management",
    href: "/docs/water-management",
  },
  {
    title: "Types",
    href: "/docs/types",
    children: [
      {
        title: "Link",
        href: "/docs/types/link",
      },
      {
        title: "Tab",
        href: "/docs/types/tab",
      },
    ],
  },
];

function DocsSidebar() {
  const { hash } = useConnect("selectHash");
  return (
    <UsaceBox title="Contents">
      {sidebarLinks.map((link) => {
        return (
          <div key={link.href}>
            <a href={link.href}>
              <div
                className={`text-lg font-bold pl-1 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-100 ${
                  hash === link.href ? "bg-gray-50 rounded" : ""
                }`}
              >
                {link.title}
                <VscChevronRight
                  size={18}
                  aria-hidden="true"
                  color="rgb(156 163 175)"
                />
              </div>
            </a>
            <ul>
              {link.children &&
                link.children.map((child) => {
                  return (
                    <a href={child.href} key={child.href}>
                      <li
                        className={`pl-3 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-100 ${
                          hash === child.href ? "bg-gray-50 rounded" : ""
                        }`}
                      >
                        {child.title}
                        <VscChevronRight
                          size={18}
                          aria-hidden="true"
                          color="rgb(156 163 175)"
                        />
                      </li>
                    </a>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </UsaceBox>
  );
}

export default DocsSidebar;
export { DocsSidebar };
