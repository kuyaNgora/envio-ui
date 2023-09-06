import React from "react";

export interface PositionTypes {
  position: "left" | "top" | "right" | "bottom";
}

export interface FooterTypes {
  index: number;
  length: number;
}

export interface TooltipCMProps extends PositionTypes {
  footer?: FooterTypes;
  next?: VoidFunction;
  prev?: VoidFunction;
}

export interface CoachProps {
  activate: boolean;
  component: React.ReactNode;
  reference: React.MutableRefObject<null> | string;
  tooltip?: TooltipCMProps;
}

export interface CoachCoreProps {
  activate: boolean;
  component: React.ReactNode;
  element: Element;
  tooltip: TooltipCMProps;
}

export interface Directions {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

export interface Dimension {
  height: number;
  width: number;
  leftSpace: number;
  rightSpace: number;
  topSpace: number;
  bottomSpace: number;
}

export interface DimensionSetter {
  element: Element;
  setDimension: (dimension: Dimension) => void;
}

export interface ToolTipPlacement extends PositionTypes {
  dimension: Dimension;
}
