import Code from "../../../../lib/components/display/Code";
import Text from "../../../../lib/components/display/Text";
import Container from "../../../../lib/components/layout/Container";
import PropsTable from "../PropsTable";
import Badge from "../../../../lib/components/display/Badge";

const GroundworkCoreStylePropsDocs = () => {
  return (
    <Container $mb={3}>
      <h2 style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
        <Badge>interface</Badge> GroundworkCoreStyleProps
      </h2>
      <Text $mt={1} $mb={2}>
        The <Code>GroundworkCoreStyleProps</Code> interface is used to define
        the core style props that are available to most components in the
        Groundwork library. These props use the <Code>$</Code> prefix to avoid
        prop leakage into the DOM, for more of an explanation see the{" "}
        <a href="/">styled-components docs.</a>
      </Text>
      <PropsTable
        props={[
          {
            name: "$m",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$my",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$mx",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$mt",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$mb",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$ml",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$mr",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },

          {
            name: "$p",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$py",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$px",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$pt",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$pb",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$pl",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$pr",
            type: "StyleProp<GroundworkSpacing>",
            defaultValue: "",
            description: "",
          },

          {
            name: "$bg",
            type: "StyleProp<GroundworkColor>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$c",
            type: "StyleProp<GroundworkColor>",
            defaultValue: "",
            description: "",
          },

          {
            name: "$ff",
            type: "StyleProp<React.CSSProperties['fontFamily']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$fz",
            type: "StyleProp<React.CSSProperties['fontSize']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$fw",
            type: "StyleProp<React.CSSProperties['fontWeight']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$lts",
            type: "StyleProp<React.CSSProperties['letterSpacing']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$ta",
            type: "StyleProp<React.CSSProperties['textAlign']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$lh",
            type: "StyleProp<React.CSSProperties['lineHeight']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$fs",
            type: "StyleProp<React.CSSProperties['fontStyle']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$tt",
            type: "StyleProp<React.CSSProperties['textTransform']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$td",
            type: "StyleProp<React.CSSProperties['textDecoration']>",
            defaultValue: "",
            description: "",
          },

          {
            name: "$w",
            type: "StyleProp<React.CSSProperties['width']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$miw",
            type: "StyleProp<React.CSSProperties['minWidth']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$maw",
            type: "StyleProp<React.CSSProperties['maxWidth']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$h",
            type: "StyleProp<React.CSSProperties['height']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$mih",
            type: "StyleProp<React.CSSProperties['minHeight']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$mah",
            type: "StyleProp<React.CSSProperties['maxHeight']>",
            defaultValue: "",
            description: "",
          },

          {
            name: "$pos",
            type: "StyleProp<React.CSSProperties['position']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$top",
            type: "StyleProp<React.CSSProperties['top']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$left",
            type: "StyleProp<React.CSSProperties['left']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$bottom",
            type: "StyleProp<React.CSSProperties['bottom']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$right",
            type: "StyleProp<React.CSSProperties['right']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$inset",
            type: "StyleProp<React.CSSProperties['inset']>",
            defaultValue: "",
            description: "",
          },

          {
            name: "$opacity",
            type: "StyleProp<React.CSSProperties['opacity']>",
            defaultValue: "",
            description: "",
          },
          {
            name: "$display",
            type: "StyleProp<React.CSSProperties['display']>",
            defaultValue: "",
            description: "",
          },
        ]}
      />
    </Container>
  );
};

export default GroundworkCoreStylePropsDocs;
