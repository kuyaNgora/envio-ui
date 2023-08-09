import React from "react";
import * as RadioPrimitive from "@radix-ui/react-radio-group";
import styled from "styled-components";
import RadioItem from "./Item";

export interface RadioProps extends RadioPrimitive.RadioGroupProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Root = styled(RadioPrimitive.Root)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Radio: React.FC = () => {
  return null;
};

const RadioGroup: React.FC<RadioProps> = ({
  className,
  style,
  children,
  defaultValue,
}) => {
  return (
    <Root className={className} style={style} defaultValue={defaultValue}>
      {children}
    </Root>
  );
};

RadioGroup.displayName = "RadioGroup";

export default Object.assign(Radio, {
  Group: RadioGroup,
  Item: RadioItem,
});
