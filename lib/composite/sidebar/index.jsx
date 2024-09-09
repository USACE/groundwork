import { UsaceBox, PopoutMenu } from "../../../lib";
import { VscChevronRight } from "react-icons/vsc";
import { useIsMobile } from "../../hooks/useIsMobile";
import Dropdown from "../../components/form/dropdown";
import { useEffect, useRef } from "react";
import { useConnect } from "redux-bundler-hook";
import { flattenLinks } from "../../utils/paths";

const BlackDot = ({ title = "Current Page" }) => (
  <span
    title={title}
    className="gw-inline-block gw-w-2 gw-h-2 gw-rounded-full gw-bg-black gw-mr-1 gw-ms-auto"
  />
);

// Recursive function to render nested PopoutMenus
function renderPopoutMenu(
  link,
  selectedPath,
  enablePopout,
  popoutDirection,
  level = 0
) {
  const isSelected = selectedPath === link.href;
  link.level = level; // Track the level of each link

  if (link.children && link.children.length > 0) {
    return (
      <div className="gw-py-1 gw-border-b-[1px] gw-border-b-gray-500 hover:gw-bg-gray-100">
        <PopoutMenu title={link.text} direction={popoutDirection}>
          {
            <a
              key={link.id}
              href={link.href}
              className={`gw-flex gw-items-center gw-gap-1 gw-p-2 gw-border-b-[1px] gw-border-b-gray-200 gw-bg-gray-100 gw-font-bold ${
                isSelected ? "gw-bg-gray-100 gw-rounded" : ""
              }`}
            >
              {link.text} {isSelected && <BlackDot />}
            </a>
          }
          {link.children.map((child) =>
            renderPopoutMenu(
              child,
              selectedPath,
              enablePopout,
              popoutDirection,
              level + 1
            )
          )}
        </PopoutMenu>
      </div>
    );
  }

  return (
    <a href={link.href} key={link.id}>
      <div
        className={`gw-pl-1 ${
          link?.children || link?.level === 0 ? "gw-text-lg gw-font-bold" : ""
        } gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 ${
          isSelected ? "gw-bg-gray-50 gw-rounded" : ""
        }`}
      >
        {link.text}
      </div>
    </a>
  );
}

// Recursive function to render nested links without popout menus
function renderRegularLinks(link, selectedPath, level = 0) {
  const isSelected = selectedPath === link.href;
  const indentation = { paddingLeft: `${level * 20}px` };

  return (
    <div key={link.id}>
      <a href={link.href}>
        <div
          className={`gw-text-lg ${
            level === 0 ? "gw-font-bold" : ""
          } gw-pl-1 gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 ${
            isSelected ? "gw-bg-gray-100 gw-rounded" : ""
          }`}
          style={indentation}
        >
          {link.text}
          {isSelected && <BlackDot />}
          {link.children && (
            <VscChevronRight
              size={18}
              aria-hidden="true"
              color="rgb(156 163 175)"
            />
          )}
        </div>
      </a>
      {link.children && (
        <div>
          {link.children.map((child) =>
            renderRegularLinks(child, selectedPath, level + 1)
          )}
        </div>
      )}
    </div>
  );
}

function Sidebar({
  title = "Contents",
  selectedPath,
  sidebarLinks,
  enablePopout,
  popoutDirection,
}) {
  const isMobile = useIsMobile();
  const { doUpdateHash } = useConnect("doUpdateHash");
  const sidebarRef = useRef(null);
  if (popoutDirection && !enablePopout) {
    throw new Error(
      "popoutDirection can only be used when enablePopout is true"
    );
  }

  useEffect(() => {
    if (sidebarRef.current) {
      const parentElement = sidebarRef.current.parentElement;
      if (
        parentElement &&
        parentElement?.parentElement.classList.contains("gw-grid")
      ) {
        parentElement?.parentElement.classList.remove("gw-grid");
        parentElement.classList.remove("gw-hidden");
      } else parentElement?.parentElement.classList.add("gw-grid");
    }
  }, [isMobile]);

  if (isMobile) {
    // Combine all the child links into a single array. Prepend each level's parent text to the child text.
    const combinedLinks = flattenLinks(sidebarLinks).map((link) => {
      if (link.children && link.children.length > 0) {
        link.text = link.text + " > " + link.children[0].text;
      }
      return link;
    });
    return (
      <UsaceBox propRef={sidebarRef} title={title} className={"gw-text-sm"}>
        <div className="gw-w-full gw-m-auto gw-flex gw-justify-between gw-items-center gw-gap-2">
          <Dropdown
            className={"gw-w-5/6 gw-m-auto"}
            value={selectedPath}
            onChange={(e) => {
              doUpdateHash(e.target.value);
            }}
            options={combinedLinks.map((link) => (
              <option key={link.href} value={link.href}>
                {link?.path ? link.path + " - " + link.text : link.text}
              </option>
            ))}
          />
        </div>
      </UsaceBox>
    );
  }

  return (
    <UsaceBox propRef={sidebarRef} title={title}>
      {sidebarLinks.map((link) => {
        return enablePopout
          ? renderPopoutMenu(link, selectedPath, enablePopout, popoutDirection)
          : renderRegularLinks(link, selectedPath);
      })}
    </UsaceBox>
  );
}

export default Sidebar;
export { Sidebar };
