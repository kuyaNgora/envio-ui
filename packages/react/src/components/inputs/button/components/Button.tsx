import React from "react";

import { useComponentStyles } from "../../../../system";
import {
  ButtonBaseProps,
  ButtonSizes,
  renderButtonChildren,
  renderButtonIcon,
} from "../utils";
import UnstyledButton from "./UnstyledButton";

export interface ButtonProps
  extends ButtonBaseProps,
    React.ComponentPropsWithoutRef<"button"> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: ButtonSizes;
  /** True if the button is disabled due to loading */
  loading?: boolean;
  /** indicate button is selected */
  selected?: boolean;
  iconSize?: number;
  shape?: string;
}

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      style,
      size = "md",
      icon,
      iconPosition = "left",
      loading,
      iconSize,
      disabled,
      variant = "default",
      block,
      width,
      selected,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const buttonBaseStyles = useComponentStyles("buttonBase", {
      size,
      variant,
      selected,
    });

    return (
      <UnstyledButton
        className={className}
        style={style}
        disabled={disabled}
        ref={ref}
        display={block ? "flex" : "inline-flex"}
        width={block ? "100%" : width}
        flexDirection={iconPosition === "left" ? "row" : "row-reverse"}
        alignItems="center"
        justifyContent="center"
        type={type}
        sx={buttonBaseStyles}
        {...rest}
      >
        {renderButtonIcon({ loading, icon, iconSize, iconPosition, children })}
        {renderButtonChildren({ loading, variant, children })}
      </UnstyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
