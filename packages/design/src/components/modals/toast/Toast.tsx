import { foundations } from "@envio-ui/core";
import {
  IconAlertTriangleOutline,
  IconCheckCircle2Outline,
  IconCircleXmarkOutline,
  IconInfoOutline,
  IconXmarkOutline,
} from "@envio-ui/icons";
import React from "react";
import { Transition } from "react-transition-group";
import styled, { keyframes } from "styled-components";
import { useComponentStyles } from "../../../system";
import { Box, BoxProps, Stack, Text, Title } from "../../core";
import { UnstyledButton } from "../../form";
import { ANIMATION_DURATION, TOASTER_WIDTH } from "./internals/constants";
import { ToastSettings, ToastVariants } from "./types";

export interface ToastProps extends Omit<ToastSettings, "status">, BoxProps {
  variant?: ToastVariants;
}

const ToastEnter = keyframes`
  0% {
    right: -${TOASTER_WIDTH}px;
    opacity: 0;
  }

  100% {
    right: 0;
    opacity: 1;
  }
`;

const ToastExit = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
    max-height: 200px;
    margin-bottom: 20px;
  }

  40% {
    margin-bottom: 20px;
    max-height: 200px;
  }

  50% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
    max-height: 0;
    margin-bottom: 0;
  }
`;

const ToastBorder = keyframes`
  0% {
    left: 0%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 100%;
  }
`;

const Root = styled("div")`
  display: block;
  width: ${TOASTER_WIDTH}px;
  height: 100%;
  position: relative;
  margin-bottom: 20px;
  opacity: 0;
  box-shadows: 1;

  &[data-toaster-state="entering"],
  &[data-toaster-state="entered"] {
    animation-fill-mode: forwards;
    animation-name: ${ToastEnter};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &[data-toaster-state="exiting"] {
    animation-fill-mode: forwards;
    animation-name: ${ToastExit};
    animation-duration: ${ANIMATION_DURATION * 2}ms;
  }

  &[data-toaster-state="entered"] {
    right: 0;
    opacity: 1;
  }
`;

function borderColor(variant: ToastVariants) {
  const colors = {
    default: foundations?.colors?.blue09,
    error: foundations?.colors?.red09,
    success: foundations?.colors?.green09,
    info: foundations?.colors?.blue05,
    warning: foundations?.colors?.orange09,
  };

  return colors[variant];
}

function defaultIcon(variant: ToastVariants) {
  const icons = {
    default: null,
    error: (
      <IconCircleXmarkOutline
        aria-hidden
        fill={foundations?.colors?.red09}
        size={24}
      />
    ),
    success: (
      <IconCheckCircle2Outline
        aria-hidden
        fill={foundations?.colors?.success}
        size={24}
      />
    ),
    info: (
      <IconInfoOutline aria-hidden fill={foundations?.colors?.info} size={24} />
    ),
    warning: (
      <IconAlertTriangleOutline
        aria-hidden
        fill={foundations?.colors?.warning}
        size={24}
      />
    ),
  };
  return icons[variant];
}

const LoaderLine = styled("div")`
  width: 100%;
  height: 3px;
  position: relative;
  overflow: hidden;
  background-color: #ddd;
  border-radius: 20px;

  &:before {
    content: "";
    position: absolute;
    left: 100%;
    height: 3px;
    width: 100%;
    background-color: ${props => props?.theme?.borderColor};
    animation: ${ToastBorder} ${(ANIMATION_DURATION + 120) / 100}s linear;
    border-radius: 20px;
  }
`;

const Toast: React.FC<ToastProps> = ({
  id,
  title,
  message,
  dismissible,
  dismissAfter = 5000,
  variant = "default",
  allowHTML = false,
  onAction,
  actionText = "Action",
  onRemove,
  leftIcon,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toastInnerStyles = useComponentStyles("toastInner", { variant });
  const toastCloseButtonStyles = useComponentStyles("toastCloseButton");

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  React.useEffect(() => {
    let currentTimer: NodeJS.Timeout | null = null;
    setIsOpen(true);

    currentTimer = setTimeout(() => {
      close();
    }, dismissAfter);

    return () => {
      if (currentTimer) {
        clearTimeout(currentTimer);
      }
    };
  }, [dismissAfter]);

  return (
    <Transition
      appear
      in={isOpen}
      timeout={{
        enter: ANIMATION_DURATION + 100,
        exit: ANIMATION_DURATION + 400,
      }}
      unmountOnExit
      onExited={onRemove}
    >
      {state => (
        <Root id={id} data-toaster-state={state} {...rest}>
          <Box sx={toastInnerStyles}>
            {leftIcon ? (
              <Box display="flex" mr="sm">
                {leftIcon}
              </Box>
            ) : (
              variant !== "default" && (
                <Box display="flex" mr="sm">
                  {defaultIcon(variant)}
                </Box>
              )
            )}

            {allowHTML && message ? (
              <Box
                display="flex"
                alignItems="center"
                flex="1 1 auto"
                minHeight={18}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            ) : (
              <Box
                display="flex"
                alignItems="center"
                flex="1 1 auto"
                minHeight={18}
              >
                <Stack>
                  <Title display="block" scale={"sm"}>
                    {title}
                  </Title>
                  <Text display="block" scale={"sm"}>
                    {message}
                  </Text>
                </Stack>
              </Box>
            )}

            {onAction && (
              <Box display="flex" ml="sm">
                <UnstyledButton
                  type="button"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="12px"
                  lineHeight="18px"
                  onClick={() => {
                    if (onAction) {
                      onAction();
                    }
                    close();
                  }}
                  textDecoration="underline"
                  _hover={{ textDecoration: "underline" }}
                >
                  {actionText}
                </UnstyledButton>
              </Box>
            )}
            {dismissible && (
              <Box display="flex" alignItems="start" minHeight={18} ml="md">
                <UnstyledButton
                  type="button"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={toastCloseButtonStyles}
                  onClick={() => close()}
                >
                  <IconXmarkOutline aria-hidden fill="red" size={16} />
                </UnstyledButton>
              </Box>
            )}
          </Box>
          <LoaderLine theme={{ borderColor: borderColor(variant) }} />
        </Root>
      )}
    </Transition>
  );
};

export default Toast;
