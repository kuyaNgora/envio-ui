import { IconChevronUpOutline } from "@envio-ui/icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  AccordionMultipleProps,
  AccordionSingleProps,
} from "@radix-ui/react-accordion";
import React from "react";
import styled, { keyframes } from "styled-components";
import type { CSSObject } from "../../../../themes/types";

import { Box } from "../../../layout";
import { UnstyledButton } from "../../../inputs";
import { LabelText } from "../../../data";

const Accordion: React.FC<
  (AccordionSingleProps | AccordionMultipleProps) & { style?: CSSObject }
> = ({ children, style, ...rest }) => {
  return (
    <AccordionPrimitive.Root asChild {...rest} style={style}>
      <Box>{children}</Box>
    </AccordionPrimitive.Root>
  );
};

const AccordionItem: React.FC<
  AccordionPrimitive.AccordionItemProps & { style?: CSSObject }
> = ({ children, disabled, value, style }) => {
  return (
    <AccordionPrimitive.Item asChild disabled={disabled} value={value}>
      <Box sx={{ ...style }}>{children}</Box>
    </AccordionPrimitive.Item>
  );
};

const AccordionTrigger: React.FC<AccordionPrimitive.AccordionTriggerProps> = ({
  children,
  ...rest
}) => {
  return (
    <AccordionPrimitive.Trigger asChild {...rest}>
      {children}
    </AccordionPrimitive.Trigger>
  );
};

const AccordionChevron = styled(IconChevronUpOutline)`
  transition: transform 300ms;
  [data-state="open"] & {
    transform: rotate(180deg);
  }
`;

export interface AccordionHeaderProps
  extends AccordionPrimitive.AccordionHeaderProps {
  size?: "md" | "lg";
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  size = "md",
  ...rest
}) => {
  return (
    <AccordionPrimitive.Header asChild {...rest}>
      <LabelText display={"flex"} scale={"md"}>
        <AccordionTrigger>
          <UnstyledButton
            p="md"
            minHeight={size === "md" ? 40 : 48}
            display={"flex"}
            flex={1}
            borderRadius={"lg"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontSize={16}
            fontWeight={700}
            color="secondary"
            _hover={{ backgroundColor: "greylight03" }}
            _focus={{
              boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
            }}
            _focusVisible={{
              outline: "none",
            }}
          >
            {children}
            <Box width={18} height={18}>
              <AccordionChevron size={18} fill="#202020" />
            </Box>
          </UnstyledButton>
        </AccordionTrigger>
      </LabelText>
    </AccordionPrimitive.Header>
  );
};

const slideDown = keyframes`
  from  { height: 0 }
  to { height: var(--radix-accordion-content-height) },`;

const slideUp = keyframes`
  from { height: var(--radix-accordion-content-height) }
  to { height: 0 }`;

const BoxContent = styled("div")`
  margin-left: 16px;
  margin-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  overflow: hidden;
  border-top: 1px solid #e7e9ed;
  border-bottom: 1px solid #e7e9ed;
  font-size: 16px;
  font-weight: 400;
  color: #636363;
  &[data-state="open"] {
    animation-name: ${slideDown};
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[data-state="closed"] {
    animation-name: ${slideUp};
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

const AccordionContent: React.FC<AccordionPrimitive.AccordionContentProps> = ({
  children,
  ...rest
}) => {
  return (
    <AccordionPrimitive.Content asChild {...rest}>
      <BoxContent>{children}</BoxContent>
    </AccordionPrimitive.Content>
  );
};

export default Object.assign(Accordion, {
  Item: AccordionItem,
  Content: AccordionContent,
  Header: AccordionHeader,
});
