import { foundations } from "@envio-ui/core";
import { useTheme as defaultUseTheme } from "styled-components";
import componentStyles from "./components";
import variants from "./variants";

export const theme = {
  ...foundations,
  componentStyles,
  variants,
};

export type Theme = typeof theme;

export const useTheme = defaultUseTheme;

export * from "./types";
