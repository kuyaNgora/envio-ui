import React from "react";
import { useComponentStyles } from "../../../../system";
import { Box, BoxProps, Stack } from "../../../layout";

export interface ModalFooterProps extends Omit<BoxProps, "children"> {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "lg";
  caption?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
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
  divider = false,
  fluid = false,
  ...rest
}) => {
  const ModalFooterStyle = useComponentStyles("modalFooter", { size });
  return (
    <Box className={className} style={style} {...rest}>
      {divider && (
        <div style={{ backgroundColor: "#E7E9ED", height: 1, width: "100%" }} />
      )}
      <Stack direction="horizontal" sx={{ ...ModalFooterStyle, ...sx }}>
        {actions && (
          <Box display={"flex"} flex={fluid ? 1 : 1 / 2}>
            {actions}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default ModalFooter;
