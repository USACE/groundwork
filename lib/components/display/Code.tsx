import styled from "styled-components";
import parseStyleProps from "../../util/parseStyleProps";
import {
  GroundworkColor,
  GroundworkCoreStyleProps,
} from "../../types/groundwork-types";
import React, { forwardRef } from "react";

interface CodeProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  ref?: unknown;
  block?: boolean; // not used right now
  backgroundColor?: GroundworkColor;
  backgroundShade?: number;
}

const RawCode = forwardRef(({ children, block, ...props }: CodeProps, ref) => {
  props.ref = ref;
  return React.createElement(block ? "pre" : "span", props, children);
});

const Code = styled(RawCode)`
  background-color: ${(p) => {
    const clr = p.backgroundColor || "gray";
    const shade = p.backgroundShade || 2;
    return p.theme.colors[clr][shade];
  }};
  padding: 0.25rem 0.5rem;
  border-radius: 0.2rem;
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-family: ${(p) => p.theme.fontFamilyMonospace};

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default Code;
export { Code };
export type { CodeProps };
