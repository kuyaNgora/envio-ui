import type { ComponentThemeConfig } from "../types";

const badge: ComponentThemeConfig = {
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "var(--nvo-white)",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    background: "var(--nvo-danger)",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "16px",
    color: "var(--nvo-white)",
    boxSizing: "content-box",
    padding: "2px 4px",
    borderWidth: "2px",
    borderRadius: "16px",
  },
};

export default badge;
