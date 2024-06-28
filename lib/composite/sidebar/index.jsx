import { useConnect } from "redux-bundler-hook";
import { UsaceBox } from "../../../lib";
import { VscChevronRight } from "react-icons/vsc";

function Sidebar({sidebarLinks}) {
  const { hash } = useConnect("selectHash");
  const pathname = window.location.pathname;

  return (
    <UsaceBox title="Contents">
      {sidebarLinks.map((link) => {
        const isSelected = hash === link.href || pathname === link.href;
        return (
          <div key={link.href}>
            <a href={link.href}>
              <div
                className={`gw-text-lg gw-font-bold gw-pl-1 gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 ${
                  isSelected ? "gw-bg-gray-50 gw-rounded" : ""
                }`}
              >
                {link.text}
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
                  const isChildSelected =
                    hash === child.href || pathname === child.href;
                  return (
                    <a href={child.href} key={child.href}>
                      <li
                        className={`gw-pl-3 gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 ${
                          isChildSelected ? "gw-bg-gray-50 gw-rounded" : ""
                        }`}
                      >
                        {child.text}
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

export default Sidebar;
export { Sidebar };
