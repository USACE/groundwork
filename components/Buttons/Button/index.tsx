import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { lighten, darken } from "../../../util/color-utils";
import { GroundworkSize, GroundworkColor, GroundworkTheme } from "../../../lib";

interface ButtonStyleByVariantProps {
  theme: GroundworkTheme | DefaultTheme;
  variant?: string;
  size: string;
  radius: number;
  color?: GroundworkColor;
  fullWidth?: boolean;
}

function getButtonStyleByVariant({
  theme,
  variant,
  size,
  radius = 0,
  color = "",
  fullWidth,
}: ButtonStyleByVariantProps): string {
  const { white, colors, primaryColor, primaryShade } = theme;
  const primary = colors[primaryColor][primaryShade];
  let customPrimary;
  if (Object.keys(colors).includes(color)) {
    customPrimary = colors[color][primaryShade];
  } else {
    customPrimary = color.length ? color : primary;
  }
  const height = theme.buttonSizes[size];

  let common = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${height};
    font-size: ${theme.fontSizes[size]};
    padding: 0 ${theme.spacing[size]};
    border-radius: ${radius}rem;
    cursor: pointer;
    transition: background-color 0.01s ease-in-out;
  `;

  if (fullWidth) {
    common = `
      ${common}
      width: 100%;
      `;
  }

  switch (variant) {
    case "primary":
      return `
        ${common}
        background-color: ${primary};
        color: ${white};
        border: 1px solid transparent;

        &:hover {
          background-color: ${darken(primary, 0.15)};
        }

        &:active {
          background-color: ${darken(primary, 0.35)};
          transform: translateY(.0625rem);
        }
      `;
    case "filled":
      return `
        ${common}
        background-color: ${customPrimary};
        color: ${white};
        border: 1px solid transparent;

        &:hover {
          background-color: ${darken(customPrimary, 0.15)};
        }

        &:active {
          background-color: ${darken(customPrimary, 0.35)};
          transform: translateY(.0625rem);
        }
      `;
    case "light":
      return `
      ${common}
        background-color: ${lighten(customPrimary, 0.85)};
        color: ${customPrimary};
        border: 1px solid transparent;

        &:hover {
          background-color: ${darken(
            lighten(customPrimary, 0.85) || customPrimary,
            0.03
          )};
        }

        &:active {
          background-color: ${darken(
            lighten(customPrimary, 0.85) || customPrimary,
            0.1
          )};
          transform: translateY(.0625rem);
        }
      `;
    case "outline":
      return `
      ${common}
        background-color: ${lighten(customPrimary, 0.95)};
        color: ${customPrimary};
        border: 1px solid ${customPrimary};

        &:hover {
          background-color: ${darken(
            lighten(customPrimary, 0.85) || customPrimary,
            0.03
          )};
        }

        &:active {
          background-color: ${darken(
            lighten(customPrimary, 0.85) || customPrimary,
            0.1
          )};
          transform: translateY(.0625rem);
        }
      `;
    case "subtle":
      return `
      ${common}
        background-color: transparent;
        color: ${customPrimary};
        border: 1px solid transparent;

        &:hover {
          background-color: ${darken(
            lighten(customPrimary, 0.85) || customPrimary,
            0.03
          )};
        }

        &:active {
          transform: translateY(.0625rem);
        }
      `;
    case "transparent":
      return `
      ${common}
        background-color: transparent;
        color: ${customPrimary};
        border: 1px solid transparent;
      `;
    default:
      return `
      ${common}
        background-color: #fff;
        border: 1px solid #ccc;
        color: #333;

        &:hover {
          background-color: ${lighten("#ccc", 0.85)};
        }

        &:active {
          background-color: ${lighten("#ccc", 0.65)};
          transform: translateY(.0625rem);
        }
        `;
  }
}

interface ButtonProps {
  /** Button Content */
  children: React.ReactNode;

  /** Arbitrary style object, use for a last resort override */
  style?: React.CSSProperties;

  /** Custom CSS Class Name */
  className?: string;

  /** Button Color */
  color?: GroundworkColor;

  /** Make button disabled */
  disabled?: boolean;

  /** If true button will span full width of it's parent container, `false` by default */
  fullWidth?: boolean;

  /** Sets `justify-content` of `inner` element, can be used to change distribution of sections and label, `'center'` by default */
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /** Content to be added to the left of the button text */
  leftSection?: React.ReactNode;

  /** Button onClick handler */
  onClick?: () => void;

  /** Button border radius in rem, default 0 */
  radius?: number;

  /** Content to be added to the right of the button text */
  rightSection?: React.ReactNode;

  /** Button size */
  size?: GroundworkSize;

  /** Button type, use submit or reset to enable browser-default interaction, or button to indicate a custom handler */
  type?: "button" | "submit" | "reset";

  /** Button variant, symbol theme of the button */
  variant?:
    | "primary"
    | "default"
    | "filled"
    | "light"
    | "outline"
    | "subtle"
    | "transparent";
}

const LeftSection = styled.span`
  margin-right: 0.5rem;
`;

const RightSection = styled.span`
  margin-left: 0.5rem;
`;

const RawButton = ({
  children,
  className,
  style,
  disabled,
  leftSection,
  onClick,
  rightSection,
  type,
}: ButtonProps) => {
  return (
    <button
      className={className}
      style={style}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {leftSection && <LeftSection>{leftSection}</LeftSection>}
      <span>{children}</span>
      {rightSection && <RightSection>{rightSection}</RightSection>}
    </button>
  );
};

const Button = styled(RawButton)`
  ${(p) =>
    getButtonStyleByVariant({
      theme: p.theme,
      variant: p.variant,
      radius: p.radius || 0,
      size: p.size || "md",
      color: p.color || "",
      fullWidth: p.fullWidth || false,
    })}
`;

export default Button;
export { Button };
export type { ButtonProps };
