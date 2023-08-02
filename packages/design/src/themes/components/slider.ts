import type { ComponentThemeConfig } from "../types";

const sliderRoot: ComponentThemeConfig = {
  baseStyle: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    touchAction: "none",
    borderRadius: 999,

    "&[data-orientation='vertical']": {
      flexDirection: "column",
      width: 8,
      height: 300,
    },
    "&[data-orientation='horizontal']": {
      width: "100%",
      height: 8,
    },
  },
};

const sliderTrack: ComponentThemeConfig = {
  baseStyle: {
    cursor: "pointer",
    backgroundColor: "var(--nvo-gray-100)",
    position: "relative",
    flexGrow: 1,
    borderRadius: 999,

    "&[data-orientation='vertical']": {
      width: 4,
    },

    "&[data-orientation='horizontal']": {
      height: 4,
    },
  },
};

const sliderRange: ComponentThemeConfig = {
  baseStyle: {
    backgroundColor: "var(--nvo-primary)",
    position: "absolute",
    borderRadius: 999,

    "&[data-orientation='vertical']": {
      width: "100%",
    },
    "&[data-orientation='horizontal']": {
      height: "100%",
    },
  },
};

const sliderThumb: ComponentThemeConfig = {
  baseStyle: {
    cursor: "pointer",
    display: "block",
    width: 8,
    height: 8,
    backgroundColor: "var(--nvo-primary)",
    borderRadius: "100%",
    boxShadow: `0 0 4px 2px rgba(var(--nvo-secondary-rgb), 0.16)`,

    "&:hover": {
      boxShadow: `0 0 0 4px rgba(var(--nvo-primary-rgb), 0.16)`,
    },
    "&:focus": {
      boxShadow: `0 0 0 4px rgba(var(--nvo-primary-rgb), 0.16)`,
      outline: "none",
    },
  },
};

const slider = {
  sliderRoot,
  sliderTrack,
  sliderRange,
  sliderThumb,
};

export default slider;
