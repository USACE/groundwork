import { UsaceBox, PopoutMenu } from "../..";
import { useIsMobile } from "../../hooks/useIsMobile";
import Dropdown from "../../components/form/dropdown";
import { useRef } from "react";
import { flattenLinks } from "../../utils/paths";
import Link from "../../components/navigation/link";

const MAX_NESTING_LEVEL = 3;
const NEST_WARNING_TEXT = `Maximum sidebar nesting level of ${MAX_NESTING_LEVEL} is exceeded for %s. To ensure a clean and readable sidebar, please reduce the nesting level of your links by moving some of them to the top level.`;

// Recursive function to render nested PopoutMenus
function renderPopoutMenu({
  link,
  selectedPath,
  enablePopout,
  popoutDirection = "right",
  maxScrollHeight = "50vh",
  level = 0,
}) {
  if (typeof maxScrollHeight !== "string") {
    console.warn(
      "maxScrollHeight must be a string. Something like '50vh' or '100px'. Defaulting to '50vh'"
    );
    maxScrollHeight = "50vh";
  }
  const isSelected = selectedPath === link.href;

  if (level > MAX_NESTING_LEVEL) {
    console.error(NEST_WARNING_TEXT.replaceAll("%s", link?.text));
    return null;
  }

  return (
    <div
      key={link.id}
      className="gw-py-2 gw-border-b-[1px]  hover:gw-bg-gray-100"
    >
      {!link?.children ? (
        <Link
          key={link.id}
          href={link.href}
          target={link.target}
          className="gw-z-20 gw-flex gw-items-center gw-px-1"
        >
          {link.text}
        </Link>
      ) : (
        <PopoutMenu title={link.text} level={level} direction={popoutDirection}>
          {
            <Link
              key={link.id}
              href={link.href}
              target={link.target}
              className={`gw-sticky gw-top-0 gw-z-20 gw-flex gw-items-center gw-gap-1 gw-p-2 gw-border-b-[1px] gw-border-b-gray-200 gw-bg-gray-100 gw-font-bold ${
                isSelected ? "gw-bg-gray-100 gw-rounded" : ""
              }`}
            >
              {link.text}
            </Link>
          }
          <div
            className={`gw-overflow-y-auto`}
            style={{ maxHeight: maxScrollHeight }}
          >
            {link?.children?.map((child) =>
              renderPopoutMenu({
                link: child,
                selectedPath,
                enablePopout,
                popoutDirection,
                maxScrollHeight,
                level: level + 1,
              })
            )}
          </div>
        </PopoutMenu>
      )}
    </div>
  );
}

// Recursive function to render nested links without popout menus
function renderRegularLinks(link, selectedPath, level = 0) {
  const isSelected = selectedPath === link.href;
  const indentation = { paddingLeft: `${level * 20}px` };
  if (level > MAX_NESTING_LEVEL) {
    console.error(NEST_WARNING_TEXT.replaceAll("%s", link?.text));
    return null;
  }
  return (
    <div key={link.id}>
      <Link href={link.href} target={link.target}>
        <div
          className={`gw-text-lg ${
            level === 0 ? "gw-font-bold" : ""
          } gw-pl-1 gw-py-1 gw-flex gw-justify-between gw-items-center ${
            link?.href
              ? "gw-cursor-pointer hover:gw-bg-gray-100"
              : "gw-cursor-default"
          } ${isSelected ? "gw-bg-gray-100 gw-rounded" : ""}`}
          style={indentation}
        >
          {link.text}
          {isSelected}
        </div>
      </Link>
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
  maxScrollHeight,
}) {
  const isMobile = useIsMobile();
  const sidebarRef = useRef(null);
  const mobileNav = useRef(null);

  if (popoutDirection && !enablePopout) {
    throw new Error(
      "popoutDirection can only be used when enablePopout is true"
    );
  }

  if (isMobile) {
    // Combine all the child links into a single array. Prepend each level's parent text to the child text.
    const combinedLinks = flattenLinks(sidebarLinks);
    return (
      <UsaceBox
        ref={sidebarRef}
        title={title}
        className={"gw-text-sm gw-my-5"}
        id="sidebar"
      >
        <div className="gw-w-full gw-m-auto gw-flex gw-justify-between gw-items-center gw-gap-2">
          <Dropdown
            className={"gw-w-5/6 gw-m-auto"}
            value={selectedPath}
            onChange={(e) => {
              mobileNav.current.href = e.target.value;
              mobileNav.current.click();
            }}
            options={combinedLinks.map((link, idx) => (
              <option
                key={idx + link?.href + "-mobile-sidebar"}
                value={link.href}
                className="gw-pl-2"
              >
                {`${"\u00A0".repeat(link.level * 2)}${link.text}`}
              </option>
            ))}
          />
          {/* Hidden anchor tag to trigger mobile nav for compatibility */}
          <Link
            className="hidden"
            href="#"
            ref={mobileNav}
            aria-hidden="true"
          ></Link>
        </div>
      </UsaceBox>
    );
  }

  return (
    <UsaceBox ref={sidebarRef} title={title} id="sidebar">
      {sidebarLinks.map((link) => {
        return enablePopout
          ? renderPopoutMenu({
              link,
              selectedPath,
              enablePopout,
              maxScrollHeight,
              popoutDirection,
            })
          : renderRegularLinks(link, selectedPath);
      })}
    </UsaceBox>
  );
}

export default Sidebar;
export { Sidebar };
