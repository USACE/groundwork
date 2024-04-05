import {
  UsaceBox,
  H3,
  H4,
  Text,
  Code,
  Card,
  useCdaTimeSeries,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import ParamsTable from "../../../app-components/params-table";
import DocsPage from "../_docs-page";

const returnParams = [
  {
    name: "data",
    type: "object?",
    desc: (
      <>
        Undefined until the request has resolved, then an object containing the
        response (if a valid response is received). The return object will vary
        depending on the request endpoint, but response definitions for each CDA
        endpoint are available in the{" "}
        <a
          href="https://cwms-data.usace.army.mil/cwms-data/swagger-ui.html"
          className="underline"
        >
          CDA Swagger Docs
        </a>
        .
      </>
    ),
  },
  {
    name: "isPending",
    type: "boolean",
    desc: "Is true until a query response is received, then false.",
  },
  {
    name: "error",
    type: "object?",
    desc: "Is null if no error has occurred, else an object containing the error.",
  },
];

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/docs",
  },
  {
    text: "Water Management",
    href: "/docs/water-management",
  },
  {
    text: "Data Hooks",
    href: "/docs/water-management/data-hooks",
  },
];

function DataHooks() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Data Hooks Overview">
        {/* Description of the component and what problem it solves */}
        <div>
          <Text>
            The groundwork water management data fetching hooks make use of the{" "}
            <a href="https://tanstack.com/query/latest" className="underline">
              TanStack Query
            </a>{" "}
            (FKA React Query) library. This library handles the nitty gritty
            bits of fetching, caching, synchronizing, and updating server state
            such as that exposed by cwms-data-api (CDA).
          </Text>
        </div>
        {/* Example usage - remove if not needed */}
        <H3 className="pt-6 pb-3">Basic Usage</H3>
        <Text className="pb-3">
          Use of the data hooks requires that your app/site be wrapped in a
          QueryClientProvider. The QueryClientProvider will expose a QueryClient
          that should be instantiated at the top level of your application. The
          following is an example of an app wrapped with both a ReduxBundler and
          a QueryClient:
        </Text>
        {/* Example code */}
        <CodeExample
          code={`import React from "react";
import ReactDOM from "react-dom/client";
import { ReduxBundlerProvider } from "redux-bundler-hook";
import getStore from "./app-bundles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";

const store = getStore();

if (process.env.NODE_ENV === "development") window.store = store;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxBundlerProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ReduxBundlerProvider>
  </React.StrictMode>
);
`}
        />
        <H3 className="pt-6 pb-3">Configuration</H3>
        <Text>
          While the default configuration will likely suffice for most use
          cases, TanStack Query is highly configurable for individualized needs.
          The configuration can be adjusted either when the QueryClient is
          instantiated or for individual useQuery requests. See the docs for{" "}
          <a
            href="https://tanstack.com/query/latest/docs/reference/QueryClient"
            className="underline"
          >
            QueryClient
          </a>{" "}
          and for{" "}
          <a
            href="https://tanstack.com/query/latest/docs/framework/react/reference/useQuery"
            className="underline"
          >
            useQuery
          </a>
          . Due to the nature of water management data (i.e. occasional large
          data requests, data rarely changing "on-the-fly") users may consider
          increasing the "staleTime" on a default or per-query basis to limit
          unnecessary refetches.
        </Text>
        <H3 className="pt-6 pb-3">Return Object</H3>
        <Text>
          Each custom data hook will return the same object as TanStack Query's
          useQuery function. While useQuery returns a number of parameters, it
          is expected that most use cases will be covered by the following
          return parameters:
        </Text>
        <div className="font-bold text-lg pt-6">
          Return Parameters -{" "}
          <Code className="p-2">{`const {...} = useQuery()`}</Code>
        </div>
        <ParamsTable paramsList={returnParams} showReq={false} />
        <Text className="pt-3">
          A full list of the return parameters for useQuery hooks can be
          referenced in the{" "}
          <a
            href="https://tanstack.com/query/latest/docs/framework/react/reference/useQuery"
            className="underline"
          >
            useQuery documentation
          </a>
          .
        </Text>
      </UsaceBox>
    </DocsPage>
  );
}

export { DataHooks };
export default DataHooks;
