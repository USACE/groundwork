import Code from "../../../../lib/components/display/Code";
import { Container } from "../../../../lib/components/layout/Container";
import Text from "../../../../lib/components/display/Text";
import { Card } from "../../../../lib/components/display/Card";
import { Styled } from "../../../../lib/components/core/Styled";
import PropsTable from "../PropsTable";
import Badge from "../../../../lib/components/display/Badge";

const ContainerDocs = () => {
  return (
    <Container $mb={3}>
      <h2 style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
        <Badge>component</Badge> Container
      </h2>

      <Text $mt={1} $mb={2}>
        The <Code>Container</Code> component is used to wrap content in a
        fixed-width container. The <Code>fluid</Code> prop can be used to make
        the container full-width.
      </Text>

      <Code block>{`import {Container} from "@usace/groundwork";`}</Code>

      <Styled $pt={3}>
        <h3>Examples</h3>
        <Card border $mt={1}>
          <Container maxWidth="200px" $bg="#1864ab" $c="#fff">
            <Text>Container</Text>
          </Container>
          <Code block>{`
import {Container, Text} from "@usace/groundwork";

<Container maxWidth="200px" $bg="#1864ab" $c="#fff">
  <Text>Container</Text>
</Container>
                    `}</Code>
        </Card>
      </Styled>

      <Styled $pt={3}>
        <Card border $mt={1}>
          <Container $bg="#1864ab" $c="#fff">
            <Text>Container</Text>
          </Container>
          <Code block>{`
import {Container, Text} from "@usace/groundwork";

<Container $bg="#1864ab" $c="#fff">
  <Text>Container</Text>
</Container>
                    `}</Code>
        </Card>
      </Styled>

      <Styled $pt={3}>
        <h3>Props</h3>
        <PropsTable
          props={[
            {
              name: "{...GroundworkCoreStyleProps}",
              type: () => {
                return (
                  <a href="/docs/core-style-props">GroundworkCoreStyleProps</a>
                );
              },
              defaultValue: "null",
              description:
                "Supports all core style props, see the docs for that interface for more detail.",
            },
            {
              name: "maxWidth",
              type: "string",
              defaultValue: "1140px",
              description: "Sets the maximum width of the container.",
            },
            {
              name: "fluid",
              type: "boolean",
              defaultValue: "false",
              description: "Makes the container full-width.",
            },
          ]}
        />
      </Styled>
    </Container>
  );
};

export default ContainerDocs;
