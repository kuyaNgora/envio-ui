import React from "react";
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
}

const Label: React.FC<LabelProps> = ({ children, variant, ...rest }) => {
  const labelStyle = useComponentStyles("label", {
    variant: typeof variant === "string" ? variant : undefined,
  });

  return (
    <Box sx={labelStyle} {...rest}>
      <LabelText scale={"md"} fontFamily={"brand"} textTransform={"uppercase"}>
        {children}
      </LabelText>
    </Box>
  );
};

export default Label;
