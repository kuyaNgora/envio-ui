import * as CSS from "csstype";
import {
  Config,
  RequiredTheme,
  ResponsiveValue,
  Theme,
  TypographyProps as _TypographyProps,
  typography as _typography,
  compose,
  system,
} from "styled-system";

export interface TypographyProps<ThemeType extends Theme = RequiredTheme>
  extends _TypographyProps<ThemeType> {
  /**
   * The `text-decoration` shorthand CSS property sets the appearance of decorative lines on text.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
   */
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration, ThemeType>;
  /**
   * The `text-transform` CSS property specifies how to capitalize an element's text.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
   */
  textTransform?: ResponsiveValue<CSS.Property.TextTransform, ThemeType>;
  /**
   * The `text-overflow` CSS property sets how hidden overflow content is signaled to users.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
   */
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow, ThemeType>;
}

const config: Config = {
  textDecoration: true,
  textTransform: true,
  textOverflow: true,
};

export const typography = compose(_typography, system(config));

export const typographyProps = [
  "textDecoration",
  "textTransform",
  "textOverflow",
];
