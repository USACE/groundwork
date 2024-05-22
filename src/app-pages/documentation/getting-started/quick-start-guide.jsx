import { UsaceBox, Code, Text, H3 } from "../../../../lib";
import { CodeBlock } from "../../../app-components/code-block";
import { CodeExample } from "../../../app-components/code-example";
import DocsPage from "../_docs-page";
import { TbPlayerTrackNext } from "react-icons/tb";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Getting Started",
    href: "/docs",
  },
  {
    text: "Quick Start Guide",
    href: "/docs/quick-start",
  },
];

function P({ children }) {
  return <Text className="gw-pt-3 gw-pb-3">{children}</Text>;
}

function QuickStartGuide() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Quick Start Guide">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <P>
            This guide will lead you through the process of starting up a new
            front-end project using the Groundwork component library and a few
            of our other recommended libraries. This quick start will get you up
            and running with a new project in no time. The guide will cover the
            basic setup using our preferred build system Vite. After completing
            the quick start, feel free to move on to the guides covering adding
            our preferred CSS library and configuring routing in an SPA (Single
            Page Application).
          </P>

          <H3 className="gw-mt-6">Project Setup with Vite</H3>
          <P>
            <a className="gw-underline" href="https://vitejs.dev">
              Vite
            </a>{" "}
            is the build system we use for our front-end development. It will
            transpile your code in Typescript or JavaScript into bundles of
            JavaScript that the browser can use efficiently. It includes a
            development server that allows you to preview your site as you build
            it with included hot-reload. It does lots more, but I'll let{" "}
            <a
              className="gw-underline"
              href="https://vitejs.dev/guide/why.html"
            >
              the Vite docs
            </a>{" "}
            do the heavy lifting if you want more details.
          </P>
          <P>
            Using your terminal, <Code>cd</Code> to the folder where you want
            your front-end project to live, in my case I often put projects in{" "}
            <Code className="gw-text-nowrap">~/code</Code> for example.
          </P>
          <P>
            Run <Code className="gw-text-nowrap">npm create vite@latest</Code>.
            This will walk you through a few options:{" "}
          </P>
          <ol className="gw-ml-6 gw-list-decimal">
            <li>
              Name your project, Vite will create a folder with this name in the
              current working directory.
            </li>
            <li>Pick a framework, we're using React</li>
            <li>Pick a variant, We're going to use JavaScript</li>
          </ol>
          <P>
            Vite will create your project with some basic scaffolding, which we
            can use to make sure the setup went right, but we'll clean out most
            of it as we start to build our app.
          </P>

          <H3 className="gw-mt-6">Test the Setup</H3>
          <P>Follow the prompts from the Vite CLI</P>
          <Code className="!gw-font-bold">terminal</Code>
          <CodeBlock
            code={`cd <project_name>
npm install
npm run dev`}
          ></CodeBlock>
          <P>
            The install step can take a minute depending on network access. If
            everything went ok, you should see the following message in your
            console after running{" "}
            <Code className="gw-text-nowrap">npm run dev</Code>:
          </P>
          <Code className="!gw-font-bold">terminal</Code>
          <CodeBlock
            code={`VITE v5.2.6  ready in 248 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help`}
          ></CodeBlock>
          <P>
            Open your browser to the URL{" "}
            <Code className="gw-text-nowrap">http://localhost:5173/</Code> (you
            can ctrl+click the URL in most consoles).{" "}
          </P>
          <P>
            If you see a site with the Vite and React logos above a button that
            operates a simple counter then you're good to go!{" "}
          </P>
          <P>
            Hit <Code className="gw-text-nowrap">ctrl+c</Code> to shut down your
            development server, we're going to make some changes and then start
            it back up in a little bit.
          </P>

          <H3 className="gw-mt-6">Add Groundwork</H3>
          <P>
            Now that we have a basic project setup, we can add the Groundwork
            component library to our project. We'll use npm to install it and
            then import the CSS file into our project.
          </P>
          <P>
            In the same terminal run{" "}
            <Code className="gw-text-nowrap">
              npm install @usace/groundwork
            </Code>
          </P>

          <H3 className="gw-mt-6">Start using Groundwork</H3>
          <P>
            Open the project folder in the IDE of your choice, we typically use{" "}
            <a
              className="gw-underline"
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="no-referrer"
            >
              VSCode
            </a>
            .
          </P>
          <P>
            Open the <Code className="gw-text-nowrap">./src/index.css</Code>{" "}
            file, delete everything here, we don't want these styles colliding
            with what we're doing.
          </P>
          <P>
            Open the <Code className="gw-text-nowrap">./src/App.jsx</Code> file.
            We're going to replace the contents with the code block below:
          </P>
          <Code className="!gw-font-bold">./src/App.jsx</Code>
          <CodeExample
            code={`import { SiteWrapper, Container, UsaceBox } from "@usace/groundwork";
import "@usace/groundwork/dist/style.css";

function App() {
  return (
    <SiteWrapper>
      <Container>
        <UsaceBox title="My New Site">
          <div>Hello World</div>
        </UsaceBox>
      </Container>
    </SiteWrapper>
  );
}

export default App;`}
          />
          <P>
            There are lots of options for customizing the site wrapper, but this
            should get you a basic header, footer and styled content on the
            page.
          </P>

          <H3 className="gw-mt-6">Next, Adding Tailwind</H3>
          <P>
            While not strictly necessary, using the Tailwind CSS framework
            provides a number of benefits to an app that's using Groundwork. You
            can always just roll your own CSS if you need to extend the
            Groundwork components, but if you want to use an existing library,
            you'll have the easiest time using Tailwind, since that's what
            Groundwork uses under the hood.
          </P>
          <P>
            <a href="/docs/adding-tailwind" className="gw-underline">
              <span className="gw-flex gw-items-center gw-gap-2">
                <span>Keep Reading</span> <TbPlayerTrackNext />
              </span>
            </a>
          </P>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default QuickStartGuide;
export { QuickStartGuide };
