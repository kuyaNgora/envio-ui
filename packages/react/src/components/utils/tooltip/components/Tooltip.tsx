import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styled, { keyframes } from "styled-components";

export interface TooltipProps {
  placement?: "top" | "right" | "bottom" | "left" | undefined;
  trigger?: React.ReactNode;
  content?: React.ReactNode;
  contentAlign?: "start" | "center" | "end";
}

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`;

const slideRightAndFade = keyframes`
   from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }`;

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`;

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }`;

const Content = styled(TooltipPrimitive.Content)`
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
  background-color: var(--nvo-dark);
  color: var(--nvo-white);
  border: none !important;
  font-size: 14px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state="instant-open"] {
    &[data-side="top"] {
      animation-name: ${slideDownAndFade};
    }

    &[data-side="right"] {
      animation-name: ${slideLeftAndFade};
    }

    &[data-side="bottom"] {
      animation-name: ${slideUpAndFade};
    }

    &[data-side="left"] {
      animation-name: ${slideRightAndFade};
    }
  }

  .TooltipArrow {
    fill: var(--nvo-dark);
  }
`;

const Tooltip: React.FC<TooltipProps> = ({
  placement,
  trigger,
  content,
  contentAlign = "center",
}) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild style={{ width: "fit-content" }}>
          {trigger}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal style={{ minWidth: "fit-content !important" }}>
          <Content side={placement} align={contentAlign}>
            {content}
            <TooltipPrimitive.Arrow className="TooltipArrow" />
          </Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
