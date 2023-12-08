import { DefaultTheme } from "styled-components";
import defaultColors from "./defaultThemeColors";

function fontStack(fonts: string[]) {
  return fonts
    .map((font) => (font.includes(" ") ? `"${font}"` : font))
    .join(", ");
}

const DEFAULT_FONT_FAMILY = fontStack([
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Noto Sans",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
]);

const defaultTheme: DefaultTheme = {
  focusRing: "auto",
  scale: 1,
  white: "#ffffff",
  black: "#000000",
  colors: defaultColors,
  primaryShade: 6,
  primaryContrast: 2,
  primaryColor: "blue",
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: fontStack([
    "SFMono-Regular",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "Courier",
    "monospace",
  ]),
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    sizes: {
      h1: { fontSize: "2.12rem", lineHeight: "1.3" },
      h2: { fontSize: "1.62rem", lineHeight: "1.35" },
      h3: { fontSize: "1.375rem", lineHeight: "1.4" },
      h4: { fontSize: "1.12rem", lineHeight: "1.5" },
      h5: { fontSize: "1rem", lineHeight: "1.45" },
      h6: { fontSize: "0.8rem", lineHeight: "1.4" },
    },
  },
  radius: {
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  defaultRadius: "sm",
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },
  iconFontSizes: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },
  buttonSizes: {
    xs: "1.5rem",
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
    xl: "3.5rem",
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.2)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
    md: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    lg: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    xl: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
    xxl: "0 16px 24px 0 rgba(0, 0, 0, 0.2)",
  },
  activeClassName: "is-active",
  focusClassName: "has-focus",
};

export default defaultTheme;
