import styled from "styled-components";
import parseStyleProps from "../../util/parseStyleProps";
import {
  GroundworkCoreStyleProps,
  GroundworkSize,
} from "../../types/groundwork-types";
import React, { forwardRef } from "react";

interface FlexProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  ref?: unknown;
  flexDir?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "space-between";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  wrap?: boolean;
  colGap?: GroundworkSize;
  rowGap?: GroundworkSize;
  as?: string;
  href?: string;
}

const RawFlex = forwardRef(({ children, as, ...props }: FlexProps, ref) => {
  props.ref = ref;

  // Get rid of custom style props that cause React to complain
  delete props.colGap;
  delete props.rowGap;
  delete props.wrap;
  delete props.flexDir;
  delete props.align;
  delete props.justify;

  return React.createElement(as || "div", props, children);
});

const Flex = styled(RawFlex)`
  display: flex;
  flex-direction: ${(p) => p.flexDir || "row"};
  align-items: ${(p) => p.align || "flex-start"};
  justify-content: ${(p) => p.justify || "flex-start"};
  flex-wrap: ${(p) => (p.wrap ? "wrap" : "nowrap")};
  column-gap: ${(p) => p.theme.spacing[p.colGap || "none"]};
  row-gap: ${(p) => p.theme.spacing[p.rowGap || "none"]};

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default Flex;
export { Flex };
export type { FlexProps };
