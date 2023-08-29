import React from "react";
import { number } from "prop-types";
import { useComponentStyles } from "../../../../system";
import { Box } from "../../../layout";
import { LabelText } from "../../typography";

type LabelVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "outline-primary"
  | "outline-secondary"
  | "outline-success"
  | "outline-warning";

export interface LabelProps {
  children?: React.ReactNode;
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Variant of the badge. */
  variant?: LabelVariant;

  // label text
  fontSize?: string | number;
  /** Additional CSS classes to give to the component. */
  labelClass?: string;
  /** Additional CSS properties to give to the component. */
  labelStyle?: React.CSSProperties;
}

const Label: React.FC<LabelProps> = ({
  children,
  variant,
  fontSize = 12,
  labelClass,
  labelStyle,
  ...rest
}) => {
  const sx = useComponentStyles("label", {
    variant: typeof variant === "string" ? variant : undefined,
  });

  return (
    <Box sx={sx} {...rest}>
      <LabelText
        className={labelClass}
        style={labelStyle}
        fontSize={fontSize}
        scale={"md"}
        fontFamily={"brand"}
        textTransform={"uppercase"}
      >
        {children}
      </LabelText>
    </Box>
  );
};

export default Label;
