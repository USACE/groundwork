import { Breadcrumbs, BreadcrumbItem, Container } from "../../../lib";
import { Sidebar } from "../../../lib/composite/sidebar";
import  sidebarLinks  from "../../nav-links";

function DocsPage({ breadcrumbs = [], children }) {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs>
          {breadcrumbs.map((breadcrumb) => {
            return (
              <BreadcrumbItem
                key={breadcrumb.text}
                href={breadcrumb.href}
                text={breadcrumb.text}
              />
            );
          })}
        </Breadcrumbs>
        <div className="gw-grid gw-grid-cols-12 gw-gap-6">
          <div className="gw-hidden md:gw-block md:gw-col-span-2">
            <DocsSidebar />
          </div>
          <div className="gw-col-span-12 md:gw-col-span-10">{children}</div>
        </div>
      </Container>
    </div>
  );
}

export default DocsPage;
export { DocsPage };
