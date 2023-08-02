import { IconXmarkOutline } from "@envio-ui/icons";
import * as React from "react";
import { useComponentStyles } from "../../../../system";
import { Box, BoxProps } from "../../../core";
import { UnstyledButton } from "../../../form";

export interface ModalHeaderProps extends Omit<BoxProps, "children"> {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "lg";
  title?: React.ReactNode;
  centerTitle?: boolean;
  backButton?: React.ReactNode;
  actions?: React.ReactNode;
  closeButton?: React.ReactNode;
  children?: React.ReactNode;
  onClose?: () => void;
  divider?: true | false;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  centerTitle = false,
  actions,
  backButton,
  className,
  style,
  children,
  size = "sm",
  closeButton,
  sx,
  divider = false,
  onClose,
  ...rest
}) => {
  const ModalHeaderStyle = useComponentStyles("modalHeader", { size });

  return (
    <>
      <Box
        sx={{ ...ModalHeaderStyle, ...sx }}
        className={className}
        style={style}
        {...rest}
      >
        {backButton && <Box marginRight={"md"}>{backButton}</Box>}
        <Box
          display={"flex"}
          flex={1}
          justifyContent={centerTitle ? "center" : "flex-start"}
        >
          {title}
        </Box>
        {closeButton && (
          <Box display={"flex"} position="absolute" right="24px">
            <UnstyledButton
              type="button"
              aria-label="Close"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 24,
                color: "greydark02",
                "&:focus": {
                  outline: "none",
                  borderRadius: 4,
                  boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
                },
              }}
              onClick={onClose}
            >
              <IconXmarkOutline aria-hidden size={24} fill="currentColor" />
            </UnstyledButton>
          </Box>
        )}
      </Box>
      {divider && (
        <div style={{ backgroundColor: "#E7E9ED", height: 1, width: "100%" }} />
      )}
    </>
  );
};

export default ModalHeader;
