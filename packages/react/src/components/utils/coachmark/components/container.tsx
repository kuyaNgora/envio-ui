import React from "react";
import CoachMarkCore from "./coachmark";
import { CoachCoreProps, CoachProps } from "../utils";

const CoachMark: React.FC<CoachProps> = ({ reference, tooltip, ...rest }) => {
  let element: Element | null = null;
  if (typeof reference === "string") {
    try {
      element = document.querySelector(reference) || null;
    } catch (e) {
      console.error(`${reference} is not valid in document.querySelector`);
    }
  } else if (reference && reference.current) {
    element = reference.current;
  }
  if (!element) {
    return null;
  }

  const coreProps: CoachCoreProps = {
    ...rest,
    element,
    tooltip: {
      position: tooltip?.position || "bottom",
      footer: tooltip?.footer,
      next: tooltip?.next,
      prev: tooltip?.prev,
    },
  };

  return <CoachMarkCore {...coreProps} />;
};

export default CoachMark;
