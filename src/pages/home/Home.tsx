import { useState } from "react";
import { Container } from "../../../lib/components/layout/Container";
import { Grid, GridCol } from "../../../lib/components/layout/Grid";
import { Text } from "../../../lib/components/display/Text";
import { Code } from "../../../lib/components/display/Code";
import { Flex } from "../../../lib/components/layout/Flex";
import { IconButton } from "../../../lib/components/buttons/IconButton";
import { Paper } from "../../../lib/components/core/Paper";
import { Card } from "../../../lib/components/display/Card";
import { Image } from "../../../lib/components/display/Image";
import { Badge } from "../../../lib/components/display/Badge";
import { BsCopy } from "react-icons/bs";
import { GoThumbsup } from "react-icons/go";

const handleCopy = () => {
  navigator.clipboard.writeText("npm install @usace/groundwork");
};

const Home = () => {
  const [copying, setCopying] = useState(false);
  return (
    <Container $pt={3}>
      <h1>USACE Groundwork</h1>
      <p>React Component Library</p>
      <hr />
      <Text size="lg" $pt={3} $pb={3}>
        Welcome to the homepage for the Groundwork React Components, building
        blocks for webpages using the USACE enterprise theme. These components
        are designed to be used by USACE Developers building internal and
        externally facing web pages and web apps. We are continuously adding
        better accessability, and contributions are welcome to extend the
        libary, contribution guidelines are available in the GitHub Repo.
      </Text>
      <Grid $pt={2} $pb={3} colGap="xl">
        <GridCol span={6}>
          <Paper border $h="100%">
            <h2>Getting Started</h2>
            <p>To get started, install the library in your project with; </p>
            <Flex justify="space-between" align="center" colGap="sm">
              <Code block $ta={"left"} $w="100%">
                npm install @usace/groundwork
              </Code>
              <IconButton
                title="Copy to Clipboard"
                variant={copying ? "filled" : "primary"}
                color={copying ? "green" : ""}
                size="sm"
                onClick={() => {
                  handleCopy();
                  setCopying(true);
                  setTimeout(() => {
                    setCopying(false);
                  }, 1000);
                }}
              >
                {copying ? <GoThumbsup /> : <BsCopy />}
              </IconButton>
            </Flex>
            <p>
              Then, import the components you need, and start building your
              application!
            </p>
            <a href="/docs">
              <Text size="lg" $pt={2}>
                Check out the docs
              </Text>
            </a>
          </Paper>
        </GridCol>
        <GridCol span={6}>
          <Card border $h="100%">
            <Image
              $mah="160px"
              alt="saturn"
              src="undraw_developer_activity.svg"
            ></Image>
            <Flex justify="space-between" align="center">
              <h2>Contributing</h2>
              <Badge size="sm">Code!</Badge>
            </Flex>
            <p>
              Contributions are welcome! Please see the{" "}
              <a href="https://github.com/USACE/groundwork">
                GitHub Repository
              </a>{" "}
              for more information.
            </p>
          </Card>
        </GridCol>
      </Grid>
    </Container>
  );
};

export default Home;
