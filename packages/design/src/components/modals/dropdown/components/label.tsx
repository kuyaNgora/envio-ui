import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export interface LabelProps extends DropdownPrimitive.DropdownMenuLabelProps {
  className?: string;
}

const LabelCard = styled(DropdownPrimitive.Label)`
  padding-left: 25px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--nvo-gray-700);
`;

const Label: React.FC<LabelProps> = ({ className, children, ...rest }) => {
  return <LabelCard {...rest}>{children}</LabelCard>;
};

export default Label;
