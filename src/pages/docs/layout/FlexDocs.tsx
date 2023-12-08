import Code from "../../../../lib/components/display/Code";
import { Container } from "../../../../lib/components/layout/Container";
import Text from "../../../../lib/components/display/Text";
import { Card } from "../../../../lib/components/display/Card";
import { Styled } from "../../../../lib/components/core/Styled";
import { Flex } from "../../../../lib/components/layout/Flex";
import PropsTable from "../PropsTable";
import { SiDocsdotrs } from "react-icons/si";

const FlexDocs = () => {
  return (
    <Container $mb={3}>
      <h2>
        <Code>component</Code> Flex
      </h2>

      <Text $mt={1} $mb={2}>
        The <Code>Flex</Code> component is used to wrap content in a element
        with <Code>display: flex;</Code> for easy layout.
      </Text>

      <Code block>{`import {Flex} from "@usace/groundwork";`}</Code>

      <Styled $pt={3}>
        <h3>Examples</h3>
        <Card border $mt={1}>
          <Flex
            justify="center"
            align="center"
            $mb={2}
            $bg="#1864ab"
            $c="#fff"
            $maw="300px"
          >
            <Text>Container</Text>
            <SiDocsdotrs />
          </Flex>
          <Flex
            justify="space-around"
            align="center"
            $mb={2}
            $bg="#1864ab"
            $c="#fff"
            $maw="300px"
          >
            <Text>Container</Text>
            <SiDocsdotrs />
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            $mb={2}
            $bg="#1864ab"
            $c="#fff"
            $maw="300px"
          >
            <Text>Container</Text>
            <SiDocsdotrs />
          </Flex>
          <Code block>{`
import {Flex, Text} from "@usace/groundwork";
import { SiDocsdotrs } from "react-icons/si";

<Flex justify="center" align="center" $mb={2} $bg="#1864ab" $c="#fff" $maw="300px">
  <Text>Container</Text>
  <SiDocsdotrs />
</Flex>

<Flex justify="space-around" align="center" $mb={2} $bg="#1864ab" $c="#fff" $maw="300px">
  <Text>Container</Text>
  <SiDocsdotrs />
</Flex>

<Flex justify="space-between" align="center" $mb={2} $bg="#1864ab" $c="#fff" $maw="300px">
  <Text>Container</Text>
  <SiDocsdotrs />
</Flex>
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
              name: "flexDir",
              type: "string: 'row' | 'column'",
              defaultValue: "row",
              description:
                "Sets the flex-direction of the flex container. This is the same as the CSS flex-direction property.",
            },
            {
              name: "align",
              type: "string: 'flex-start' | 'flex-end' | 'center' | 'space-between'",
              defaultValue: "flex-start",
              description:
                "Sets the align-items of the flex container. This is the same as the CSS align-items property.",
            },
            {
              name: "justify",
              type: "string: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'",
              defaultValue: "flex-start",
              description:
                "Sets the justify-content of the flex container. This is the same as the CSS justify-content property.",
            },
            {
              name: "wrap",
              type: "boolean",
              defaultValue: "false",
              description:
                "Sets the CSS flex-wrap property to 'wrap'. This allows flex items to wrap onto multiple lines, from top to bottom.",
            },
            {
              name: "colGap",
              type: () => {
                return <a href="/docs/groundwork-size">GroundworkSize</a>;
              },
              defaultValue: "none",
              description:
                "Sets the column-gap of the flex container. Use theme sizes or raw values. This is the same as the CSS column-gap property.",
            },
            {
              name: "rowGap",
              type: () => {
                return <a href="/docs/groundwork-size">GroundworkSize</a>;
              },
              defaultValue: "none",
              description:
                "Sets the row-gap of the flex container. Use theme sizes or raw values. This is the same as the CSS row-gap property.",
            },
            {
              name: "as",
              type: "string: html element type",
              defaultValue: "div",
              description:
                "Sets the element type to render. Defaults to 'div'.",
            },
            {
              name: "href",
              type: "string",
              defaultValue: "null",
              description: "If set, renders an anchor tag with the given href.",
            },
          ]}
        />
      </Styled>
    </Container>
  );
};

export default FlexDocs;
