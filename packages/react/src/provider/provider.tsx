import * as React from "react";
import { ThemeProvider } from "styled-components";

import { ToastProvider } from "../components";
import { Theme, theme as defaultTheme } from "../themes";
import injectGlobalStyles from "./globalStyles";

export interface EnvioProviderProps {
  children: React.ReactNode;
  /**
   * If you want to extend the global styles set to `true` and inject them
   * manually via `injectGlobalStyles`.
   */
  disableInjection?: boolean;
  /** Custom theme object. */
  theme?: Theme;
}

const { GlobalStyles } = injectGlobalStyles();

const EnvioProvider: React.FC<EnvioProviderProps> = ({
  children,
  disableInjection,
  theme = defaultTheme,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        {!disableInjection && <GlobalStyles />}
        {children}
      </ToastProvider>
    </ThemeProvider>
  );
};

EnvioProvider.displayName = "EnvioProvider";

export default EnvioProvider;
