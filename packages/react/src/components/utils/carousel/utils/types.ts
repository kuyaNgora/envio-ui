import React from "react";

export interface CarouselProps {
  activeIndex?: number;
  animationDuration?: number;
  animationEasingFunction?: string;
  animationType?: "slide" | "fadeout" | AnimationType;
  autoHeight?: boolean;
  autoPlay?: boolean;
  autoPlayControls?: boolean;
  autoPlayDirection?: "rtl" | "ltr" | AutoplayDirection;
  autoPlayInterval?: number;
  autoPlayStrategy?: "default" | "all" | "action" | "none" | AutoPlayStrategy;
  autoWidth?: boolean;
  children?: any;
  controlsStrategy?:
    | "default"
    | "responsive"
    | "alternate"
    | string
    | ControlsStrategy;
  disableButtonsControls?: boolean;
  disableDotsControls?: boolean;
  disableSlideInfo?: boolean;
  infinite?: boolean;
  innerWidth?: number;
  items?: any[];
  keyboardNavigation?: boolean;
  mouseTracking?: boolean;
  name?: string;
  paddingLeft?: number;
  paddingRight?: number;
  preservePosition?: boolean;
  responsive?: Responsive;
  renderKey?: number;
  ssrSilentMode?: boolean;
  swipeDelta?: number;
  swipeExtraPadding?: number;
  touchMoveDefaultEvents?: boolean;
  touchTracking?: boolean;
  onInitialized?: (e: EventObject) => void;
  onResizeEvent?: (
    e: Event,
    prevProps: RootElement,
    nextProps: RootElement
  ) => boolean;
  onResized?: (e: EventObject) => void;
  onSlideChange?: (e: EventObject) => void;
  onSlideChanged?: (e: EventObject) => void;
  renderSlideInfo?: (e: SlideInfo) => React.ReactNode;
  renderDotsItem?: (e: DotsItem) => React.ReactNode;
  renderPrevButton?: ({ isDisabled = false }) => React.ReactNode;
  renderNextButton?: ({ isDisabled = false }) => React.ReactNode;
  renderPlayPauseButton?: ({ isPlaying = false }) => React.ReactNode;
}

export interface CarouselState {
  activeIndex: number;
  animationDuration?: number;
  autoWidth: boolean;
  clones: any[];
  canUseDom: boolean;
  infinite?: boolean;
  initialStageHeight: number;
  isAutoPlaying: boolean;
  isAutoPlayCanceledOnAction: boolean;
  isStageContentPartial: boolean;
  itemsCount: number;
  itemsInSlide: number;
  itemsOffset: number;
  fadeoutAnimationIndex: number | null;
  fadeoutAnimationPosition: number | null;
  fadeoutAnimationProcessing: boolean;
  stageContentWidth: number;
  stageWidth: number;
  swipeLimitMin: number;
  swipeLimitMax: number;
  swipeAllowedPositionMax: number;
  swipeShiftValue: number;
  transition: string;
  transformationSet: ItemCoords[];
  translate3d: number;
}

export type Timeout = number;
export type Options = Record<string, string | number | undefined>;

export type Style = {
  transition: string;
  transform?: string;
};

export type Transition = {
  animationDuration?: number;
  animationEasingFunction?: string;
};

export type Responsive = {
  [key: string | number]: {
    items: number;
    itemsFit?: "contain" | "fill" | string;
  };
};

export type EventObject = {
  item: number;
  itemsInSlide: number;
  isPrevSlideDisabled: boolean;
  isNextSlideDisabled: boolean;
  slide: number;
  type: string;
};

export type RootElement = {
  width?: number;
  height?: number;
};

export type Transformations = {
  partial: boolean;
  content: number;
  coords: ItemCoords[];
};

export type ItemCoords = {
  width: number;
  position: number;
};

export type SlideTo = {
  activeIndex: number;
  fadeoutAnimationIndex?: number | null;
  fadeoutAnimationPosition?: number | null;
  eventType?: EventType;
};

export type SlideInfo = {
  item: number;
  itemsCount: number;
};

export type DotsItem = {
  isActive: boolean;
  activeIndex: number;
};

export enum EventType {
  ACTION = "action",
  INIT = "init",
  RESIZE = "resize",
  UPDATE = "update",
}

export enum AnimationType {
  FADEOUT = "fadeout",
  SLIDE = "slide",
}

export enum AutoPlayStrategy {
  DEFAULT = "default",
  ALL = "all",
  ACTION = "action",
  NONE = "none",
}

export enum ControlsStrategy {
  DEFAULT = "default",
  ALTERNATE = "alternate",
  RESPONSIVE = "responsive",
}

export enum AutoplayDirection {
  RTL = "rtl",
  LTR = "ltr",
}
