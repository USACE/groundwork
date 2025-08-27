import { UsaceBox, Code, Text } from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const BASE_URL = import.meta.env.BASE_URL;

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: `${BASE_URL}#/docs`,
  },
  {
    text: "Application Shell",
    href: `${BASE_URL}#/docs/app-shell`,
  },
  {
    text: "Site Wrapper",
    href: `${BASE_URL}#/docs/app-shell/site-wrapper`,
  },
];

const siteWrapperProps = [
  {
    name: "links",
    type: "array[Link]",
    default: "[]",
    desc: "An array of objects to be used as links in the header. Each object should have an id, text, and href property. If you would like a drop-down of links include a children property which is an array of link objects to the top level link.",
  },
  {
    name: "navRight",
    type: "component",
    default: "null",
    desc: "A custom component that will render to the right of the header links.",
  },
  {
    name: "usaBanner",
    type: "boolean",
    default: "true",
    desc: "If true, the government website banner will be displayed at the top of the page.",
  },
  {
    name: "msgBanner",
    type: "component",
    default: "null",
    desc: "A custom component that will render between the government website banner and the header or just below the header. This is useful for displaying a message banner that is specific to the site or page.",
  },
  {
    name: "msgBannerPosition",
    type: "string - 'top' || 'bottom'",
    default: "'top'",
    desc: "Specify if the msgBanner should be displayed above or below the header navigation sections. Must either be 'top' or 'bottom' any other value will cause the msgBanner to not be displayed.",
  },
  {
    name: "showFooter",
    type: "boolean",
    default: "true",
    desc: "If true, the footer will be displayed at the bottom of the page. Set to false to hide the footer in case you need the screen space for something like a map viewer.",
  },
  {
    name: "title",
    type: "string",
    default: "US Army Corps of Engineers",
    desc: "The title to display in the header.",
  },
  {
    name: "subtitle",
    type: "string",
    default: "''",
    desc: "A subtitle to display in the header.",
  },
  {
    name: "missionText",
    type: "string",
    default: "''",
    desc: "The mission text to display in the footer.",
  },
  {
    name: "aboutText",
    type: "string",
    default: "''",
    desc: "The about text to display in the footer.",
  },
  {
    name: "facebookUrl",
    type: "string",
    default: "''",
    desc: "The URL to a Facebook page.",
  },
  {
    name: "twitterUrl",
    type: "string",
    default: "''",
    desc: "The URL to a Twitter page.",
  },
  {
    name: "youtubeUrl",
    type: "string",
    default: "''",
    desc: "The URL to a YouTube page.",
  },
  {
    name: "flickrUrl",
    type: "string",
    default: "''",
    desc: "The URL to a Flickr page.",
  },
  {
    name: "instagramUrl",
    type: "string",
    default: "''",
    desc: "The URL to an Instagram page.",
  },
  {
    name: "linkedInUrl",
    type: "string",
    default: "''",
    desc: "The URL to a LinkedIn page.",
  },
  {
    name: "usaceLinks",
    type: "array[Link]",
    default: "[]",
    desc: "An array of objects to be used as links in the footer. These links should point to USACE websites. Each object should have an id, text, and href property.",
  },
  {
    name: "externalLinks",
    type: "array[Link]",
    default: "[]",
    desc: "An array of objects to be used as external links in the footer. Use these links to point to external non-USACE websites. Each object should have an id, text, and href property.",
  },
  {
    name: "armyLogo",
    type: "boolean",
    default: "true",
    desc: "If true, the Army logo will be displayed in the footer.",
  },
  {
    name: "army250Logo",
    type: "boolean",
    default: "false",
    desc: "If true, the Army 250 yr anniversary logo will be displayed in the footer.",
  },
  {
    name: "usaceLogo",
    type: "boolean",
    default: "true",
    desc: "If true, the USACE logo will be displayed in the footer.",
  },
  {
    name: "usace250Logo",
    type: "boolean",
    default: "false",
    desc: "If true, the USACE 250 yr anniversary logo will be displayed in the footer.",
  },
  {
    name: "rsgisLogo",
    type: "boolean",
    default: "false",
    desc: "If true, the RSGIS logo will be displayed in the footer.",
  },
  {
    name: "cwbiLogo",
    type: "boolean",
    default: "false",
    desc: "If true, the CWBI logo will be displayed in the footer.",
  },
  {
    name: "showWarning",
    type: "boolean",
    default: "false",
    desc: "If true, the standard DoD warning banner will pop up when the site loads.",
  },
  {
    name: "warningTimeout",
    type: "boolean",
    default: "1000 * 60 * 60 * 24 * 30 (30 days)",
    desc: "Time in milliseconds, When a user clears the DoD warning we will hide it for 30 days by default, adjust that time here.",
  },
];

function SiteWrapperDocs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Site Wrapper">
        <div className="gw-pb-6">
          <Text>
            Use the Site Wrapper to add the header and footer to your page. The
            best way to do this is add SiteWrapper to the top level of your
            application and render any changing content as children of the
            SiteWrapper component.
          </Text>
          <Text className="gw-pt-3">
            For example, in a Vite project you typically have a src/App.jsx file
            which is the top level component for the application. You would
            import the SiteWrapper component there and use it to wrap the rest
            of your application.
          </Text>
          <Text className="gw-pt-3">
            Note that in the example below, the useConnect hook is used to get
            the current content that should be rendered based on the url. This
            uses a separate state management framework called{" "}
            <a
              className="gw-underline"
              href="https://reduxbundler.com"
              target="_blank"
              rel="noreferrer"
            >
              ReduxBundler
            </a>
            , which we highly recommend for React state management.
          </Text>{" "}
        </div>
        <CodeExample
          code={`import { SiteWrapper } from "@usace/groundwork";
import { useConnect } from "redux-bundler-hook";

const links = [{ id: "docs", text: "Documentation", href: "/docs" }];

function App() {
  const {
    route: Route,
  } = useConnect("selectRoute");

  return (
      <SiteWrapper links={links}>
        <Route />
      </SiteWrapper>
  );
}

export default App;
`}
        />
        <div className="gw-font-bold gw-text-lg gw-pt-6">
          Component API - <Code className="gw-p-2">{`<SiteWrapper />`}</Code>
        </div>
        <PropsTable propsList={siteWrapperProps} />
      </UsaceBox>
    </DocsPage>
  );
}

export default SiteWrapperDocs;
export { SiteWrapperDocs };
