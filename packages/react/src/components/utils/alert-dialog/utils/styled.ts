import styled, { keyframes } from "styled-components";
import { transparentize } from "polished";
import { foundations } from "@envio-ui/core";

const overlayShow = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const contentShow = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`;

const overlayStyle = (element: any) => {
  const style = styled(element)`
    background-color: ${transparentize(0.9, foundations.colors.greylight01)};
    position: fixed;
    backdrop-filter: blur(1px);
    inset: 0;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  `;
  return style;
};

const contentStyle = (element: any) => {
  const style = styled(element)`
    background-color: var(--nvo-white);
    border-radius: 6px;
    box-shadow: 0px 10px 38px -10px ${transparentize(0.65, foundations?.colors?.black)},
      0px 10px 20px -15px ${transparentize(0.8, foundations?.colors?.black)};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 500px;
    max-height: 85vh;
    padding: 25px;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &:focus {
      outline: none;
    }
  `;
  return style;
};

const titleStyle = (element: any) => {
  const style = styled(element)`
    margin: 0;
    color: var(--nvo-dark);
    font-size: 17px;
    font-weight: 600;
  `;
  return style;
};

const descriptionStyle = (element: any) => {
  const style = styled(element)`
    margin-top: 10px;
    margin-bottom: 20px;
    color: var(--nvo-gray-800);
    font-size: 15px;
    line-height: 1.5;
  `;
  return style;
};

export { overlayStyle, contentStyle, titleStyle, descriptionStyle };
