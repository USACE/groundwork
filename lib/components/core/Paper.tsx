import React from "react";
import styled from "styled-components";
import {
  GroundworkCoreStyleProps,
  GroundworkRadius,
  GroundworkShadow,
  GroundworkSpacing,
} from "../../types/groundwork-types";
import parseStyleProps from "../../util/parseStyleProps";

interface PaperProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  className?: string;
  as?: string;
  href?: string;
  padding?: GroundworkSpacing;
  radius?: GroundworkRadius;
  shadow?: GroundworkShadow;
  border?: boolean;
}

const RawPaper = ({ children, as, ...props }: PaperProps) => {
  delete props.radius;
  delete props.shadow;
  delete props.border;
  return React.createElement(as || "div", props, children);
};

const Paper = styled(RawPaper)`
  padding: ${(p) => {
    const spacing = p.padding || "md";
    return p.theme.spacing[`${spacing}`];
  }};
  border-radius: ${(p) => p.theme.radius[p.radius || "md"]};
  ${(p) => (p.border ? `border: 1px solid ${p.theme.colors.light[4]};` : "")}
  box-shadow: ${(p) => p.theme.shadows[p.shadow || "md"]};
  background-color: ${(p) => p.theme.colors.light[0]};

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default Paper;
export { Paper };
export type { PaperProps };
