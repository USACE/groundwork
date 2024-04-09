import { useConnect } from "redux-bundler-hook";
import { UsaceBox } from "../../../lib";
import { VscChevronRight } from "react-icons/vsc";
import sidebarLinks from "../../nav-links";

function DocsSidebar() {
  const { hash } = useConnect("selectHash");
  return (
    <UsaceBox title="Contents">
      {sidebarLinks.map((link) => {
        return (
          <div key={link.href}>
            <a href={link.href}>
              <div
                className={`gw-text-lg gw-font-bold gw-pl-1 gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 ${
                  hash === link.href ? "bg-gray-50 rounded" : ""
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
                  return (
                    <a href={child.href} key={child.href}>
                      <li
                        className={`gw-pl-3 gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 ${
                          hash === child.href ? "bg-gray-50 rounded" : ""
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

export default DocsSidebar;
export { DocsSidebar };
