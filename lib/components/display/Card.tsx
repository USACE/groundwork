import React from "react";
import styled from "styled-components";
import { PaperProps } from "../core/Paper";
import parseStyleProps from "../../util/parseStyleProps";

interface CardProps extends PaperProps {}

const RawCard = ({ children, as, ...props }: CardProps) => {
  delete props.radius;
  delete props.shadow;
  delete props.border;
  return React.createElement(as || "div", props, children);
};

const Card = styled(RawCard)`
  padding: ${(p) => {
    const spacing = p.padding || "md";
    return p.theme.spacing[`${spacing}`];
  }};
  border-radius: ${(p) => p.theme.radius[p.radius || "md"]};
  ${(p) => (p.border ? `border: 1px solid ${p.theme.colors.light[4]};` : "")}
  box-shadow: ${(p) => p.theme.shadows[p.shadow || "md"]};
  background-color: ${(p) => p.theme.colors.light[0]};
  overflow: hidden;

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}

  & > .fill-section:first-child {
    ${(p) => {
      const padding = p.padding ? p.theme.spacing[`${p.padding}`] : "1rem";
      const marginAdjustment = `calc(-1 * ${padding})`;
      return `margin-top: ${marginAdjustment}; margin-left: ${marginAdjustment}; margin-right: ${marginAdjustment};`;
    }};
  }

  & > .fill-section:not(:first-child):not(:last-child) {
    ${(p) => {
      const padding = p.padding ? p.theme.spacing[`${p.padding}`] : "1rem";
      const marginAdjustment = `calc(-1 * ${padding})`;
      return `margin-left: ${marginAdjustment}; margin-right: ${marginAdjustment};`;
    }};
  }

  & > .fill-section:last-child {
    ${(p) => {
      const padding = p.padding ? p.theme.spacing[`${p.padding}`] : "1rem";
      const marginAdjustment = `calc(-1 * ${padding})`;
      return `margin-bottom: ${marginAdjustment}; margin-left: ${marginAdjustment}; margin-right: ${marginAdjustment};`;
    }};
  }
`;

interface CardFillSectionProps {
  children: React.ReactNode;
}

const CardFillSection = ({ children }: CardFillSectionProps) => {
  return <div className="fill-section">{children}</div>;
};

export default Card;
export { Card, CardFillSection };
export type { CardProps, CardFillSectionProps };
