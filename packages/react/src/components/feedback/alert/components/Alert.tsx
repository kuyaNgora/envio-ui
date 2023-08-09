import { foundations } from "@envio-ui/core";
import {
  AlertCircleOutline,
  CheckCircle2Outline,
  CircleXmarkOutline,
  InfoOutline,
  XmarkOutline,
} from "@envio-ui/icons";
import React from "react";
import { useComponentStyles } from "../../../../system";
import { Box, BoxProps } from "../../../layout";
import { Button } from "../../../inputs";
import { Text } from "../../../data";

type AlertVariant = "default" | "primary" | "danger" | "success" | "warning";

export interface AlertProps extends BoxProps {
  /** Additional CSS classes to give to the drawer. */
  className?: string;
  /** Additional CSS properties to give to the drawer. */
  style?: React.CSSProperties;
  /** Whether the side sheet is open or not. */
  visible?: boolean;
  /** Variant of the badge. */
  variant?: AlertVariant;
  actions?: React.ReactNode;
  closeButton?: React.ReactNode;
  onClose?: () => void;
  leftIcon?: boolean | React.ReactNode;
  leftIconSize?: number;
  message?: string;
}

function iconVariant(variant: AlertVariant, iconSize: number) {
  const icon = {
    default: (
      <InfoOutline
        size={iconSize}
        fill={foundations?.colors?.primary}
        style={{
          marginRight: 8,
        }}
      />
    ),
    primary: (
      <InfoOutline
        size={iconSize}
        fill={foundations?.colors?.primary}
        style={{
          marginRight: 8,
        }}
      />
    ),
    danger: (
      <CircleXmarkOutline
        size={iconSize}
        fill={foundations?.colors?.danger}
        style={{
          marginRight: 8,
        }}
      />
    ),
    success: (
      <CheckCircle2Outline
        size={iconSize}
        fill={foundations?.colors?.success}
        style={{
          marginRight: 8,
        }}
      />
    ),
    warning: (
      <AlertCircleOutline
        size={iconSize}
        fill={foundations?.colors?.warning}
        style={{
          marginRight: 8,
        }}
      />
    ),
  };

  return icon[variant];
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      style,
      variant = "default",
      visible = true,
      actions,
      closeButton = true,
      onClose,
      leftIcon = true,
      leftIconSize = 25,
      message,
      ...rest
    },
    ref
  ) => {
    const styles = useComponentStyles("alert", {
      variant: typeof variant === "string" ? variant : undefined,
    });

    const renderLeftIcon = () => {
      return leftIcon && iconVariant(variant, leftIconSize);
    };

    const renderContent = () => {
      return (
        message && (
          <Box width={"100%"}>
            <Text scale="md">{message}</Text>
          </Box>
        )
      );
    };

    const renderCTA = () => {
      return (
        actions && (
          <Box
            width={"10%"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            ml="sm"
          >
            <Box display={"flex"}>{actions}</Box>
          </Box>
        )
      );
    };

    const renderCloseButton = () => {
      return (
        closeButton && (
          <Button
            size="sm"
            onClick={onClose}
            variant="ghost-secondary"
            style={{
              backgroundColor: "transparent",
              height: 20,
              width: 20,
            }}
            p="xs"
            icon={XmarkOutline}
            iconSize={20}
          />
        )
      );
    };

    return visible ? (
      <Box
        ref={ref}
        className={className}
        style={style}
        sx={{ ...styles }}
        width={"100%"}
        {...rest}
      >
        <Box sx={{ alignItems: "center", display: "flex" }} width={"100%"}>
          {renderLeftIcon()}
          {renderContent()}
        </Box>
        {renderCTA()}
        {renderCloseButton()}
      </Box>
    ) : null;
  }
);

export default Alert;
