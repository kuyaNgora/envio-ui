const breakpoints = ["576px", "768px", "992px", "1200px", "1400px"];

const mediaQueries = {
  xs: `@media screen and (max-width: ${breakpoints[0]})`,
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
  xxl: `@media screen and (min-width: ${breakpoints[4]})`,
};

const responsive = {
  breakpoints,
  mediaQueries,
};

export type Breakpoints = typeof breakpoints;
export type MediaQueries = typeof mediaQueries;

export default responsive;
