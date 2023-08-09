import { createGlobalStyle } from "styled-components";
import { theme } from "../../themes";

const StorybookGlobal = createGlobalStyle`
  body {
    background-color: ${theme.colors.white};
  }
`;

export default StorybookGlobal;
