/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file to contain all the library-level types that are used throughout the library.
 */

/**
 *
 * SECTION 1 - Theming
 *
 *
 */
export interface GroundworkTheme {
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

export type GroundworkColorScheme = "light" | "dark" | "auto";

export type GroundworkStylesRecord = Record<string, React.CSSProperties>;

export interface GroundworkThemeComponent {
  classNames?: any;
  styles?: any;
  vars?: any;
  defaultProps?: any;
}

export type GroundworkThemeComponents = Record<
  string,
  GroundworkThemeComponent
>;

export interface HeadingStyle {
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
}

export type GroundworkSize = "xs" | "sm" | "md" | "lg" | "xl";
export type GroundworkBreakpointsValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkFontSizesValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkRadiusValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkSpacingValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkShadowsValues = Record<
  GroundworkSize | (string & {}),
  string
>;
export type GroundworkLineHeightValues = Record<
  GroundworkSize | (string & {}),
  string
>;

export type GroundworkBreakpoint = keyof GroundworkBreakpointsValues;
export type GroundworkFontSize = keyof GroundworkFontSizesValues;
export type GroundworkRadius =
  | keyof GroundworkRadiusValues
  | (string & {})
  | number;
export type GroundworkSpacing =
  | keyof GroundworkSpacingValues
  | (string & {})
  | number;
export type GroundworkShadow = keyof GroundworkShadowsValues | (string & {});
export type GroundworkLineHeight = keyof GroundworkLineHeightValues;

export interface GroundworkThemeOther {
  [key: string]: any;
}

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
 * /END SECTION 1 - Theming
 */
