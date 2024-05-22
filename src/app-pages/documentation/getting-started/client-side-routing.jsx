import { UsaceBox, Code, Text, H3, H4 } from "../../../../lib";
import { CodeBlock } from "../../../app-components/code-block";
import { CodeExample } from "../../../app-components/code-example";
import DocsPage from "../_docs-page";

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
    text: "Client-Side Routing",
    href: "/#/docs/client-side-routing",
  },
];

function P({ children }) {
  return <Text className="gw-pt-3 gw-pb-3">{children}</Text>;
}

function ClientSideRouting() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Client-Side Routing">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <P>
            Often, when building a web application with Groundwork, you will be
            building what we call a <strong>single-page application</strong>{" "}
            (SPA). This means that the browser will only load the page once and
            then navigate between different pages by updating the URL in the
            browser without making a request to the server. The only HTML file
            associated with the application is the index.html file. All other
            pages are rendered using JavaScript.
          </P>
          <P>
            This guide should be treated as a recommendation, as with many web
            development things, it is very opinionated. There are multiple
            client-side routing solutions that can be used with Groundwork. The
            following is a guide on how to use the{" "}
            <a
              href="https://reduxbundler.com"
              className="gw-underline"
              target="_blank"
            >
              Redux Bundler
            </a>{" "}
            framework to handle client-side routing.
          </P>
          <P>
            Redux Bundler is a framework that provides a simple and efficient
            way to manage state in your application. It has more utilities, but
            this guide will focus primarily on the routing capabilities. There
            are a few terms that you should be familiar with before we get
            started:
          </P>
          <ul className="gw-list-disc gw-pl-6 gw-pb-3">
            <li>
              <strong>Store</strong>: The store is where the state of your
              application lives. It is a single object that holds the entire
              state of your application.
            </li>
            <li>
              <strong>Redux</strong>: Redux is a state management library for
              JavaScript applications. It is commonly used with React to manage
              the state of an application. You don't need to understand how
              Redux works to use Redux Bundler, but it can be helpful when you
              need more complex state management.
            </li>
            <li>
              <strong>Redux-Bundler</strong>: Redux Bundler is a framework that
              takes the bundles that we write and organizes them into a Redux
              store. This abstracts us away from some of the implementation
              details and boiler-plate that is common to Redux.
            </li>
            <li>
              <strong>Bundle</strong>: A bundle is a collection of actions,
              selectors, and reducers that are related to a particular piece of
              state in your application. We use bundles to organize our code and
              make it easier to manage. Think of a bundle as a chunk of the
              store, many similar libraries call this a slice.
            </li>
            <li>
              <strong>Route Bundle</strong>: A route bundle is a special type of
              bundle that is used to define the routes in your application.
            </li>
          </ul>

          <H3>Installation</H3>
          <P>
            To get started, we'll need to install the Redux Bundler package and
            a couple additional dependencies:
          </P>
          <Code className="!gw-font-bold">terminal</Code>
          <CodeExample
            code={`npm install redux-bundler redux-bundler-hook internal-nav-helper`}
          ></CodeExample>
          <P>
            The <Code>redux-bundler</Code> package is the core of the Redux
            Bundler framework.
          </P>
          <P>
            <Code>redux-bundler-hook</Code> gives us the{" "}
            <Code>{`<ReduxBundlerProvider />`}</Code> context wrapper and a hook
            to access the Redux Bundler store from a React component.
          </P>
          <P>
            Finally, the <Code>internal-nav-helper</Code> package provides a
            utility to handle client-side navigation. With this package we can
            use simple anchor tags to navigate between pages rather than using a
            special <Code>Link</Code> component.
          </P>

          <H3>Clean up the project folder</H3>
          <P>
            The first step is to clean up our project folder. The Vite scaffold
            gives you a good jumping off point, but we typically organize our
            application code in a particular way. This step is optional but the
            rest of the guide will assume you have followed these steps. These
            steps also assume that you have walked through a project set up
            using the{" "}
            <a href="/#/docs/quick-start" className="gw-underline">
              quick start guide
            </a>{" "}
            and{" "}
            <a href="/#/docs/adding-tailwind" className="gw-underline">
              adding Tailwind CSS
            </a>{" "}
            tutorials.
          </P>
          <ol className="gw-list-decimal gw-pl-6">
            <li>
              Delete the <Code>./src/assets</Code> folder
            </li>
            <li>
              Delete <Code>./src/App.css</Code>
            </li>
            <li>
              Create the following folders:
              <ul className="gw-list-disc gw-pl-6">
                <li>
                  <Code>./src/app-bundles</Code>
                </li>
                <li>
                  <Code>./src/app-pages</Code>
                </li>
                <li>
                  <Code>./src/app-pages/home</Code>
                </li>
                <li>
                  <Code>./src/app-pages/location</Code>
                </li>
              </ul>
            </li>
            <li>
              Create the following files:
              <ul className="gw-list-disc gw-pl-6">
                <li>
                  <Code>./src/app-bundles/index.js</Code>
                </li>
                <li>
                  <Code>./src/app-bundles/routes-bundle.js</Code>
                </li>
                <li>
                  <Code>./src/app-pages/home/index.jsx</Code>
                </li>
                <li>
                  <Code>./src/app-pages/location/index.jsx</Code>
                </li>
              </ul>
            </li>
          </ol>
          <P>
            Note the <Code>.js</Code> and <Code>.jsx</Code> file extensions. We
            use the <Code>.jsx</Code> extension on any file that will export one
            or more React components and <Code>.js</Code> for pure JavaScript.
          </P>

          <H3>Creating our first pages</H3>
          <P>
            We'll start by creating two pages: a home page and a location page.
            This way we can demonstrate navigating between pages using our
            router as well as how to use parameters from the URL in our pages to
            decide what to render to the page.
          </P>
          <P>
            Edit the <Code>./src/app-pages/home/index.jsx</Code> file to match
            the content below:
          </P>
          <Code className="!gw-font-bold">./src/app-pages/home/index.jsx</Code>
          <CodeExample
            code={`import { UsaceBox } from "@usace/groundwork";

const locations = ["nwd", "swd", "nwp", "swp", "mvp", "nab"];

export default function Home() {
  return (
    <UsaceBox className="mt-8" title="Welcome Home">
      <div>
        <p>Choose a location:</p>
        <ul>
          {locations.map((location) => (
            <li className="hover:underline" key={location}>
              <a href={\`/location/\${location}\`}>{location}</a>
            </li>
          ))}
        </ul>
      </div>
    </UsaceBox>
  );
}`}
          ></CodeExample>
          <P>
            Here we have an array of location strings, say we want to give the
            user the ability to see details about each of these locations, but
            we don't want to hard-code html pages for each, that would take
            forever. Since we know each has roughly the same attributes, we can
            have an abstract location page which we can provide a location key
            to render information about a specific location record.
          </P>
          <P>
            As you can see in the loop where we're rendering the links, we're
            going to send the user to a location page and add the location key
            as part of the actual URL. We'll talk a little about how that works
            in the next steps.
          </P>

          <P>
            Edit the <Code>./src/app-pages/location/index.jsx</Code> file:
          </P>
          <Code className="!gw-font-bold">
            ./src/app-pages/location/index.jsx
          </Code>
          <CodeExample
            code={`import { UsaceBox } from "@usace/groundwork";
import { useConnect } from "redux-bundler-hook";

export default function Location() {
  const { routeParams } = useConnect("selectRouteParams");
  const location = routeParams?.location?.toUpperCase();

  return (
    <UsaceBox className="mt-8" title={\`Location: \${location}\`}>
      <div>
        <p>This could be a detail page about {location}</p>
        <a className="hover:underline" href="/">
          Go back home
        </a>
      </div>
    </UsaceBox>
  );
}`}
          ></CodeExample>
          <P>
            Here we're using the <Code>useConnect</Code> hook from the{" "}
            <Code>redux-bundler-hook</Code> package to get the route parameters
            from the store. The route parameters are the parameters that are
            passed in the URL. In this case, we're looking for a parameter
            called <Code>location</Code>. We then use that parameter to render
            the location name in the title of the UsaceBox.
          </P>
          <P>
            You could use the location parameter to kick off a call to an API
            for more information to render, or for anything you want really.
          </P>
          <P>
            Ok, so now we have two pages, and some concept that there should be
            a store, but we haven't created it yet. Let's do that next.
          </P>

          <H3>Creating the Store</H3>
          <P>
            So, before we create the store itself, we need to create our route
            bundle. Open the <Code>./src/app-bundles/route-bundle.js</Code> file
            and add the following content:
          </P>
          <Code className="!gw-font-bold">
            ./src/app-bundles/route-bundle.js
          </Code>
          <CodeExample
            code={`import { createRouteBundle } from "redux-bundler";
import Home from "../app-pages/home";
import Location from "../app-pages/location";

export default createRouteBundle({
  "/": Home,
  "/location/:location": Location,
  "*": Home,
});`}
          >
            {" "}
          </CodeExample>
          <P>
            We're importing each of our pages, Home and Location, and
            registering them to particular paths using the{" "}
            <Code>createRouteBundle</Code> function. Each key on the object you
            pass to <Code>createRouteBundle</Code> should be a path pattern that
            maps to a particular React component you want to render when the
            browser lands on that URL.
          </P>
          <P>
            You might notice that in the <Code>"/location/:location"</Code>{" "}
            path, we are using a colon to denote a parameter. This is how we
            tell the router that this part of the URL is a variable and should
            be available to the application.
          </P>
          <P>
            The <Code>"*"</Code> path is a catch-all route that will render the
            Home component if the user navigates to a path that isn't defined in
            the route bundle. In most cases you would want to create a custom
            404 page to handle this case.
          </P>

          <P>
            Now we can create the store. Edit the{" "}
            <Code>./src/app-bundles/index.js</Code> file:
          </P>
          <Code className="!gw-font-bold">./src/app-bundles/index.js</Code>
          <CodeExample
            code={`import { composeBundles, createUrlBundle } from "redux-bundler";
import routeBundle from "./route-bundle";

export default composeBundles(createUrlBundle(), routeBundle);`}
          ></CodeExample>
          <P>
            Here we're importing the <Code>composeBundles</Code> function and a
            utility bundle called <Code>createUrlBundle</Code> from the{" "}
            <Code>redux-bundler</Code> package and our route bundle. We're
            passing each of the bundles to the <Code>composeBundles</Code>{" "}
            function and exporting the result. This is our store.
          </P>
          <P>
            The <Code>createUrlBundle</Code> function is what we call a "bundle
            creator", it's like a factory method in some ways as it is a
            function that returns a bundle. The Redux Bundler library includes a
            few of these out of the box.
          </P>

          <H3>Wiring the Store to the React application</H3>
          <P>
            Now that we have our store, we need to wrap our application in the{" "}
            <Code>{`<ReduxBundlerProvider />`}</Code> component. You can do this
            at a couple different places in your application, but the most
            common place is at the top level in the <Code>./src/main.jsx</Code>{" "}
            file.
          </P>
          <P>
            Edit the <Code>./src/main.jsx</Code> file:
          </P>
          <Code className="!gw-font-bold">./src/main.jsx</Code>
          <CodeExample
            code={`import React from "react";
import ReactDOM from "react-dom/client";
import getStore from "./app-bundles";
import { ReduxBundlerProvider } from "redux-bundler-hook";
import App from "./App.jsx";
import "./index.css";

const store = getStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxBundlerProvider store={store}>
      <App />
    </ReduxBundlerProvider>
  </React.StrictMode>
);`}
          ></CodeExample>
          <P>
            Here we're importing the <Code>ReduxBundlerProvider</Code> component
            from the <Code>redux-bundler-hook</Code> package and our store from
            the <Code>./src/app-bundles</Code> file. The store needs to be
            instantiated, a step that allows you to bootstrap the store with
            state if you wish, in this case we're creating the stock store.
            We're then wrapping our application in the{" "}
            <Code>{`<ReduxBundlerProvider />`}</Code> component and passing the
            store as a prop.
          </P>

          <P>
            Finally we need to edit <Code>./src/App.jsx</Code> to get the
            appropriate component from the store based on the current URL:
          </P>
          <Code className="!gw-font-bold">./src/App.jsx</Code>
          <CodeExample
            code={`import { useConnect } from "redux-bundler-hook";
import { SiteWrapper, Container } from "@usace/groundwork";
import "@usace/groundwork/dist/style.css";

function App() {
const { route: Route } = useConnect("selectRoute");
  return (
    <SiteWrapper>
      <Container>
        <Route />
      </Container>
    </SiteWrapper>
  );
}

export default App;`}
          ></CodeExample>
          <P>
            We're using the <Code>useConnect</Code> hook from the{" "}
            <Code>redux-bundler-hook</Code> package to get the route from the
            store. The route is a React component that we can render to the
            page. The route bundle is matching the current URL path to the keys
            from the route object we created earlier to decide which component
            to return here. We're then rendering that component inside a{" "}
            <Code>{`<Container />`}</Code> component from the Groundwork
            library. Note that you do need to rename <Code>route</Code> to{" "}
            <Code>Route</Code> in the <Code>useConnect</Code> call, this is due
            to a convention in React where components must be capitalized. JSX
            tags using the lowercase version are assumed to be valid HTML tags.
          </P>
          <P>
            At this point, you should be able to start your development server
            and navigate between the home and location pages using the links.
            One thing pops out though, every time you click on a link, the page
            refreshes, which kind of makes sense, but since we're using a single
            page application, we'd like to avoid that. Let's fix that next.
          </P>

          <H3>Using the internal-nav-helper</H3>
          <P>
            The <Code>internal-nav-helper</Code> package provides a utility that
            we can use to inspect any anchor-tag clicks and prevent the default
            behavior of the browser for clicks that stay internal to the
            application. This will allow us to navigate between pages without
            causing a full page refresh, but still allow the browser to navigate
            to external links as usual.
          </P>
          <P>
            Edit the <Code>./src/App.jsx</Code> file:
          </P>
          <Code className="!gw-font-bold">./src/App.jsx</Code>
          <CodeExample
            code={`import { useConnect } from "redux-bundler-hook";
import { getNavHelper } from "internal-nav-helper";
import { SiteWrapper, Container } from "@usace/groundwork";
import "@usace/groundwork/dist/style.css";

function App() {
  const { route: Route, doUpdateUrl } = useConnect(
    "selectRoute",
    "doUpdateUrl"
  );
  return (
    <div
      onClick={getNavHelper((url) => {
        doUpdateUrl(url);
      })}
    >
      <SiteWrapper>
        <Container>
          <Route />
        </Container>
      </SiteWrapper>
    </div>
  );
}

export default App;`}
          ></CodeExample>
          <P>
            This works because events in react get bubbled up to the top of the
            application before they are handled, so we can intercept all clicks
            by wrapping the app in a div with a special click handler.
            Internal-nav-helper inspects all clicks to see if it is a link to a
            page in the application, and if so, it will prevent the default
            behavior of the browser and call the function you provide with the
            URL that was clicked. In this case, we're calling the{" "}
            <Code>doUpdateUrl</Code> function from the store to update the URL
            in the browser without causing a full page refresh. All other clicks
            are ignored and the default behavior takes over.
          </P>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default ClientSideRouting;
export { ClientSideRouting };
