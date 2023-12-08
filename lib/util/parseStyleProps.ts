import {
  DefaultGroundworkColor,
  GroundworkCoreStyleProps,
} from "../types/groundwork-types";
import { DefaultTheme } from "styled-components";

// map of props from GroundworkCoreStyleProps to css properties
const stylePropMap = {
  spacing: {
    m: "margin",
    mt: "margin-top",
    mr: "margin-right",
    mb: "margin-bottom",
    ml: "margin-left",
    mx: ["margin-left", "margin-right"],
    my: ["margin-top", "margin-bottom"],

    p: "padding",
    pt: "padding-top",
    pr: "padding-right",
    pb: "padding-bottom",
    pl: "padding-left",
    px: ["padding-left", "padding-right"],
    py: ["padding-top", "padding-bottom"],
  },

  color: {
    bg: "background-color",
    c: "color",
  },

  text: {
    ff: "font-family",
    fz: "font-size",
    fw: "font-weight",
    lts: "letter-spacing",
    ta: "text-align",
    lh: "line-height",
    fs: "font-style",
    tt: "text-transform",
    td: "text-decoration",
  },

  size: {
    w: "width",
    miw: "min-width",
    maw: "max-width",
    h: "height",
    mih: "min-height",
    mah: "max-height",
  },

  positioning: {
    pos: "position",
    top: "top",
    left: "left",
    bottom: "bottom",
    right: "right",
    inset: "inset",
  },

  opacity: "opacity",
  display: "display",
};

// Function to parse style props into css string
function parseStyleProps(
  props: GroundworkCoreStyleProps,
  theme: DefaultTheme
): string {
  let cssString = "";
  function appendCss(cssProp: string | string[], value: string) {
    const cssPropArray = Array.isArray(cssProp) ? cssProp : [cssProp];
    cssPropArray.forEach((prop) => {
      cssString += `${prop}: ${value};`;
    });
  }

  // set spacing based attributes, spacing can be a theme size(sm, md, lg...), a number (rem) or a string (with units)
  Object.keys(stylePropMap.spacing).forEach((k: string) => {
    const key = `${k}` as keyof typeof stylePropMap.spacing;
    const prop = `$${key}` as keyof GroundworkCoreStyleProps;
    if (props[prop]) {
      const cssProp = stylePropMap.spacing[key];
      const value = props[prop];
      const cssValue =
        typeof value === "string"
          ? theme.spacing[value] || value
          : `${value}rem`;
      appendCss(cssProp, cssValue);
    }
  });

  // set color based attributes, color can be a theme color, or a string (hex or rgb color)
  Object.keys(stylePropMap.color).forEach((k: string) => {
    const key = `${k}` as keyof typeof stylePropMap.color;
    const prop = `$${key}` as keyof GroundworkCoreStyleProps;
    if (props[prop]) {
      const cssProp = stylePropMap.color[key];
      const value = props[prop];
      const themeHasColor = Object.prototype.hasOwnProperty.call(
        theme.colors,
        `${value}`
      );
      const cssValue = themeHasColor
        ? theme.colors[value as DefaultGroundworkColor][theme.primaryShade]
        : value;
      appendCss(cssProp, `${cssValue}`);
    }
  });

  // set text based attributes, these are just strings corresponding to css values
  Object.keys(stylePropMap.text).forEach((k: string) => {
    const key = `${k}` as keyof typeof stylePropMap.text;
    const prop = `$${key}` as keyof GroundworkCoreStyleProps;
    if (props[prop]) {
      const cssProp = stylePropMap.text[key];
      const value = props[prop];
      appendCss(cssProp, `${value}`);
    }
  });

  // set size attributes, size are just strings corresponding to css values
  Object.keys(stylePropMap.size).forEach((k: string) => {
    const key = `${k}` as keyof typeof stylePropMap.size;
    const prop = `$${key}` as keyof GroundworkCoreStyleProps;
    if (props[prop]) {
      const cssProp = stylePropMap.size[key];
      const value = props[prop];
      appendCss(cssProp, `${value}`);
    }
  });

  // set positioning attributes, positioning are just strings corresponding to css values
  Object.keys(stylePropMap.positioning).forEach((k: string) => {
    const key = `${k}` as keyof typeof stylePropMap.positioning;
    const prop = `$${key}` as keyof GroundworkCoreStyleProps;
    if (props[prop]) {
      const cssProp = stylePropMap.positioning[key];
      const value = props[prop];
      appendCss(cssProp, `${value}`);
    }
  });

  // set opacity
  if (props.$opacity) {
    appendCss(stylePropMap.opacity, `${props.$opacity}`);
  }

  // set display
  if (props.$display) {
    appendCss(stylePropMap.display, `${props.$display}`);
  }

  return cssString;
}

export default parseStyleProps;
