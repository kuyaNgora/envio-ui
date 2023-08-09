import styled from "styled-components";
import {
  enterFromLeft,
  enterFromRight,
  exitToLeft,
  exitToRight,
  fadeIn,
  fadeOut,
  scaleIn,
  scaleOut,
} from "./keyframe";

const rootStyle = (element: any) => {
  const x = styled(element)`
    all: unset;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    z-index: 1;
    list-style: none;
  `;

  return x;
};

const listStyle = (element: any) => {
  const x = styled(element)`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 4px;
    border-radius: 6px;
    list-style: none;
    margin: 0;
  `;

  return x;
};

const indicatorStyle = (element: any) => {
  const x = styled(element)`
    all: unset;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10px;
    top: 100%;
    overflow: hidden;
    z-index: 1;
    transition: width, transform 250ms ease;

    [data-state="visible"] & {
      animation: ${fadeIn} 200ms ease;
    }

    [data-state="hidden"] & {
      animation: ${fadeOut} 200ms ease;
    }
  `;

  return x;
};

const arrowStyle = (element: any) => {
  const x = styled(element)`
    all: unset;
    position: relative;
    top: 70%;
    background-color: white;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-top-left-radius: 2px;
  `;

  return x;
};

const viewportWrapperStyle = (element: any) => {
  const x = styled(element)`
    position: absolute;
    display: flex;
    justify-content: center;
    max-width: 600px;
    width: 100%;
    top: 100%;
  `;

  return x;
};

const viewportStyle = (element: any) => {
  const x = styled(element)`
    position: relative;
    transform-origin: top center;
    margin-top: 10px;
    max-width: 600px;
    width: 100%;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    height: var(--radix-navigation-menu-viewport-height);
    transition: width, height, 300ms ease;

    &[data-state="open"] {
      animation: ${scaleIn} 200ms ease;
    }
    &[data-state="closed"] {
      animation: ${scaleOut} 200ms ease;
    }
  `;

  return x;
};

// content
const ulStyle = (element: any) => {
  const x = styled(element)`
    all: unset;
    display: grid;
    margin: 0;
    column-gap: 10px;
    list-style: none;
  `;

  return x;
};

const contentStyle = (element: any) => {
  const x = styled(element)`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 600px;
    width: 100%;
    border-radius: 6px;
    padding: 24px;
    animation-duration: 250ms;
    animation-timing-function: ease;
    box-shadow: 0 2px 10px var(--nvo-gray-400);

    &[data-motion="from-start"] {
      animation-name: ${enterFromLeft};
    }

    &[data-motion="from-end"] {
      animation-name: ${enterFromRight};
    }

    &[data-motion="to-start"] {
      animation-name: ${exitToLeft};
    }

    &[data-motion="to-start"] {
      animation-name: ${exitToRight};
    }
  `;

  return x;
};

const itemHeadingStyle = (element: any) => {
  const x = styled(element)`
    all: unset;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--nvo-secondary);
  `;

  return x;
};

const itemBodyStyle = (element: any) => {
  const x = styled(element)`
    all: unset;
    color: var(--nvo-gray-700);
    font-weight: 400;
  `;

  return x;
};

const linkStyle = (element: any) => {
  const x = styled(element)`
    display: inline-flex;
    width: 100%;
    outline: none;
    text-decoration: none;
    user-select: none;
    padding: 16px;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
    color: var(--nvo-link-color)

    &:focus {
        background-color: rgba(var(--nvo-primary-rgb), 0.1);
    }

    &:hover {
        background-color: rgba(var(--nvo-primary-rgb), 0.1);
    }
  `;

  return x;
};

// item
const triggerStyle = (element: any) => {
  const x = styled(element)`
    all: unset;
    min-height: 2rem;
    min-width: 2rem;
    outline: none;
    user-select: none;
    font-weight: 500;
    line-height: 1;
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    justify-content: space-between;
    gap: 4px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--nvo-link-color);

    &:hover,
    &:focus,
    &[data-state="open"] {
      background-color: rgba(var(--nvo-primary-rgb), 0.16);
      color: var(--nvo-link-hover-color);
    }
  `;

  return x;
};

const itemStyle = (element: any) => {
  const x = styled(element)`
    &[aria-disabled="true"] {
      pointer-events: none;
      color: var(--nvo-link-disabled-color);
    }
  `;

  return x;
};

const carretStyle = (element: any) => {
  const x = styled(element)`
    all: unset;
    position: relative;
    top: 1px;
    transition: transform 250ms ease;
    &[data-state="open"] {
      transform: rotate(-180deg);
    }
  `;

  return x;
};

export {
  arrowStyle,
  indicatorStyle,
  listStyle,
  rootStyle,
  viewportStyle,
  viewportWrapperStyle,
  contentStyle,
  itemBodyStyle,
  itemHeadingStyle,
  ulStyle,
  linkStyle,
  triggerStyle,
  carretStyle,
  itemStyle,
};