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
        <div className="mt-3 mb-3">
          <Text>
            Groundwork is a set of React components that are designed to be used
            by USACE Developers building internal and externally facing web
            pages and web apps. The library should be compatible with any React
            project using a build step. We test the framework and only support
            using the Vite build tool. See the{" "}
            <a
              className="underline"
              href="https://vitejs.dev/guide/"
              target="_blank"
              referrer="no-referrer"
            >
              Vite documentation
            </a>{" "}
            for more details on getting started.{" "}
          </Text>
          <Text className="mt-3">
            Set up a new project with Vite using the following command:
          </Text>
          <div className="mt-3">
            <div className="flex flex-row justify-start space-between items-center gap-2 mt-3 mb-3">
              <Code className="block p-1 px-2">
                {`npm create vite@latest <app-name> --template react`}
              </Code>
              <CopyButton text="npm create vite@latest <app-name> --template react" />
            </div>
          </div>
        </div>

        <H4>Installation</H4>
        <div className="flex flex-row justify-start space-between items-center gap-2 mt-3 mb-3">
          <Code className="block p-1 px-2">npm install @usace/groundwork</Code>
          <CopyButton text="npm install @usace/groundwork" />
        </div>

        <H4>Import Components and Styles</H4>
        <div className="flex flex-row justify-start space-between items-center gap-2 mt-3 mb-3">
          <Code className="block p-1 px-2">
            {`import { SiteWrapper, ... } from @usace/groundwork`}
          </Code>
          <CopyButton text="import { SiteWrapper, ... } from @usace/groundwork" />
        </div>
        <div className="flex flex-row justify-start space-between items-center gap-2 mt-3 mb-3">
          <Code className="block p-1 px-2">
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
