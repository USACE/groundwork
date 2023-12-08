import styled from "styled-components";
import parseStyleProps from "../../util/parseStyleProps";
import {
  GroundworkCoreStyleProps,
  GroundworkSize,
} from "../../types/groundwork-types";
import React, { forwardRef } from "react";

interface TextProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  ref?: unknown;
  span?: boolean;
  inline?: boolean; // not used right now
  size?: GroundworkSize;
}

const RawText = forwardRef(({ children, span, ...props }: TextProps, ref) => {
  props.ref = ref;
  return React.createElement(span ? "span" : "p", props, children);
});

const Text = styled(RawText)`
  font-size: ${(p) => p.theme.fontSizes[p.size || "md"]};
  line-height: ${(p) => p.theme.lineHeights[p.size || "md"]};

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default Text;
export { Text };
export type { TextProps };
