import styled from "styled-components";
import parseStyleProps from "../../util/parseStyleProps";
import { GroundworkCoreStyleProps } from "../../types/groundwork-types";
import React from "react";

interface StyledProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  as?: string;
  href?: string;
}

const RawStyled = ({ children, as, ...props }: StyledProps) => {
  return React.createElement(as || "div", props, children);
};

const Styled = styled(RawStyled)`
  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default Styled;
export { Styled };
export type { StyledProps };
