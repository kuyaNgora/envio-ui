import { foundations } from "@envio-ui/core";
import { transparentize } from "polished";
import styled, { keyframes } from "styled-components";

const ANIMATION_DURATION = 400;
// TODO convert to useComponentStyle
const FadeIn = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

export interface OverlayScreenProps {
  /** backdropBlur used to make blur effect to screen behind overlay, default is true */
  isblur?: true | false;
}
// TODO conver to useComponentStyle
const OverlayScreen = styled("div")<OverlayScreenProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 1010;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ isblur }) =>
    isblur &&
    `
  @supports (backdrop-filter: blur(4px)) or (--webkit-backdrop-filter: blur(4px)) {
    backdrop-filter: blur(4px);
  }
  `}

  &::before {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${transparentize(0.5, foundations.colors.greylight05)};
    content: " ";
    visibility: hidden;
    opacity: 0;
  }

  &[data-state="entering"],
  &[data-state="entered"] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${FadeIn};
      animation-duration: ${ANIMATION_DURATION}ms;
    }
  }

  &[data-state="exiting"] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${FadeOut};
      animation-duration: ${ANIMATION_DURATION}ms;
    }
  }

  &.entered {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;
OverlayScreen.defaultProps = {
  isblur: true,
};

export default OverlayScreen;
