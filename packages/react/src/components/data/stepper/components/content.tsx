import React from "react";
import List from "./list";

export interface ContentProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  content?: string | React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ title, subtitle, content }) => {
  return (
    <List>
      <span className="stepper__indicator" />
      <div>
        <div className="stepper__header">
          <div className="stepper__header__title">{title}</div>
          <div className="stepper__header__subtitle">{subtitle}</div>
        </div>
        <div className="stepper__content">{content}</div>
      </div>
    </List>
  );
};

export default Content;
