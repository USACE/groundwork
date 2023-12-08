/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file contains the library level types used throughout the various components.
 * Component-specific types should be defined in the component's folder.
 */
import { DefaultTheme } from "styled-components";
/**
 * THEMING
 */
// Overriding the DefaultTheme interface from styled-components
declare module "styled-components" {
  export interface DefaultTheme {
    /** Controls focus ring styles. Supports the following options:
     *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
     *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse
     *  - `never` – focus ring is always hidden (not recommended)
     */
    focusRing: "auto" | "always" | "never";

    /** rem units scale, change if you customize font-size of `<html />` element
     *  default value is `1` (for `100%`/`16px` font-size on `<html />`)
     */
    scale: number;

    /** White color */
    white: string;

    /** Black color */
    black: string;

    /** Object of colors, key is color name, value is an array of at least 10 strings (colors) */
    colors: GroundworkThemeColors;

    /** Index of theme.colors[color].
     *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.
     *  Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
     *  Default value `{ light: 6, dark: 8 }`
     *
     *  For example,
     *  { primaryShade: 6 }
     * */
    primaryShade: GroundworkColorShade;

    /**Index of them.colors[color]
     * Should point to the primary contrasting shade for the primary color.
     *
     *  For example,
     *  { primaryShade: 6 }
     */
    primaryContrast: GroundworkColorShade;

    /** Key of `theme.colors`, hex/rgb/hsl values are not supported.
     *  Determines which color will be used in all components by default.
     *  Default value – `blue`.
     * */
    primaryColor: string;

    /** Function to resolve colors based on variant.
     *  Can be used to deeply customize how colors are applied to `Button`, `ActionIcon`, `ThemeIcon`
     *  and other components that use colors from theme.
     * */
    // variantColorResolver: VariantColorsResolver;

    /** font-family used in all components, system fonts by default */
    fontFamily: string;

    /** Monospace font-family, used in code and other similar components, system fonts by default  */
    fontFamilyMonospace: string;

    /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components */
    headings: {
      fontFamily: string;
      fontWeight: string;
      sizes: {
        h1: HeadingStyle;
        h2: HeadingStyle;
        h3: HeadingStyle;
        h4: HeadingStyle;
        h5: HeadingStyle;
        h6: HeadingStyle;
      };
    };

    /** Object of values that are used to set `border-radius` in all components that support it */
    radius: GroundworkRadiusValues;

    /** Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components */
    defaultRadius: GroundworkRadius;

    /** Object of values that are used to set various CSS properties that control spacing between elements */
    spacing: GroundworkSpacingValues;

    /** Object of values that are used to control `font-size` property in all components */
    fontSizes: GroundworkFontSizesValues;

    /** Object of values that are used to control `font-size` property in `Icon` component */
    iconFontSizes: GroundworkFontSizesValues;

    /** Object of values that are used to control `line-height` property in `Text` component */
    lineHeights: GroundworkLineHeightValues;

    /** Object of values that are used to control `line-height` property in `Button` component */
    buttonSizes: GroundworkFontSizesValues;

    /** Object of values that are used to control breakpoints in all components,
     *  values are expected to be defined in em
     * */
    breakpoints: GroundworkBreakpointsValues;

    /** Object of values that are used to add `box-shadow` styles to components that support `shadow` prop */
    shadows: GroundworkShadowsValues;

    /** Class added to the elements that have active styles, for example, `Button` and `ActionIcon` */
    activeClassName: string;

    /** Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`.
     *  Overrides `theme.focusRing` property.
     */
    focusClassName: string;

    /** Any other properties that you want to access with the theme objects */
    other?: GroundworkThemeOther;
  }
}

/**
 * Sizes
 */
export type GroundworkSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Other
 */
export interface GroundworkThemeOther {
  [key: string]: any;
}

/**
 * Colors
 */
export interface GroundworkGradient {
  from: string;
  to: string;
  deg?: number;
}

export type GroundworkColorsTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  ...string[]
];

export type GroundworkColorShade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface GroundworkPrimaryShade {
  light: GroundworkColorShade;
  dark: GroundworkColorShade;
}

export type DefaultGroundworkColor =
  | "dark"
  | "gray"
  | "red"
  | "pink"
  | "grape"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "green"
  | "lime"
  | "yellow"
  | "orange"
  | "teal"
  | (string & {});

export interface GroundworkThemeColorsOverride {}

export type GroundworkThemeColors = GroundworkThemeColorsOverride extends {
  colors: Record<infer CustomColors, GroundworkColorsTuple>;
}
  ? Record<CustomColors, GroundworkColorsTuple>
  : Record<DefaultGroundworkColor, GroundworkColorsTuple>;

export type GroundworkColor = keyof GroundworkThemeColors;

/**
 * Headings
 */
export interface HeadingStyle {
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
}

/**
 * Radius
 */
export type GroundworkRadiusValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkRadius = keyof GroundworkRadiusValues | (string & {});

/**
 * Spacing
 */
export type GroundworkSpacingValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkSpacing =
  | keyof GroundworkSpacingValues
  | (string & {})
  | number;

/**
 * Font Sizes
 */
export type GroundworkFontSizesValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkFontSize = keyof GroundworkFontSizesValues;

/**
 * Line Height
 */
export type GroundworkLineHeightValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkLineHeight = keyof GroundworkLineHeightValues;

/**
 * Breakpoints
 */
export type GroundworkBreakpointsValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkBreakpoint = keyof GroundworkBreakpointsValues;

/**
 * Shadows
 */
export type GroundworkShadowsValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkShadow = keyof GroundworkShadowsValues | (string & {});

/**
 * Core style props - utility props to be exposed in all components
 */
export type StyleProp<Value> =
  | Value
  | Partial<Record<GroundworkBreakpoint | (string & {}), Value>>;
export interface GroundworkCoreStyleProps {
  title?: string;
  theme: DefaultTheme;
  $m?: StyleProp<GroundworkSpacing>;
  $my?: StyleProp<GroundworkSpacing>;
  $mx?: StyleProp<GroundworkSpacing>;
  $mt?: StyleProp<GroundworkSpacing>;
  $mb?: StyleProp<GroundworkSpacing>;
  $ml?: StyleProp<GroundworkSpacing>;
  $mr?: StyleProp<GroundworkSpacing>;

  $p?: StyleProp<GroundworkSpacing>;
  $py?: StyleProp<GroundworkSpacing>;
  $px?: StyleProp<GroundworkSpacing>;
  $pt?: StyleProp<GroundworkSpacing>;
  $pb?: StyleProp<GroundworkSpacing>;
  $pl?: StyleProp<GroundworkSpacing>;
  $pr?: StyleProp<GroundworkSpacing>;

  $bg?: StyleProp<GroundworkColor>;
  $c?: StyleProp<GroundworkColor>;

  $ff?: StyleProp<React.CSSProperties["fontFamily"]>;
  $fz?: StyleProp<React.CSSProperties["fontSize"]>;
  $fw?: StyleProp<React.CSSProperties["fontWeight"]>;
  $lts?: StyleProp<React.CSSProperties["letterSpacing"]>;
  $ta?: StyleProp<React.CSSProperties["textAlign"]>;
  $lh?: StyleProp<React.CSSProperties["lineHeight"]>;
  $fs?: StyleProp<React.CSSProperties["fontStyle"]>;
  $tt?: StyleProp<React.CSSProperties["textTransform"]>;
  $td?: StyleProp<React.CSSProperties["textDecoration"]>;

  $w?: StyleProp<React.CSSProperties["width"]>;
  $miw?: StyleProp<React.CSSProperties["minWidth"]>;
  $maw?: StyleProp<React.CSSProperties["maxWidth"]>;
  $h?: StyleProp<React.CSSProperties["height"]>;
  $mih?: StyleProp<React.CSSProperties["minHeight"]>;
  $mah?: StyleProp<React.CSSProperties["maxHeight"]>;

  $pos?: StyleProp<React.CSSProperties["position"]>;
  $top?: StyleProp<React.CSSProperties["top"]>;
  $left?: StyleProp<React.CSSProperties["left"]>;
  $bottom?: StyleProp<React.CSSProperties["bottom"]>;
  $right?: StyleProp<React.CSSProperties["right"]>;
  $inset?: StyleProp<React.CSSProperties["inset"]>;

  $opacity?: StyleProp<React.CSSProperties["opacity"]>;
  $display?: StyleProp<React.CSSProperties["display"]>;
}
