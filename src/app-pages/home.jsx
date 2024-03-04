import { Container, Text, Code, UsaceBox, TextLink, Hero } from "../../lib";
import CopyButton from "../app-components/copy-button";

const base = import.meta.env.BASE_URL;

function Home() {
  return (
    <>
      <Hero
        image={`${base}nww-lucky-peak-dam.jpg`}
        title="Groundwork"
        subtitle="React Component Library"
      />

      <Container>
        <div className="mt-6">
          <UsaceBox title="Welcome">
            <Text>
              Welcome to the homepage for the Groundwork React Components,
              building blocks for webpages using the USACE enterprise theme.
              These components are designed to be used by USACE Developers
              building internal and externally facing web pages and web apps. We
              are continuously adding better accessability, and contributions
              are welcome to extend the library, contribution guidelines are
              available in the GitHub Repo.
            </Text>
          </UsaceBox>
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
            <UsaceBox title="Getting Started">
              <div className="flex flex-row justify-start space-between items-center gap-2 mb-3">
                <Code className="block w-full p-1 px-2">
                  npm install @usace/groundwork
                </Code>
                <CopyButton text="npm install @usace/groundwork" />
              </div>

              <Text>
                Then, import the components you need, and start building your
                application
              </Text>
              <div className="mt-3">
                <TextLink href="/docs" className="text-lg font-bold">
                  Check out the docs
                </TextLink>
              </div>
            </UsaceBox>
            <UsaceBox
              customTitle={() => {
                return (
                  <span>
                    <span className="inline-block">Contributing</span>
                  </span>
                );
              }}
            >
              <Text>
                Contributions are welcome! Please see the{" "}
                <TextLink href="https://github.com/USACE/groundwork">
                  GitHub Repository
                </TextLink>{" "}
                for more information.
              </Text>
            </UsaceBox>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
