import { Code, H3, Text, TextLink, UsaceBox } from "../../../../lib";
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
    text: "Contribution Guide",
    href: "/#/docs/contribution-guide",
  },
];

function P({ children }) {
  return <Text className="gw-pt-3 gw-pb-3">{children}</Text>;
}

function ContributionGuide() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Contribution Guide">
        <div className="gw-pb-6">
          <P>
            Groundwork is a shared React component library for USACE
            applications. Contributions should stay focused, keep the component
            library stable for downstream consumers, and include the docs or
            tests needed to support the change.
          </P>

          <H3 className="gw-mt-6">Development setup</H3>
          <P>
            Groundwork&apos;s GitHub Actions workflows run on Node 20, so use
            the same version locally when possible.
          </P>
          <Code className="!gw-font-bold">terminal</Code>
          <pre className="gw-mt-3 gw-overflow-x-auto gw-rounded gw-bg-slate-900 gw-p-4 gw-text-sm gw-text-white">
            <code>{`npm install
npm run dev
npm test
npm run lint`}</code>
          </pre>

          <H3 className="gw-mt-6">Coding standards</H3>
          <ul className="gw-list-disc gw-pl-6 gw-pt-3 gw-pb-3">
            <li>
              Use Prettier formatting. A Husky pre-commit hook runs{" "}
              <Code>lint-staged</Code> on staged <Code>js</Code>,{" "}
              <Code>jsx</Code>, <Code>json</Code>, <Code>css</Code>, and{" "}
              <Code>md</Code> files.
            </li>
            <li>
              Run <Code>npm run lint</Code> before opening a pull request.
            </li>
            <li>
              Add or update tests when behavior changes. Groundwork uses Vitest
              for the current test suite.
            </li>
            <li>
              Update the documentation pages when a component API, usage
              pattern, or behavior changes.
            </li>
            <li>
              Edit source in <Code>src</Code> and <Code>lib</Code>. Do not
              hand-edit built output in <Code>dist</Code> or <Code>docs</Code>.
              These are generated from the source files and will be overwritten
              by the build process.
            </li>
          </ul>

          <H3 className="gw-mt-6">Routing links in components</H3>
          <P>
            When adding links inside Groundwork components, prefer the exported{" "}
            <Code>{`<Link />`}</Code> component instead of hard-coding raw{" "}
            <Code>{`<a>`}</Code> elements where LinkProvider support is
            expected. That allows applications using{" "}
            <Code>{`<LinkProvider />`}</Code> to swap in their routing
            library&apos;s link component correctly.
          </P>
          <P>
            See the{" "}
            <TextLink href="/#/docs/navigation/link-provider">
              Link Provider documentation
            </TextLink>{" "}
            for the routing integration details and expected behavior.
          </P>

          <H3 className="gw-mt-6">Branch naming</H3>
          <P>
            Use short-lived topic branches for each change. Prefer patterns like{" "}
            <Code>feature/issue-&lt;number&gt;-short-description</Code>,{" "}
            <Code>fix/issue-&lt;number&gt;-short-description</Code>,{" "}
            <Code>docs/issue-&lt;number&gt;-short-description</Code>, or{" "}
            <Code>chore/issue-&lt;number&gt;-short-description</Code>.
          </P>
          <P>
            If there is no issue number yet, omit that segment and keep the
            description concise.
          </P>

          <H3 className="gw-mt-6">Pull requests and reviews</H3>
          <ul className="gw-list-disc gw-pl-6 gw-pt-3 gw-pb-3">
            <li>
              Link the issue or describe the problem the pull request solves.
            </li>
            <li>Keep each pull request focused on one change set.</li>
            <li>Include screenshots for visible UI changes when useful.</li>
            <li>
              Call out accessibility, API, or migration impact in the pull
              request description.
            </li>
            <li>Request review from a Groundwork maintainer before merging.</li>
          </ul>
          <P>
            Reviewers should be able to confirm the scope is appropriate, the
            docs and tests match the change, and the selected version bump is
            correct.
          </P>

          <H3 className="gw-mt-6">Versioning and releases</H3>
          <P>
            Groundwork uses semantic versioning and requires exactly one version
            label on every pull request to <Code>main</Code>.
          </P>
          <ul className="gw-list-disc gw-pl-6 gw-pt-3 gw-pb-3">
            <li>
              <Code>patch-bump</Code>: bug fixes, docs-only changes, and
              backward-compatible maintenance work
            </li>
            <li>
              <Code>minor-bump</Code>: new backward-compatible components,
              props, or behavior
            </li>
            <li>
              <Code>major-bump</Code>: breaking API changes, removals, or
              behavior that requires consumer updates
            </li>
          </ul>
          <P>
            After a pull request is merged, repository automation bumps the
            package version and pushes the tag. Publishing to npm happens when a
            GitHub Release is published.
          </P>

          <H3 className="gw-mt-6">Reference</H3>
          <P>
            The canonical repo guidance also lives in{" "}
            <TextLink
              href="https://github.com/USACE/groundwork/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
            >
              CONTRIBUTING.md on GitHub
            </TextLink>
            .
          </P>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default ContributionGuide;
export { ContributionGuide };
