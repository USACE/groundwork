import { Breadcrumbs, BreadcrumbItem, Container } from "../../../lib";
import { DocsSidebar } from "./_docs-sidebar";

function DocsPage({ breadcrumbs = [], children }) {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs>
          {breadcrumbs.map((breadcrumb) => {
            return (
              <BreadcrumbItem
                key={breadcrumb.href}
                href={breadcrumb.href}
                text={breadcrumb.text}
              />
            );
          })}
        </Breadcrumbs>
        <div className="grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-2">
            <DocsSidebar />
          </div>
          <div className="col-span-12 md:col-span-10">{children}</div>
        </div>
      </Container>
    </div>
  );
}

export default DocsPage;
export { DocsPage };
