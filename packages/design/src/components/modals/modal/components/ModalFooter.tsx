import React from "react";
import { useComponentStyles } from "../../../../system";
import { Box, BoxProps } from "../../../core";

export interface ModalFooterProps extends Omit<BoxProps, "children"> {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  caption?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  type?: "modal" | "dialog";
  divider?: true | false;
  fluid?: true | false;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  caption,
  actions,
  className,
  style,
  children,
  size = "sm",
  sx,
  type = "modal",
  divider = false,
  fluid = false,
  ...rest
}) => {
  const ModalFooterStyle = useComponentStyles("modalFooter", { size });
  return (
    <>
      {divider && (
        <div style={{ backgroundColor: "#E7E9ED", height: 1, width: "100%" }} />
      )}
      <Box
        sx={{ ...ModalFooterStyle, ...sx }}
        className={className}
        style={style}
        {...rest}
      >
        {actions && (
          <Box display={"flex"} flex={fluid ? 1 : 1 / 2}>
            {actions}
          </Box>
        )}
      </Box>
    </>
  );
};

export default ModalFooter;
