import { useConnect } from "redux-bundler-hook";
import { Container, Sidebar, Breadcrumbs, BreadcrumbItem } from "../../../lib";
import sidebarLinks from "../../nav-links";

function DocsPage({ breadcrumbs = [], children }) {
  const { hash } = useConnect("selectHash");
  return (
    <Container fluid>
      <Breadcrumbs>
        {breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem
            key={breadcrumb.text}
            href={breadcrumb.href}
            text={breadcrumb.text}
          />
        ))}
      </Breadcrumbs>
      <div className="md:gw-grid gw-grid-cols-12 gw-gap-6">
        <div className="md:gw-col-span-2">
          <Sidebar
            title="Contents"
            selectedPath={`/#${hash}`}
            sidebarLinks={sidebarLinks}
          />
        </div>
        <div className="gw-col-span-12 md:gw-col-span-10">{children}</div>
      </div>
    </Container>
  );
}

export default DocsPage;
export { DocsPage };
