import React from "react";
import styled from "styled-components";
import { GroundworkCoreStyleProps } from "../../types/groundwork-types";
import parseStyleProps from "../../util/parseStyleProps";

interface NavLinkProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  className?: string;
  as?: string;
  href?: string;
  isActive?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

const LeftSection = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const RightSection = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
`;

const CenterSection = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const NavLinkWrapper = ({ children, as, ...props }: NavLinkProps) => {
  delete props.isActive;
  return React.createElement(as || "span", props, children);
};

const RawNavLink = ({
  children,
  leftSection,
  rightSection,
  ...props
}: NavLinkProps) => {
  return (
    <NavLinkWrapper {...props}>
      {leftSection && <LeftSection>{leftSection}</LeftSection>}
      <CenterSection>{children}</CenterSection>
      {rightSection && <RightSection>{rightSection}</RightSection>}
    </NavLinkWrapper>
  );
};

const NavLink = styled(RawNavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  color: ${(p) => p.theme.colors.dark[6]};

  &:hover {
    background-color: ${(p) => p.theme.colors.light[1]};
  }

  ${(p) =>
    p.isActive
      ? `
    background-color: ${p.theme.colors.light[2]};
    font-weight: 600;
  `
      : ""}

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default NavLink;
export { NavLink };
export type { NavLinkProps };
