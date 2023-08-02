import React from "react";
import { Box } from "../../../core";
import { ButtonBaseProps } from "./types";

interface ButtonIconProps extends ButtonBaseProps {
  loading?: boolean;
  iconSize?: number;
  children?: React.ReactNode;
}

const renderButtonIcon = ({
  loading,
  icon,
  iconSize,
  iconPosition,
  children,
}: ButtonIconProps) => {
  if (icon) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={loading ? { visibility: "hidden" } : undefined}
        mr={children ? (iconPosition === "left" ? "xs" : null) : null}
        ml={children ? (iconPosition === "right" ? "xs" : null) : null}
      >
        {React.createElement(icon, {
          fill: "currentColor",
          size: iconSize,
        })}
      </Box>
    );
  }

  return null;
};

export default renderButtonIcon;
