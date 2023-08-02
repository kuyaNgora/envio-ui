import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import * as React from "react";
import { useComponentStyles } from "../../../../system";
import { Box, BoxProps, Text } from "../../../core";
import { Badge } from "../../badge";
import getInitials from "../utils/getInitials";

type AvatarVariant = "primary" | "secondary" | "success" | "warning";
export interface AvatarProps extends Omit<BoxProps, "size"> {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  /** Name for initials */
  name?: string;
  /** The avatar's image source. */
  src?: string;
  /** Alt text for the avatar. */
  alt?: string;
  /** The background color of the avatar. */
  bg?: string;
  /** The icon that renders with the avatar. */
  icon?: React.ComponentType<any>;
  /** Size of the avatar. */
  size?: number;
  /** Variant of the avatar. */
  variant?: AvatarVariant;
  /** Presence option */
  presence?: React.ReactNode;
  /** Notification Badge  */
  notificationBadge: number;
}

function iconSizes(size: number) {
  return size - 8;
}

function fontSizes(size: number) {
  return size / 2;
}

function presenceSize(size: number) {
  return size / 6;
}

/** Resizable avatar component. */
const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      className,
      style,
      src,
      alt = undefined,
      name,
      size = 50,
      variant = "primary",
      bg,
      icon,
      presence,
      notificationBadge,
      ...rest
    },
    ref
  ) => {
    const styles = useComponentStyles("avatar", {
      variant: typeof variant === "string" ? variant : undefined,
    });

    const renderInitials = () => {
      return (
        <Text fontSize={fontSizes(size)} role="presentation">
          {name ? getInitials(name) : ""}
        </Text>
      );
    };

    const renderImage = () => {
      if (src) {
        return (
          <Box
            as="img"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={src}
            alt={name || alt}
          />
        );
      }

      if (icon) {
        return React.createElement(icon, {
          fill: "currentColor",
          size: iconSizes(size),
          "aria-hidden": true,
        });
      }

      return renderInitials();
    };

    const renderAvatar = () => {
      return (
        <Box
          data-testid="avatar-container"
          as="span"
          ref={ref}
          className={className}
          style={style}
          sx={{ ...styles }}
          width={typeof size === "number" ? size : undefined}
          height={typeof size === "number" ? size : undefined}
          borderRadius={9999}
          {...rest}
        >
          {name && <VisuallyHidden>{name}</VisuallyHidden>}
          {renderImage()}
        </Box>
      );
    };
    if (presence || notificationBadge) {
      return (
        <Box position="relative" data-testid="avatar-with-presence">
          {renderAvatar()}
          {presence && (
            <Box position={"absolute"} bottom={0} right={0}>
              <Badge value={0} size={presenceSize(size)} />
            </Box>
          )}
          {notificationBadge > 0 && (
            <Box
              position={"absolute"}
              top={0}
              right={notificationBadge < 1 ? 0 : -5}
            >
              <Badge value={notificationBadge} />
            </Box>
          )}
        </Box>
      );
    }
    return renderAvatar();
  }
);

Avatar.displayName = "Avatar";

export default Avatar;
