import React from "react";
import Container from "./container";
import Content from "./content";

export interface StepperProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Stepper: React.FC<StepperProps> = ({ children, className, style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Object.assign(Stepper, {
  Container,
  Content,
});
