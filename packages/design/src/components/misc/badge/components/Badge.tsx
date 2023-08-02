import * as React from "react";
import { useComponentStyles } from "../../../../system";
import { Box } from "../../../core";

type BadgeVariant = "primary" | "secondary" | "success" | "warning";
export interface BadgeProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Value for notification badge */
  value: number;
  /** Size for notification badge */
  size?: number;
  /** Variant of the badge. */
  variant?: BadgeVariant;
}

function renderValue(value: number) {
  if (value > 99) {
    return "+99";
  }
  if (value < 1) {
    return "";
  }

  return value;
}

const Badge: React.FC<BadgeProps> = ({ size, value, variant, ...rest }) => {
  const badgeStyle = useComponentStyles("badge");

  if (value < 1) {
    return (
      <Box
        data-testid="badge"
        sx={badgeStyle}
        width={typeof size === "number" ? `${size}px` : 4}
        height={typeof size === "number" ? size : 4}
        borderRadius={9999}
        {...rest}
        p="xxxs"
      >
        {renderValue(value)}
      </Box>
    );
  }
  return (
    <Box
      data-testid="badge"
      sx={badgeStyle}
      minWidth={12}
      height={12}
      {...rest}
    >
      {renderValue(value)}
    </Box>
  );
};
export default Badge;
