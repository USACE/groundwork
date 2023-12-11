import Badge from "../../../../lib/components/display/Badge";
import Code from "../../../../lib/components/display/Code";
import Text from "../../../../lib/components/display/Text";
import Container from "../../../../lib/components/layout/Container";

const GroundworkSpacingDocs = () => {
  return (
    <Container $mb={3}>
      <h2 style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
        <Badge>type</Badge> GroundworkSize
      </h2>
      <Text $mt={1} $mb={2}>
        The <Code>GroundworkSize</Code> type is used to map a range of pre-set
        spacing values from the theme to actual values used in the CSS. Below
        are the default theme values, these can be overridden by passing a
        custom theme to the <Code>ThemeProvider</Code> component.
      </Text>
      <Code block>{`
type GroundworkSize = "xs" | "sm" | "md" | "lg" | "xl";
      `}</Code>
    </Container>
  );
};

export default GroundworkSpacingDocs;
