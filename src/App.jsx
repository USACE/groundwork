import { SiteWrapper, SearchDotGov } from "../lib";
import { getNavHelper } from "internal-nav-helper";
import { useConnect } from "redux-bundler-hook";

const version = import.meta.env.PKG_VERSION;

const links = [
  {
    id: "getting-started",
    text: "Getting Started",
    href: "/docs",
  },
  {
    id: "application-shell",
    text: "Application Shell",
    href: "/docs/application-shell",
    children: [
      {
        id: "site-wrapper",
        text: "Site Wrapper",
        href: "/docs/application-shell/site-wrapper",
      },
    ],
  },
  {
    id: "layout",
    text: "Layout",
    href: "/docs/layout",
    children: [
      {
        id: "container",
        text: "Container",
        href: "/docs/layout/container",
      },
      {
        id: "usace-box",
        text: "USACE Box",
        href: "/docs/layout/usace-box",
      },
    ],
  },
  {
    id: "components",
    text: "Navigation",
    href: "/docs/navigation",
    children: [
      {
        id: "breadcrumbs",
        text: "Breadcrumbs",
        href: "/docs/navigation/breadcrumbs",
      },
      {
        id: "tabs",
        text: "Tabs",
        href: "/docs/navigation/tabs",
      },
    ],
  },
];

const sidebarLinks = [
  {
    text: "Getting Started",
    href: "/docs",
  },
  {
    text: "Application Shell",
    href: "/docs/app-shell",
    children: [
      {
        text: "Site Wrapper",
        href: "/docs/app-shell/site-wrapper",
      },
      {
        text: "Search",
        href: "/docs/app-shell/search",
      },
    ],
  },
  {
    text: "Layout",
    href: "/docs/layout",
    children: [
      {
        text: "Container",
        href: "/docs/layout/container",
      },
      {
        text: "UsaceBox",
        href: "/docs/layout/usace-box",
      },
    ],
  },
  {
    text: "Navigation",
    href: "/docs/navigation",
    children: [
      {
        text: "Breadcrumbs",
        href: "/docs/navigation/breadcrumbs",
      },
      {
        text: "Tabs",
        href: "/docs/navigation/tabs",
      },
    ],
  },
  {
    text: "Buttons",
    href: "/docs/buttons",
    children: [
      {
        text: "Generic Buttons",
        href: "/docs/buttons/generic-buttons",
      },
      {
        text: "Ok/Cancel",
        href: "/docs/buttons/ok-cancel",
      },
      {
        text: "Delete/Confirm",
        href: "/docs/buttons/delete-confirm",
      },
    ],
  },
  {
    text: "Display",
    href: "/docs/display",
    children: [
      {
        text: "Badge",
        href: "/docs/display/badge",
      },
      {
        text: "Headings",
        href: "/docs/display/headings",
      },
      {
        text: "Hero",
        href: "/docs/display/hero",
      },
      {
        text: "Text",
        href: "/docs/display/text",
      },
      {
        text: "Table",
        href: "/docs/display/table",
      },
      {
        text: "Accordion",
        href: "/docs/display/accordion",
      },
      {
        text: "Card",
        href: "/docs/display/card",
      },
    ],
  },
  {
    text: "Forms",
    href: "/docs/forms",
    children: [
      {
        text: "Fieldset",
        href: "/docs/forms/fieldset",
      },
      {
        text: "Text Inputs",
        href: "/docs/forms/text-inputs",
      },
      {
        text: "Text Area",
        href: "/docs/forms/textarea",
      },
      {
        text: "Numeric Inputs",
        href: "/docs/forms/numeric-inputs",
      },
      {
        text: "Color Input",
        href: "/docs/forms/color-input",
      },
      {
        text: "Date/Time Inputs",
        href: "/docs/forms/date-time-inputs",
      },
      {
        text: "File Input",
        href: "/docs/forms/file-input",
      },
    ],
  },
  {
    text: "Water Management",
    href: "/docs/water-management",
  },
  {
    text: "Types",
    href: "/docs/types",
    children: [
      {
        text: "Link",
        href: "/docs/types/link",
      },
      {
        text: "Tab",
        href: "/docs/types/tab",
      },
    ],
  },
];

function App() {
  const {
    route: Route,
    hash,
    doUpdateHash,
  } = useConnect("selectRoute", "selectHash", "doUpdateHash");

  if (hash === "") {
    window.setTimeout(() => {
      doUpdateHash("/");
    }, 100);
    return null;
  }

  return (
    <div onClick={getNavHelper((url) => doUpdateHash(url))}>
      <SiteWrapper
        links={sidebarLinks}
        usaBanner={true}
        subtitle={`Groundwork React Components v${version}`}
        missionText="We strive to provide the best React components for the USACE."
        aboutText="This is the about text for the footer."
        navRight={
          <SearchDotGov
            affiliate="groundwork"
            accessKey="JdBfW2_sGkdcLr4BTzCoOQIRy3oRP7kmzJ2DwIs-SCM="
          />
        }
      >
        <Route />
      </SiteWrapper>
    </div>
  );
}

export default App;
