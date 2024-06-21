import { UsaceBox, Code, Text, H3, H4 } from "../../../../lib";
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
    text: "Adding Tailwind CSS",
    href: "/docs/adding-tailwind",
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

          <H3 className="gw-mt-6">Install and Configure Tailwind</H3>
          <P>
            Install <Code>tailwindcss</Code> and its peer dependencies, then use
            the init utility to generate your <Code>tailwind.config.js</Code>{" "}
            and <Code>postcss.config.js</Code> files.
          </P>
          <Code className="!gw-font-bold">terminal</Code>
          <CodeExample
            code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
          ></CodeExample>

          <P>
            Add the paths to all of your template files in your{" "}
            <Code>tailwind.config.js</Code> file.
          </P>
          <Code className="!gw-font-bold">tailwind.config.js</Code>
          <CodeExample
            code={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
          ></CodeExample>

          <P>
            Add the Tailwind directives to your CSS file. This will include the
            Tailwind base, components, and utilities styles.
          </P>
          <Code className="!gw-font-bold">./src/index.css</Code>
          <CodeExample
            language="css"
            code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          ></CodeExample>

          <P>Start your build process and development server.</P>
          <Code className="!gw-font-bold">terminal</Code>
          <CodeExample language={"bash"} code={`npm run dev`}></CodeExample>

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
