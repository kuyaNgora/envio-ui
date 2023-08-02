import styled, { keyframes } from "styled-components";

const slideUpAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(2px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideRightAndFade = keyframes`
    from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
    from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
    from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const itemStyle = (element: any) => {
  const x = styled(element)`
    font-size: 13px;
    line-height: 1;
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 5px;
    position: relative;
    padding-left: 25px;
    user-select: none;
    outline: none;
    color: var(--nvo-dark);

    &[data-highlighted] {
      background-color: var(--nvo-button-default-bg-hover);
    }

    &[data-disabled] {
        pointer-events: none;
        color: var(--nvo-gray-300);
    }

    > .right-icon {
        margin-left: auto;
        padding-left: 20px;
        color: var(--nvo-dark)
    }
  `;

  return x
};

const contentStyle = (element: any) => {
  const x = styled(element)`
    min-width: 200px;
    background-color: var(--nvo-white);
    border-radius: 6px;
    padding: 5px;
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;

    &[data-side="top"] {
    animation-name: ${slideDownAndFade};
  }

  &[data-side="right"] {
    animation-name: ${slideLeftAndFade};
  }

  &[data-side="bottom"] {
    animation-name: ${slideUpAndFade};
  }

  &[data-side="left"] {
    animation-name: ${slideRightAndFade};
  }
  `;

  return x
};

export { itemStyle, contentStyle };
