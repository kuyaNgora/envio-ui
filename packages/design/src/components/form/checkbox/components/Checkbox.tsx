import { IconCheckOutline } from "@envio-ui/icons";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

export interface CheckboxProps {
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

const Root = styled(CheckboxPrimitive.Root)`
  width: 20px;
  height: 20px;
  border: 1px solid #d2d2d2;
  padding: 0px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:disabled) {
    cursor: pointer;
    pointer-events: all !important;

    &:hover {
      box-shadow: 0 0 0 3px rgba(9, 115, 187, 0.16);
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(9, 115, 187, 0.16);
    }
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;

const Indicator = styled(CheckboxPrimitive.Indicator)`
  color: var(--nvo-primary);
  padding: 0px;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &[data-state="checked"] {
    background-color: var(--nvo-primary);
    color: var(--nvo-white);
  }
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

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
        <Root
          id={id}
          checked={value}
          onCheckedChange={onChange}
          disabled={disabled}
        >
          <Indicator>
            <IconCheckOutline
              size={13}
              fill="currentColor"
              style={{ marginTop: -2 }}
            />
          </Indicator>
        </Root>
        {renderLabel()}
      </Wrapper>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
