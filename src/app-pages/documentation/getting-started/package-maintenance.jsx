import { UsaceBox, Code, Text, H3 } from "../../../../lib";
// import { CodeBlock } from "../../../app-components/code-block";
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
    text: "Package Maintenance",
    href: "/#/docs/package-maintenance",
  },
];

function P({ children }) {
  return <Text className="gw-pt-3 gw-pb-3">{children}</Text>;
}

function PackageMaintenance() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Package Maintenance">
        {/* Description of the component and what problem it solves */}
        <div className="gw-pb-6">
          <P>
            Package maintenance is crucial in a React app (or any
            JavaScript-based application) because it ensures the long-term
            stability, security, and performance of the project. React apps
            typically depend on a variety of third-party libraries, and managing
            these packages effectively helps prevent issues that could arise
            from outdated, vulnerable, or incompatible dependencies.
          </P>
          <P>Here's why package maintenance is important:</P>
          <ol className="gw-list-disc gw-pl-6 gw-pb-3">
            <li>
              <strong>Security Vulnerabilities: </strong> As libraries evolve,
              security vulnerabilities are discovered in older versions. Keeping
              dependencies updated helps ensure that known vulnerabilities are
              patched. Tools like npm audit check for vulnerable dependencies.
              Regular maintenance reduces the risk of security breaches by
              applying necessary patches.
            </li>
            <li>
              <strong>Bug Fixes and Stability: </strong>
              Older package versions might have bugs that have since been
              resolved in newer versions. Updating packages ensures your app
              benefits from those bug fixes, improving stability. React itself
              evolves, and external libraries often need updates to remain
              compatible. Keeping dependencies in sync with React versions
              ensures that your app runs smoothly.
            </li>
            <li>
              <strong>Performance Improvements: </strong>
              Newer versions of packages often come with optimizations that
              improve performance. This could mean faster rendering times,
              reduced bundle sizes, or better memory usage. Regularly updating
              can help improve your app's overall performance.
            </li>
            <li>
              <strong>New Features: </strong>
              Libraries frequently introduce new features that can enhance
              functionality or ease of development. By staying up-to-date, you
              can take advantage of these improvements.
            </li>
          </ol>

          <H3 className="gw-my-4">package.json</H3>
          <P>
            package.json is a crucial file in any Node.js or React project. It
            contains metadata about the project and manages dependencies,
            scripts, and other settings related to the project’s execution and
            development. See{" "}
            <a
              className="gw-underline"
              href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies"
            >
              npm docs
            </a>{" "}
            for more information.
          </P>

          <H3 className="gw-my-4">Checking for security vulnerabilities</H3>

          <Code className="!gw-font-bold">terminal</Code>
          <CodeExample code={`npm audit`}></CodeExample>

          <CodeExample
            className="gw-mt-3"
            code={`# npm audit report

micromatch  <4.0.8
Severity: moderate
Regular Expression Denial of Service (ReDoS) in micromatch - https://github.com/advisories/GHSA-952p-6rrq-rcjv
fix available via \`npm audit fix\`
node_modules/micromatch

rollup  4.0.0 - 4.22.3
Severity: high
DOM Clobbering Gadget found in rollup bundled scripts that leads to XSS - https://github.com/advisories/GHSA-gcx4-mw62-g8wm
fix available via \`npm audit fix\`
node_modules/rollup

vite  5.0.0 - 5.1.7
Severity: moderate
Vite's \`server.fs.deny\` is bypassed when using \`?import&raw\` - https://github.com/advisories/GHSA-9cwx-2883-4wfx
Vite DOM Clobbering gadget found in vite bundled scripts that leads to XSS - https://github.com/advisories/GHSA-64vr-g452-qvp3
fix available via \`npm audit fix\`
node_modules/vite

3 vulnerabilities (2 moderate, 1 high)

To address all issues, run:
  npm audit fix`}
          ></CodeExample>

          <H3 className="gw-my-4">Resolving security vulnerabilities</H3>

          <Code className="!gw-font-bold">terminal</Code>
          <CodeExample code={`npm audit fix`}></CodeExample>

          <H3 className="gw-my-4">Finding Outdated Packages</H3>

          <Code className="!gw-font-bold">terminal</Code>
          <CodeExample code={`npm outdated`}></CodeExample>

          <CodeExample
            code={`Package                            Current   Wanted   Latest  Location                                  Depended by
@headlessui/react            2.0.0-alpha.4    2.1.9    2.1.9  node_modules/@headlessui/react            groundwork
@types/react                       18.2.53  18.3.11  18.3.11  node_modules/@types/react                 groundwork
@types/react-dom                   18.2.18   18.3.0   18.3.0  node_modules/@types/react-dom             groundwork
@vitejs/plugin-react                 4.2.1    4.3.2    4.3.2  node_modules/@vitejs/plugin-react         groundwork
autoprefixer                       10.4.17  10.4.20  10.4.20  node_modules/autoprefixer                 groundwork
eslint                              8.56.0   8.57.1   9.12.0  node_modules/eslint                       groundwork
eslint-plugin-react                 7.33.2   7.37.1   7.37.1  node_modules/eslint-plugin-react          groundwork
eslint-plugin-react-hooks            4.6.0    4.6.2    4.6.2  node_modules/eslint-plugin-react-hooks    groundwork
eslint-plugin-react-refresh          0.4.5   0.4.12   0.4.12  node_modules/eslint-plugin-react-refresh  groundwork
postcss                             8.4.33   8.4.47   8.4.47  node_modules/postcss                      groundwork
react                               18.2.0   18.3.1   18.3.1  node_modules/react                        groundwork
react-dom                           18.2.0   18.3.1   18.3.1  node_modules/react-dom                    groundwork
react-icons                          5.0.1    5.3.0    5.3.0  node_modules/react-icons                  groundwork
tailwind-merge                       2.5.2    2.5.3    2.5.3  node_modules/tailwind-merge               groundwork
tailwindcss                          3.4.1   3.4.13   3.4.13  node_modules/tailwindcss                  groundwork
vite                                5.0.13    5.4.8    5.4.8  node_modules/vite                         groundwork
vitest                               2.1.1    2.1.2    2.1.2  node_modules/vitest                       groundwork`}
          ></CodeExample>

          <H3 className="gw-my-4">Updating Outdated Packages</H3>

          <Code className="!gw-font-bold">terminal</Code>
          <CodeExample code={`npm update`}></CodeExample>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default PackageMaintenance;
export { PackageMaintenance };
