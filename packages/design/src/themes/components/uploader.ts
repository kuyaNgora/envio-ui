import type { ComponentThemeConfig } from "../types";

const picture: ComponentThemeConfig = {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "#E7E9ED",
    height: 100,
    width: 100,
    color: "#636363",
    borderRadius: 2,

    "> .uploader__text": {
      fontSize: 14,
      fontWeight: 600,
      fontStyle: "normal",
      marginTop: 4,
    },
  },
};

const file: ComponentThemeConfig = {};

const result: ComponentThemeConfig = {
  baseStyle: {
    height: 100,
    width: 100,
    borderRadius: 2,
    objectFit: "cover",
  },
};

const uploader = {
  picture,
  file,
  result,
};

export default uploader;
