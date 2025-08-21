import { Container, Text, Code, UsaceBox, TextLink, Hero } from "../../lib";
import CopyButton from "../app-components/copy-button";

const BASE_URL = import.meta.env.BASE_URL;

function Home() {
  return (
    <>
      <Hero
        image={[
          `${BASE_URL}nww-lucky-peak-dam.jpg`,
          `${BASE_URL}taylorsville-SPPRu4Rw.jpg`,
        ]}
        alt={["Lucky Peak Dam", "Taylorsville Dam"]}
        title="Groundwork"
        subtitle="React Component Library"
      />

      <Container>
        <div className="gw-mt-6">
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
          <div className="gw-grid gw-grid-cols-1 gw-gap-6 gw-mt-6 sm:gw-grid-cols-2">
            <UsaceBox title="Getting Started">
              <div className="gw-flex gw-flex-row gw-justify-start gw-space-between gw-items-center gw-gap-2 gw-mb-3">
                <Code className="gw-block gw-w-full gw-p-1 gw-px-2">
                  npm install @usace/groundwork
                </Code>
                <CopyButton text="npm install @usace/groundwork" />
              </div>

              <Text>
                Then, import the components you need and our CSS, and start
                building your application
              </Text>
              <div className="gw-mt-3">
                <TextLink href="/docs" className="gw-text-lg gw-font-bold">
                  Check out the docs
                </TextLink>
              </div>
            </UsaceBox>
            <UsaceBox
              customTitle={() => {
                return (
                  <span>
                    <span className="gw-inline-block">Contributing</span>
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
