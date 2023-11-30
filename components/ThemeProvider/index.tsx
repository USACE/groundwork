import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { GroundworkTheme } from "../../lib";
import defaultTheme from "./defaultTheme";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${(p) => p.theme.fontSizes.md};
    font-family: ${(p) => p.theme.fontFamily};
    height: 100%;
    width: 100%;

    /** Variables */
    --white: ${(p) => p.theme.white};
    --black: ${(p) => p.theme.black};
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(p) => p.theme.headings.fontFamily};
    font-weight: ${(p) => p.theme.headings.fontWeight};
  }

  h1 {
    font-size: ${(p) => p.theme.headings.sizes.h1.fontSize};
    line-height: ${(p) => p.theme.headings.sizes.h1.lineHeight};
  }

  h2 {
    font-size: ${(p) => p.theme.headings.sizes.h2.fontSize};
    line-height: ${(p) => p.theme.headings.sizes.h2.lineHeight};
  }

  h3 {
    font-size: ${(p) => p.theme.headings.sizes.h3.fontSize};
    line-height: ${(p) => p.theme.headings.sizes.h3.lineHeight};
  }

  h4 {
    font-size: ${(p) => p.theme.headings.sizes.h4.fontSize};
    line-height: ${(p) => p.theme.headings.sizes.h4.lineHeight};
  }

  h5 {
    font-size: ${(p) => p.theme.headings.sizes.h5.fontSize};
    line-height: ${(p) => p.theme.headings.sizes.h5.lineHeight};
  }

  h6 {
    font-size: ${(p) => p.theme.headings.sizes.h6.fontSize};
    line-height: ${(p) => p.theme.headings.sizes.h6.lineHeight};
  }

  pre {
    font-family: ${(p) => p.theme.fontFamilyMonospace};
    font-size: ${(p) => p.theme.fontSizes.sm};
    line-height: ${(p) => p.theme.lineHeights.sm};
  }
`;

interface GroundworkThemeProviderProps {
  theme?: GroundworkTheme;
  variant?: string;
  themeVariants?: { [key: string]: GroundworkTheme };
  children: React.ReactNode;
}

const GroundworkThemeProvider = ({
  theme = defaultTheme,
  variant,
  themeVariants,
  children,
}: GroundworkThemeProviderProps) => {
  let activeTheme: GroundworkTheme;
  if (themeVariants && variant) {
    activeTheme = themeVariants[variant];
  } else {
    activeTheme = theme;
  }

  if (activeTheme !== defaultTheme) {
    activeTheme = {
      ...defaultTheme,
      ...activeTheme,
    };
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GroundworkThemeProvider;
export { GroundworkThemeProvider };
export type { GroundworkThemeProviderProps };
