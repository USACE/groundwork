import { UsaceBox, Text, Code, H4 } from "../../../lib";
import CopyButton from "../../app-components/copy-button";
import DocsPage from "./_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
];

function Docs() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Getting Started">
        <H4>Project Setup</H4>
        <div className="gw-mt-3 gw-mb-3">
          <Text>
            Groundwork is a set of React components that are designed to be used
            by USACE Developers building internal and externally facing web
            pages and web apps. The library should be compatible with any React
            project using a build step. We test the framework and only support
            using the Vite build tool. See the{" "}
            <a
              className="gw-underline"
              href="https://vitejs.dev/guide/"
              target="_blank"
              referrer="no-referrer"
            >
              Vite documentation
            </a>{" "}
            for more details on getting started.{" "}
          </Text>
          <Text className="gw-mt-3">
            Set up a new project with Vite using the following command:
          </Text>
          <div className="gw-mt-3">
            <div className="gw-flex gw-flex-row gw-justify-start gw-space-between gw-items-center gw-gap-2 gw-mt-3 gw-mb-3">
              <Code className="gw-block gw-p-1 gw-px-2">
                {`npm create vite@latest <app-name> --template react`}
              </Code>
              <CopyButton text="npm create vite@latest <app-name> --template react" />
            </div>
          </div>
        </div>

        <H4>Installation</H4>
        <div className="gw-flex gw-flex-row gw-justify-start gw-space-between gw-items-center gw-gap-2 gw-mt-3 gw-mb-3">
          <Code className="gw-block gw-p-1 gw-px-2">npm install @usace/groundwork</Code>
          <CopyButton text="npm install @usace/groundwork" />
        </div>

        <H4>Import Components and Styles</H4>
        <div className="gw-flex gw-flex-row gw-justify-start gw-space-between gw-items-center gw-gap-2 gw-mt-3 gw-mb-3">
          <Code className="gw-block gw-p-1 gw-px-2">
            {`import { SiteWrapper, ... } from @usace/groundwork`}
          </Code>
          <CopyButton text="import { SiteWrapper, ... } from @usace/groundwork" />
        </div>
        <div className="gw-flex gw-flex-row gw-justify-start gw-space-between gw-items-center gw-gap-2 gw-mt-3 gw-mb-3">
          <Code className="gw-block gw-p-1 gw-px-2">
            import @usace/groundwork/dist/style.css
          </Code>
          <CopyButton text="import @usace/groundwork/dist/style.css" />
        </div>
        <Text>
          Make sure to import style.css from Groundwork into your top-level
          component, then go build stuff with the components
        </Text>
      </UsaceBox>
    </DocsPage>
  );
}

export default Docs;
export { Docs };
