import { UsaceBox, Code, Text, H3, H4, Divider, Badge } from "../../../../lib";
import { CodeBlock } from "../../../app-components/code-block";
import { CodeExample } from "../../../app-components/code-example";
import DocsPage from "../_docs-page";
import { TbPlayerTrackNext } from "react-icons/tb";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Getting Started",
    href: "/#/docs",
  },
  {
    text: "Adding Tailwind CSS",
    href: "/#/docs/adding-tailwind",
  },
];

function P({ children }) {
  return <Text className="gw-pt-3 gw-pb-3">{children}</Text>;
}

function AddingTailwind() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Adding Tailwind CSS">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <P>
            Tailwind is a CSS framework that has become very popular over the
            past few years. Unlike lots of CSS frameworks, Tailwind is based on
            what they call utility classes. Each class represents (typically) a
            1-1 tie to a CSS property/value pair, i.e. <Code>class="pl-3"</Code>{" "}
            sets the left-padding of an element to a spacing of{" "}
            <Code>0.75rem</Code>, from the default Tailwind spacing scale.
          </P>
          <P>
            For the full framework documentation see the{" "}
            <a
              className="gw-underline"
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              rel="no-referrer"
            >
              Tailwind Documentation
            </a>
            . The following is a quick guide to adding Tailwind to a new
            project, coming straight from the Tailwind documentation.
          </P>
          <Divider text={<Badge color="red">DISCLAIMER</Badge>} />
          <p>
            Tailwind does CSS resets on many base level tags for cross browser
            support see{" "}
            <a
              href="https://tailwindcss.com/docs/preflight"
              target="_blank"
              rel="no-referrer"
              aria-label="Tailwind preflight documentation"
              className="gw-underline"
            >
              Preflight
            </a>{" "}
            for more information.
          </p>
          <P>
            It is NOT recommended to use multiple CSS frameworks due to CSS
            overwriting each other / naming conflicts.{" "}
            <b>Do this at your own risk.</b> Groundwork expects you to be using
            Vanilla CSS or Tailwind for all your styling needs.
          </P>
          <Divider />
          <H3 className="gw-mt-6">Install and Configure Tailwind</H3>
          <P>
            Install <Code>@tailwindcss</Code> and <Code>@tailwindcss/vite</Code>{" "}
            via npm.
          </P>
          <Code className="!gw-font-bold">terminal</Code>
          <CodeExample
            code={`npm install tailwindcss @tailwindcss/vite`}
          ></CodeExample>

          <P>
            Add the <Code>@tailwindcss/vite</Code> plugin to your Vite
            configuration.
          </P>
          <Code className="!gw-font-bold">vite.config.js</Code>
          <CodeExample
            code={`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`}
          ></CodeExample>

          <P>
            Add an <Code>@import</Code> to your CSS file that imports Tailwind
            CSS.
          </P>
          <Code className="!gw-font-bold">./src/index.css</Code>
          <CodeExample code={`@import "tailwindcss"`}></CodeExample>

          <P></P>
          <Code className="!gw-font-bold">terminal</Code>
          <CodeExample code={`npm run dev`}></CodeExample>

          <P>Start Using Tailwind in your project</P>
          <Code className="!gw-font-bold">./src/App.jsx</Code>
          <CodeExample
            code={`import { SiteWrapper, Container, UsaceBox } from "@usace/groundwork";
import "@usace/groundwork/dist/style.css";

function App() {
  return (
    <SiteWrapper>
      <Container>
        <UsaceBox className="mt-8" title="My New Site">
          <div className="text-3xl font-bold underline">Hello World</div>
        </UsaceBox>
      </Container>
    </SiteWrapper>
  );
}

export default App;`}
          ></CodeExample>
          <P>
            Once you have Tailwind installed you can start using the utility
            classes in all of your components. Most Groundwork components allow
            you to override built-in styles by supplying a{" "}
            <Code>className</Code> prop, where you can provide Tailwind classes
            or custom CSS classes pointing to your own stylesheets.
          </P>

          <H3 className="gw-mt-6">Next, handling Client-side Routing</H3>
          <P>
            When creating a single-page application (SPA) you'll want to handle
            client-side routing. Client-side routing means that a user can treat
            your site like any webpage, deep-linking to sub-pages, hitting
            refresh or the back button to navigate. There are many libraries
            that can help with this, but we recommend redux-bundler, keep
            reading to learn more.
          </P>
          <P>
            <a href="/docs/client-side-routing" className="gw-underline">
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

export default AddingTailwind;
export { AddingTailwind };
