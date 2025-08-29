import { UsaceBox, Code, Text, PopoutMenu, H3, Badge } from "../../../../lib";
import { VscChevronRight } from "react-icons/vsc";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";
import links from "../../../nav-links";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Buttons",
    href: "/#/docs/buttons",
  },
  {
    text: "Popout Menu",
    href: "/#/docs/buttons/PopoutMenu",
  },
];

const componentProps_PopoutMenu = [
  {
    name: "title",
    type: "string",
    default: "undefined",
    desc: "The title displayed for the popout menu",
  },
  {
    name: "children",
    type: "component",
    default: "undefined",
    desc: "The children to be displayed in the popout menu",
  },
  {
    name: "direction",
    type: "string",
    default: "right",
    desc: "The direction of the popout menu. Options are 'right', 'left', 'top', and 'bottom'",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    desc: "Additional classes to add to the popout menu parent component",
  },
];

function PopoutMenuDocs() {
  const selectedPath = document.location.pathname;

  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Popout Menu">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <Badge color="blue" className="gw-my-2">
            <b>NOTE:</b> If you are looking to add popout menus to your existing{" "}
            {"<Sidebar />"} component, please see the{" "}
            <a
              className="gw-underline"
              href="/#/docs/navigation/sidebar"
              target="_blank"
              rel="no-referrer"
            >
              Sidebar
            </a>{" "}
            component documentation.
          </Badge>
          <Text>
            Popout menus are used to display a menu that can be triggered by a
            button click. They are useful for displaying multiple links or
            components within a single menu row. They are especially useful for
            displaying when space is limited.
          </Text>
        </div>
        <H3 className="gw-mt-6 gw:pb-3">Popout Menu</H3>
        <div className="gw-rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          {/* Show the first two links in the sidebar as examples */}
          {links.slice(0, 2).map((link) => {
            const isSelected = selectedPath === link.href;
            return (
              <div key={link.href}>
                {(link.children?.length && (
                  <div className="gw-py-1 gw:border-b gw:border-b-gray-500 gw:hover:bg-gray-100">
                    <PopoutMenu title={link.text} direction={"bottom"}>
                      {
                        <a
                          key={link.id}
                          href={link.href}
                          className={`gw-flex gw-items-center gw-gap-1 gw-font-bold gw-p-2 gw-border-b-[1px] gw-border-b-gray-200 gw-bg-gray-100 ${
                            isSelected ? "gw:bg-gray-100 gw:rounded" : ""
                          }`}
                        >
                          {/* Place a black dot at the end of the link if it is selected */}
                          {link.text}
                        </a>
                      }
                      {link.children.map((child) => {
                        const isChildSelected = selectedPath === child.href;
                        return (
                          <a
                            key={child.id}
                            href={child.href}
                            className={`gw-block gw-p-2 gw-border-b-[1px] gw-border-b-gray-200 hover:gw-bg-gray-100 ${
                              isChildSelected ? "gw:bg-gray-100 gw:rounded" : ""
                            }`}
                          >
                            <span className="gw-flex gw:items-center gw:gap-1">
                              {child.text}
                            </span>
                          </a>
                        );
                      })}
                    </PopoutMenu>
                  </div>
                )) || (
                  <a href={link.href}>
                    <div
                      className={`gw-pl-1 gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 ${
                        isSelected ? "gw:bg-gray-50 gw:rounded" : ""
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
                )}
              </div>
            );
          })}
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { PopoutMenu } from "@usace/groundwork";
import { VscChevronRight } from "react-icons/vsc";

function Component() {
  return (
    <div className="gw-rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          {/* Show the first two links in the sidebar as examples */}
          {links.slice(0, 2).map((link) => {
            const isSelected = selectedPath === link.href;
            return (
              <div key={link.href}>
          
                  {link.children?.length && (
                    <div className="gw-py-1 gw:border-b gw:border-b-gray-500 gw:hover:bg-gray-100">
                      <PopoutMenu title={link.text} direction={"bottom"}>
                        {
                          <a
                            key={link.id}
                            href={link.href}
                            className={\`gw-flex gw-items-center gw-gap-1 gw-font-bold gw-p-2 gw-border-b-[1px] gw-border-b-gray-200 gw-bg-gray-100 $\{
                              isSelected ? "gw:bg-gray-100 gw:rounded" : ""
                            }\`}
                          >
                            {/* Place a black dot at the end of the link if it is selected */}
                            {link.text} {isSelected}
                          </a>
                        }
                        {link.children.map((child) => {
                          const isChildSelected = selectedPath === child.href;
                          return (
                            <a
                              key={child.id}
                              href={child.href}
                              className={\`gw-block gw-p-2 gw-border-b-[1px] gw-border-b-gray-200 hover:gw-bg-gray-100 $\{
                                isChildSelected
                                  ? "gw:bg-gray-100 gw:rounded"
                                  : ""
                              }\`}
                            >
                              <span className="gw-flex gw:items-center gw:gap-1">
                                {child.text}
                                {isChildSelected}
                              </span>
                            </a>
                          );
                        })}
                      </PopoutMenu>
                    </div>
                  ) || (
                    <a href={link.href}>
                      <div
                        className={\`gw-text-lg gw-font-bold gw-pl-1 gw-py-1 gw-flex gw-justify-between gw-items-center gw-cursor-pointer hover:gw-bg-gray-100 $\{
                          isSelected ? "gw:bg-gray-50 gw:rounded" : ""
                        }\`
                      >
                        {link.text}
                        <VscChevronRight
                          size={18}
                          aria-hidden="true"
                          color="rgb(156 163 175)"
                        />
                      </div>
                    </a>
                  )} 
              </div>
            );
          })}
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw:text-lg gw:pt-6">
          Component API -{" "}
          <Code className="gw-p-2">{`<PopoutMenu title={title} children={children} direction={direction} className={className} />`}</Code>
        </div>
        <PropsTable propsList={componentProps_PopoutMenu} />
      </UsaceBox>
    </DocsPage>
  );
}

export default PopoutMenuDocs;
export { PopoutMenuDocs };
