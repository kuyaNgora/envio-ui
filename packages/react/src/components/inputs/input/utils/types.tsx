import {
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from "styled-system";

export type AllInputStyledProps = LayoutProps &
  PositionProps &
  FlexboxProps &
  GridProps &
  SpaceProps &
  BorderProps;

export type InputBaseProps = AllInputStyledProps;
