import clsx from "clsx";
import { Breadcrumbs, BreadcrumbItem, Sidebar } from "../../../lib";

function Container({ className, children, fluid, breadcrumbs, sidebarLinks }) {
  const containerClass = clsx(
    "gw-w-full gw-mx-auto gw-px-4 gw-box-border",
    fluid ? "gw-max-w-screen" : "gw-max-w-screen-2xl",
    className
  );

  const renderBreadcrumbs = () =>
    breadcrumbs && (
      <Breadcrumbs>
        {breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem
            key={breadcrumb.text}
            href={breadcrumb.href}
            text={breadcrumb.text}
          />
        ))}
      </Breadcrumbs>
    );

  return (
    <div className={containerClass}>
      {renderBreadcrumbs()}
      {sidebarLinks ? (
        <div className="gw-grid gw-grid-cols-12 gw-gap-6">
          <div className="gw-hidden md:gw-block md:gw-col-span-2">
            <Sidebar sidebarLinks={sidebarLinks} />
          </div>
          <div className="gw-col-span-12 md:gw-col-span-10">{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default Container;
export { Container };
