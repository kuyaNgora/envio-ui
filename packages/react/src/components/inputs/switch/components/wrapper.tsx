import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import SwitchRoot from "./switch";
import SwitchThumb from "./thumb";

export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  onChange: () => void;
  value?: boolean;
  disabled?: boolean;
}

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled("label")`
  padding-left: 12px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  pointer-events: all !important;

  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
`;

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, style, label, onChange, value, disabled }, ref) => {
    const id = uuid();
    const renderLabel = () => {
      return (
        label && (
          <Label htmlFor={id} aria-disabled={disabled}>
            {label}
          </Label>
        )
      );
    };
    return (
      <Wrapper ref={ref} className={className} style={style}>
        <SwitchRoot
          asChild
          id={id}
          onCheckedChange={onChange}
          checked={value}
          disabled={disabled}
        >
          <SwitchThumb />
        </SwitchRoot>
        {renderLabel()}
      </Wrapper>
    );
  }
);

export default Switch;
