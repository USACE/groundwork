import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import SiteWrapper from ".";

const renderSiteWrapper = (props = {}) =>
  renderToStaticMarkup(
    <SiteWrapper
      links={[{ id: "home", text: "Home", href: "/" }]}
      title="Test site title"
      subtitle="Test site subtitle"
      navRight={<span>Account</span>}
      showFooter={false}
      {...props}
    >
      <main>Page content</main>
    </SiteWrapper>,
  );

describe("SiteWrapper collapseHeader", () => {
  it("renders the complete header by default", () => {
    const markup = renderSiteWrapper();

    expect(markup).toContain("header_banner_container");
    expect(markup).toContain("Test site title");
    expect(markup).toContain("Test site subtitle");
  });

  it("keeps navigation controls while hiding the expanded header content", () => {
    const markup = renderSiteWrapper({ collapseHeader: true });

    expect(markup).not.toContain("header_banner_container");
    expect(markup).not.toContain("Test site title");
    expect(markup).not.toContain("Test site subtitle");
    expect(markup).toContain("Account");
    expect(markup).toContain("Visit the homepage of this site");
    expect(markup).toContain("Page content");
  });
});
