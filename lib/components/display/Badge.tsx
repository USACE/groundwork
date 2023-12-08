import React from "react";
import styled from "styled-components";
import parseStyleProps from "../../util/parseStyleProps";
import {
  GroundworkColor,
  GroundworkColorShade,
  GroundworkCoreStyleProps,
  GroundworkRadius,
  GroundworkSize,
} from "../../types/groundwork-types";

interface BadgeProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  as?: string;
  href?: string;
  fullWidth?: boolean;
  size?: GroundworkSize;
  radius?: GroundworkRadius;
  color?: GroundworkColor;
  shade?: GroundworkColorShade;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

const LeftSection = styled.span`
  margin-right: 0.5rem;
`;

const RightSection = styled.span`
  margin-left: 0.5rem;
`;

const BadgeWrapper = ({ children, as, ...props }: BadgeProps) => {
  return React.createElement(as || "div", props, children);
};

const RawBadge = ({ children, ...props }: BadgeProps) => {
  delete props.fullWidth;
  delete props.size;
  delete props.color;
  delete props.shade;
  delete props.leftSection;
  delete props.rightSection;
  delete props.justify;

  return (
    <BadgeWrapper {...props}>
      {props.leftSection && <LeftSection>{props.leftSection}</LeftSection>}
      <span>{children}</span>
      {props.rightSection && <RightSection>{props.rightSection}</RightSection>}
    </BadgeWrapper>
  );
};

const Badge = styled(RawBadge)`
  display: inline-flex;
  align-items: center;
  justify-content: ${(p) => p.justify || "center"};
  padding: 0 ${(p) => p.theme.spacing[p.size || "md"]};
  border-radius: ${(p) => p.theme.radius[p.radius || "md"]};
  font-size: ${(p) => p.theme.fontSizes[p.size || "md"]};
  background-color: ${(p) => {
    if (p.color && p.shade) {
      return p.theme.colors[p.color][p.shade];
    } else if (p.color) {
      return p.theme.colors[p.color][5];
    } else {
      const primary =
        p.theme.colors[p.theme.primaryColor][p.theme.primaryShade];
      return primary;
    }
  }};
  color: #fff;

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default Badge;
export { Badge };
export type { BadgeProps };
