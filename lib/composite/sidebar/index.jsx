import { UsaceBox, PopoutMenu } from "../../../lib";
import { VscChevronRight } from "react-icons/vsc";


const BlackDot = ({title = "Current Page"}) => (
  <span title={title} className="gw-inline-block gw-w-2 gw-h-2 gw-rounded-full gw-bg-black gw-mr-1 gw-ms-auto" />
)

function Sidebar({ title = "Contents", selectedPath, sidebarLinks, enablePopout, popoutDirection}) {
  if (popoutDirection && !enablePopout) {
    throw new Error("popoutDirection can only be used when enablePopout is true");
  }

  return (
    <UsaceBox title={title}>
      {sidebarLinks.map((link) => {
        const isSelected = selectedPath === link.href;
        return (
          <div key={link.href}>
            {enablePopout ? (
              (link.children?.length && (
                <div className="gw-py-1 gw-border-b-[1px] gw-border-b-gray-500 hover:gw-bg-gray-100">
                  <PopoutMenu title={link.text} direction={popoutDirection}>
                    {
                      <a
                        key={link.id}
                        href={link.href}
                        className={`gw-flex gw-items-center gw-gap-1 gw-font-bold gw-p-2 gw-border-b-[1px] gw-border-b-gray-200 gw-bg-gray-100 ${
                          isSelected ? "gw-bg-gray-100 gw-rounded" : ""
                        }`}
                      >
                        {/* Place a black dot at the end of the link if it is selected */}
                        {link.text} { isSelected && <BlackDot />}
                      </a>
                    }
                    {link.children.map((child) => {
                      const isChildSelected = selectedPath === child.href;
                      return (
                        <a
                          key={child.id}
                          href={child.href}
                          className={`gw-block gw-p-2 gw-border-b-[1px] gw-border-b-gray-200 hover:gw-bg-gray-100 ${
                            isChildSelected ? "gw-bg-gray-100 gw-rounded" : ""
                          }`}
                        >
                          <span className="gw-flex gw-items-center gw-gap-1">
                            {child.text}
                            {isChildSelected && <BlackDot />}
                          </span>
                        </a>
                      );
                    })}
                  </PopoutMenu>
                </div>
              )) || (
                <a href={link.href}>
                  <div
                    className={`gw-text-lg gw-font-bold gw-pl-1 gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 ${
                      isSelected ? "gw-bg-gray-50 gw-rounded" : ""
                    }`}
                  >
                    {link.text}
                 
                  </div>
                </a>
              )
            ) : (
              <>
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
                      const isChildSelected = selectedPath === child.href;
                      return (
                        <a href={child.href} key={child.href}>
                          <li
                            className={`gw-pl-3 gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 ${
                              isChildSelected ? "gw-bg-gray-50 gw-rounded" : ""
                            }`}
                          >
                            {child.text}
                            <VscChevronRight
                              size={12}
                              aria-hidden="true"
                              color="rgb(156 163 175)"
                            />
                          </li>
                        </a>
                      );
                    })}
                </ul>
              </>
            )}
          </div>
        );
      })}
    </UsaceBox>
  );
}

export default Sidebar;
export { Sidebar };
