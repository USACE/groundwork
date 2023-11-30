import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { lighten, darken } from "../../../util/color-utils";
import { GroundworkSize, GroundworkColor, GroundworkTheme } from "../../../lib";

interface IconButtonStyleByVariantProps {
  theme: GroundworkTheme | DefaultTheme;
  variant?: string;
  size: string;
  radius: number;
  color?: GroundworkColor;
}

function getIconButtonStyleByVariant({
  theme,
  variant,
  size,
  radius = 0,
  color = "",
}: IconButtonStyleByVariantProps): string {
  const { white, colors, primaryColor, primaryShade } = theme;
  const primary = colors[primaryColor][primaryShade];
  let customPrimary;
  if (Object.keys(colors).includes(color)) {
    customPrimary = colors[color][primaryShade];
  } else {
    customPrimary = color.length ? color : primary;
  }
  const height = theme.buttonSizes[size];

  const common = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${height};
    width: ${height};
    font-size: ${theme.iconFontSizes[size]};
    border-radius: ${radius}rem;
    cursor: pointer;
    transition: background-color 0.01s ease-in-out;
  `;

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

interface IconButtonProps {
  /** IconButton Content */
  children: React.ReactNode;

  /** Arbitrary style object, use for a last resort override */
  style?: React.CSSProperties;

  /** Custom CSS Class Name */
  className?: string;

  /** IconButton Color */
  color?: GroundworkColor;

  /** Make button disabled */
  disabled?: boolean;

  /** IconButton onClick handler */
  onClick?: () => void;

  /** IconButton border radius in rem, default 0 */
  radius?: number;

  /** IconButton size */
  size?: GroundworkSize;

  /** IconButton variant, symbol theme of the button */
  variant?:
    | "primary"
    | "default"
    | "filled"
    | "light"
    | "outline"
    | "subtle"
    | "transparent";
}

const RawIconButton = ({
  children,
  className,
  style,
  disabled,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      className={className}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const IconButton = styled(RawIconButton)`
  ${(p) =>
    getIconButtonStyleByVariant({
      theme: p.theme,
      variant: p.variant,
      radius: p.radius || 0,
      size: p.size || "md",
      color: p.color || "",
    })}
`;

export default IconButton;
export { IconButton };
export type { IconButtonProps };
