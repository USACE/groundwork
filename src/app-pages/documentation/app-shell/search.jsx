import { useState } from "react";
import {
  UsaceBox,
  Code,
  Search,
  SearchDotGov,
  Text,
  H3,
} from "../../../../lib";
import { CodeExample } from "../../../app-components/code-example";
import PropsTable from "../../../app-components/props-table";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Application Shell",
    href: "/#/docs/app-shell",
  },
  {
    text: "Search",
    href: "/#/docs/app-shell/search",
  },
];

const componentProps_Search = [
  {
    name: "value",
    type: "string",
    default: "''",
    desc: "The value of the search input.",
  },
  {
    name: "onChange",
    type: "function",
    default: "''",
    desc: "The function to call when the search input changes.",
  },
  {
    name: "placeholder",
    type: "string",
    default: "'Search'",
    desc: "The placeholder text for the search input.",
  },
  {
    name: "...props",
    type: "misc",
    default: "undefined",
    desc: "Additional props to pass to the input. Supports all built-in input props",
  },
];

const componentProps_SearchDotGov = [
  {
    name: "affiliate",
    type: "string",
    default: "''",
    desc: "The affiliate code for the search.gov search.",
  },
  {
    name: "accessKey",
    type: "string",
    default: "''",
    desc: "The access key for the search.gov search.",
  },
  {
    name: "placeholder",
    type: "string",
    default: "'Search'",
    desc: "The placeholder text for the search input.",
  },
  {
    name: "...props",
    type: "misc",
    default: "undefined",
    desc: "Additional props to pass to the input. Supports all built-in input props",
  },
];

function SearchDocs() {
  const [searchString, setSearchString] = useState("");
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Search">
        {/* Description of the component and what problem it solves */}
        <Text>
          Groundwork provides a set of search components built on top of the
          simple basic search input. The basic search component allows you to
          wire up search handling however you like, treat it like a basic input
          control.
        </Text>
        <Text className="gw-pt-3">
          Down the line, there may be more search options, but our initial more
          complex search option allows you to wire up to Search.gov for custom
          results, assuming they've indexed your site. The configuration of your
          Search.gov profile is out of scope for this documentation but take a
          look at their{" "}
          <a
            className="gw-underline"
            rel="noreferrer"
            target="_blank"
            href="https://search.gov/about/"
          >
            documentation
          </a>{" "}
          to get started.
        </Text>
        <Text className="gw-pt-3">
          Search can be added to the SiteWrapper component as a prop, or used as
          a standalone component.
        </Text>
        <H3 className="gw-pt-6 gw:pb-3">Basic Search</H3>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          <div className="gw-flex gw:flex-col gw:items-center">
            <span className="gw-ml-3">Search String: {searchString}</span>
            <Search
              value={searchString}
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter" && searchString.length > 0) {
                  window.alert("Search for:", searchString);
                }
              }}
            />
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { useState } from "react";
import { Search } from "@usace/groundwork";

function Component() {
  const [searchString, setSearchString] = useState("");
  return (
    <div className="flex flex-col items-center">
      <span className="ml-3">Search String: {searchString}</span>
      <Search
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter" && searchString.length > 0) {
            window.alert("Search for:", searchString);
          }
        }}
      />
    </div>
  );
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw-p-2">{`<Search />`}</Code>
        </div>
        <PropsTable propsList={componentProps_Search} />

        <H3 className="gw-pt-6 gw:pb-3">SearchDotGov</H3>
        {/* Example usage - remove if not needed */}
        <div className="gw-rounded-md gw:border gw:border-dashed gw:px-6 gw:py-3 gw:mb-3">
          <div className="gw-flex gw:flex-col gw:items-center">
            <SearchDotGov
              affiliate="groundwork"
              accessKey="JdBfW2_sGkdcLr4BTzCoOQIRy3oRP7kmzJ2DwIs-SCM="
            />
          </div>
        </div>
        {/* Example code */}
        <CodeExample
          code={`import { SearchDotGov } from "@usace/groundwork";

function Component() {
  return (
    <div className="flex flex-col items-center">
      <SearchDotGov
        affiliate={yourAffiliateCode}
        accessKey={yourAccessKey}
      />
    </div>
  )
}

export default Component;
`}
        />
        {/* Component props documentation */}
        <div className="gw-font-bold gw:text-lg gw:pt-6">
          Component API - <Code className="gw-p-2">{`<SearchDotGov />`}</Code>
        </div>
        <PropsTable propsList={componentProps_SearchDotGov} />
      </UsaceBox>
    </DocsPage>
  );
}

export default SearchDocs;
export { SearchDocs };
