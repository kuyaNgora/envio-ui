import colors from "./colors";
import responsive from "./responsive";
import rounded from "./rounded";
import shadows from "./shadows";
import space from "./space";
import typography from "./typography";

/**
 * Default styled-system theme props based on the theme specification.
 *
 * [Theme specification](https://styled-system.com/theme-specification)
 */
const foundations = {
  colors,
  space,
  sizes: space,
  ...typography,
  shadows,
  rounded,
  ...responsive,
};

export default foundations;
