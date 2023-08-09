import React from "react";
import * as RadioPrimitive from "@radix-ui/react-radio-group";
import styled from "styled-components";

export interface ItemProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  onChange: () => void;
  value: string;
  disabled?: boolean;
}

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
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

const Items = styled(RadioPrimitive.Item)`
  all: unset;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;

  &:not(:disabled) {
    cursor: pointer;
    pointer-events: all !important;
    outline: 1px solid #d2d2d2;
    background-color: #f4f6fa;

    &:hover {
      outline: 1px solid var(--nvo-primary);
      background-color: #edf8ff;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(9, 115, 187, 0.16);
    }

    &[data-state="checked"] {
      outline: 1px solid var(--nvo-primary);
      background-color: #fff;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: all !important;
    outline: 1px solid #e7e9ed;
    background-color: #f4f6fa;

    &[data-state="checked"] {
      background-color: #fff;
    }
  }
`;

const Indicator = styled(RadioPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-disabled] {
    &:after {
      content: "";
      display: block;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 100%;
      background-color: #e7e9ed;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 100%;
    background-color: var(--nvo-primary);
  }
`;

const RadioItem = React.forwardRef<HTMLInputElement, ItemProps>(
  ({ className, style, label, onChange, value, disabled }, ref) => {
    const renderLabel = () => {
      return (
        label && (
          <Label htmlFor={value} aria-disabled={disabled}>
            {label}
          </Label>
        )
      );
    };

    const renderItem = () => {
      return (
        <Items onChange={onChange} value={value} disabled={disabled} id={value}>
          <Indicator />
        </Items>
      );
    };

    return (
      <Wrapper
        ref={ref}
        style={style}
        className={className}
        aria-disabled="true"
      >
        {renderItem()}
        {renderLabel()}
      </Wrapper>
    );
  }
);

RadioItem.displayName = "RadioItem";
export default RadioItem;
