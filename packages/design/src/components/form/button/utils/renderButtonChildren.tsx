import React from "react";
import { theme } from "../../../../themes";
import { Box, Text } from "../../../core";
import { Spinner } from "../../../misc";
import { ButtonVariants } from "./types";

interface ButtonChildrenProps {
  loading?: boolean;
  children?: React.ReactNode;
  variant: ButtonVariants;
}

function spinnerVariant(variant: ButtonVariants) {
  const color = {
    default: theme.colors.black,

    primary: theme.colors.greylight01,
    "outline-primary": theme.colors.blue09,
    "ghost-primary": theme.colors.blue09,

    secondary: theme.colors.greylight01,
    "outline-secondary": theme.colors.greydark05,
    "ghost-secondary": theme.colors.greydark05,

    danger: theme.colors.greylight01,
    "outline-danger": theme.colors.red09,
    "ghost-danger": theme.colors.red09,

    success: theme.colors.greylight01,
    "outline-success": theme.colors.green09,
    "ghost-success": theme.colors.green09,

    warning: theme.colors.greylight01,
    "outline-warning": theme.colors.orange09,
    "ghost-warning": theme.colors.orange09,
  };

  return color[variant];
}

const renderButtonChildren = ({
  loading,
  children,
  variant,
}: ButtonChildrenProps) => {
  if (loading) {
    return (
      <>
        <Box position="absolute" width={16} height={16}>
          <Spinner size={16} variant={spinnerVariant(variant)} />
        </Box>
        <Text visibility="hidden">{children}</Text>
      </>
    );
  }

  return <Text>{children}</Text>;
};

export default renderButtonChildren;
