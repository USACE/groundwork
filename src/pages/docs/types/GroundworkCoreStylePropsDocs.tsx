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
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a margin to all sides.",
          },
          {
            name: "$my",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a margin to the y-axis (top and bottom).",
          },
          {
            name: "$mx",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a margin to the x-axis (left and right).",
          },
          {
            name: "$mt",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a margin to the top.",
          },
          {
            name: "$mb",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a margin to the bottom.",
          },
          {
            name: "$ml",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a margin to the left.",
          },
          {
            name: "$mr",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a margin to the right.",
          },

          {
            name: "$p",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a padding to all sides.",
          },
          {
            name: "$py",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a padding to the y-axis (top and bottom).",
          },
          {
            name: "$px",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a padding to the x-axis (left and right).",
          },
          {
            name: "$pt",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a padding to the top.",
          },
          {
            name: "$pb",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a padding to the bottom.",
          },
          {
            name: "$pl",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a padding to the left.",
          },
          {
            name: "$pr",
            type: () => {
              return (
                <span><a href="/docs/groundwork-size">GroundworkSize</a>{` | number (rem) | string (any valid css size)`}</span>
              );
            },
            defaultValue: "undefined",
            description: "Apply a padding to the right.",
          },

          {
            name: "$bg",
            type: `"dark" | "gray" | "red"| "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "green" | "lime" | "yellow" | "orange" | "teal" | string (css color)`,
            defaultValue: "undefined",
            description: "Apply a background color",
          },
          {
            name: "$c",
            type: `"dark" | "gray" | "red"| "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "green" | "lime" | "yellow" | "orange" | "teal" | string (css color)`,
            defaultValue: "undefined",
            description: "",
          },

          {
            name: "$ff",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/font-family`}>valid CSS font-family)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$fz",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/font-size`}>valid CSS font-size)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$fw",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight`}>valid CSS font-weight)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$lts",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing`}>valid CSS letter-spacing)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$ta",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/text-align`}>valid CSS text-align)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$lh",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/line-height`}>valid CSS line-height)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$fs",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/font-style`}>valid CSS font-style)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$tt",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform`}>valid CSS text-transform)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$td",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration`}>valid CSS text-decoration)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },

          {
            name: "$w",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/width`}>valid CSS width)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$miw",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/min-width`}>valid CSS min-width)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$maw",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/max-width`}>valid CSS max-width)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$h",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/height`}>valid CSS height)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$mih",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/min-height`}>valid CSS min-height)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$mah",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/max-height`}>valid CSS max-height)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },

          {
            name: "$pos",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/position`}>valid CSS position)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$top",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/top`}>valid CSS top)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$left",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/left`}>valid CSS left)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$bottom",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/bottom`}>valid CSS bottom)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$right",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/right`}>valid CSS right)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$inset",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/inset`}>valid CSS inset)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$opacity",
            type: () => {
              return (
                <span>number (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/opacity`}>valid CSS opacity)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
          {
            name: "$display",
            type: () => {
              return (
                <span>string (<a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/display`}>valid CSS display)</a></span>
              );
            },
            defaultValue: "undefined",
            description: "",
          },
        ]}
      />
    </Container>
  );
};

export default GroundworkCoreStylePropsDocs;
