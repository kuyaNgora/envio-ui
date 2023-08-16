import styled from "styled-components";

const rootStyles = (element: any) => {
  const style = styled(element)`
    position: relative;
    width: 100%;
    margin: auto;
    direction: ltr;
  `;

  return style;
};

const wrapperStyles = (element: any) => {
  const style = styled(element)`
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    height: auto;
  `;

  return style;
};

const stageStyles = (element: any) => {
  const style = styled(element)`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    transfrom-style: flat;
    -webkit-transform-style: flat;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    &.envio-carousel__stage-item {
      position: relative;

      display: inline-block;
      padding: 0;
      margin: 0;

      box-sizing: border-box;
      width: 100%;
      height: 100%;
      vertical-align: top;
      white-space: normal;
      line-height: 0;
      * {
        line-height: initial;
      }
      &.__hidden {
        opacity: 0;
        overflow: hidden;
      }
    }
  `;

  return style;
};

const btnStyles = (element: any) => {
  const style = styled(element)`
    &.envio-carousel__prev-btn,
    .envio-carousel__next-btn {
      display: inline-block;
      box-sizing: border-box;
      width: 50%;
      padding: 10px 5px;

      &[data-area] {
        &::after {
          position: relative;
          content: attr(data-area);
          text-transform: capitalize;
        }
      }

      &-item {
        display: inline-block;
        cursor: pointer;
        padding: 5px;
        margin: 0;
        color: var(--nvo-primary);
        &::hover {
          color: var(--nvo-primary);
        }
        &.__inactive {
          opacity: 0.4;
          pointer-events: none;
        }
      }
    }

    &.envio-carousel__prev-btn {
      text-align: right;
    }
  `;

  return style;
};

export { btnStyles, rootStyles, stageStyles, wrapperStyles };
