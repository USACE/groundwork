import React from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider as TP,
} from "styled-components";
import defaultTheme from "./defaultTheme";
import "./reset.css";

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

interface ThemeProviderProps {
  theme?: DefaultTheme;
  variant?: string;
  themeVariants?: { [key: string]: DefaultTheme };
  children: React.ReactNode;
}

const ThemeProvider = ({
  theme = defaultTheme,
  variant,
  themeVariants,
  children,
}: ThemeProviderProps) => {
  let activeTheme: DefaultTheme;
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
    <TP theme={activeTheme}>
      <GlobalStyle />
      {children}
    </TP>
  );
};

export default ThemeProvider;
export { ThemeProvider };
export type { ThemeProviderProps };
