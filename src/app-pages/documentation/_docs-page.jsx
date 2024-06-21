import { Breadcrumbs, BreadcrumbItem, Container } from "../../../lib";
import { Sidebar } from "../../../lib/composite/sidebar";
import { sidebarLinks } from "../../nav-links";

function DocsPage({ breadcrumbs = [], children }) {
  return (
    <div>
      <Container fluid sidebarLinks={sidebarLinks} breadcrumbs={breadcrumbs}>
        {children}
      </Container>
    </div>
  );
}

export default DocsPage;
export { DocsPage };
