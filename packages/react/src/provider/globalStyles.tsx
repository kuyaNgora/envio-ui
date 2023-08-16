import { createGlobalStyle, css } from "styled-components";
import normalize from "./style/normalize";

const injectGlobalStyles = (
  additionalStyles?: string | ReturnType<typeof css>
) => {
  const GlobalStyles = createGlobalStyle`
    ${normalize}

    :root {
      --nvo-tooltip-black-transparent: rgba(32, 32, 32, 0.5);
      --nvo-tooltip-move: 10px;
      --nvo-tooltip-height: 8px;
      --nvo-tooltip-shift: calc(-2 * var(--nvo-tooltip-height));

      --nvo-blue:  ${p => p.theme.colors.blue09};
      --nvo-red:  ${p => p.theme.colors.red09};
      --nvo-orange:  ${p => p.theme.colors.orange09};
      --nvo-yellow:  ${p => p.theme.colors.yellow09};
      --nvo-green:  ${p => p.theme.colors.green09};
      --nvo-gray-100:  ${p => p.theme.colors.greylight03};
      --nvo-gray-200: ${p => p.theme.colors.greylight04};
      --nvo-gray-300: ${p => p.theme.colors.greylight05};
      --nvo-gray-400: ${p => p.theme.colors.greymed01};
      --nvo-gray-500: ${p => p.theme.colors.greymed02};
      --nvo-gray-600: ${p => p.theme.colors.greymed03};
      --nvo-gray-700: ${p => p.theme.colors.greymed05};
      --nvo-gray-800: ${p => p.theme.colors.greydark01};
      --nvo-gray-900: ${p => p.theme.colors.greydark05};
      --nvo-primary: ${p => p.theme.colors.blue09};
      --nvo-secondary: ${p => p.theme.colors.greydark05};
      --nvo-success: ${p => p.theme.colors.green09};
      --nvo-info: ${p => p.theme.colors.blue06};
      --nvo-warning: ${p => p.theme.colors.orange09};
      --nvo-danger: ${p => p.theme.colors.red09};
      --nvo-light:  ${p => p.theme.colors.greylight03};
      --nvo-dark: ${p => p.theme.colors.greydark05};
      --nvo-white: ${p => p.theme.colors.greylight01};

      --nvo-primary-rgb: 9,115,187;
      --nvo-secondary-rgb: 32,32,32;
      --nvo-success-rgb: 47,179,68;
      --nvo-info-rgb: 100,157,209;
      --nvo-warning-rgb: 255,140,2;
      --nvo-danger-rgb: 214,57,57;
      --nvo-light-rgb: 245,246,248;
      --nvo-dark-rgb: 32,32,32;
      --nvo-button-outline-rgb: 231,233,237;
      --nvo-button-primary-outline-rgb: 175,214,255;
      --nvo-button-secondary-outline-rgb: 176,183,191;

      --nvo-opacity-transparent: 0.1;
      --nvo-opacity-outline: 0.7;

      --nvo-button-default-bg: var(--nvo-light);
      --nvo-button-default-bg-hover: ${p => p.theme.colors.greylight04};
      --nvo-button-default-bg-active: ${p => p.theme.colors.greylight05};
      --nvo-button-default-border: #E7E9ED;
      --nvo-button-disabled-bg: ${p => p.theme.colors.greylight04};
      --nvo-button-disabled-color: ${p => p.theme.colors.greylight01};

      --nvo-button-primary-bg-hover: #08609C;
      --nvo-button-primary-bg-active: ${p => p.theme.colors.blue10};
    }

    html,
    body,
    #root {
      width: 100%;
      height: 100%;
    }

    body {
      font-family: ${p => p.theme.fonts.brand} !important;
      color: ${p => p.theme.colors.greydark05};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
      font-family: ${p => p.theme.fonts.brand} !important;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      display: block;
      max-width: 100%;
    }

    .noscroll {
      overflow: hidden;
    }

    .noselect {
      user-select: none;
    }

    .full-size {
      height: 100%;
      width: 100%;
    }

    .full-size-layout {
      height: 100%;
      min-height: 100vh;
      width: 100%;
    }

    .drag-handle {
      cursor: move;
      display: inline-block;

      &::before {
        content: '......';
        display: inline-block;
        width: 10px;
        word-break: break-word;
        white-space: normal;
        letter-spacing: 2px;
        line-height: 4.5px;
        text-align: center;
        height: 18px;
      }
    }

    .stepper__indicator {
      &::after{
        content: '';
      }
    }

    .coachmark__left,
    .coachmark__bottom,
    .coachmark__top,
    .coachmark__right {
      &::before {
        content: '';
        border-top-width: var(--nvo-tooltip-height);
        border-left-width: var(--nvo-tooltip-height);
        border-right-width: var(--nvo-tooltip-height);
        border-bottom-width: var(--nvo-tooltip-height);
        border-style: solid;
        background: transparent;
        border-color: #fff;
        position: absolute;
      }
    }

    /* https://github.com/reach/reach-ui/blob/master/packages/skip-nav/styles.css */
    [data-reach-skip-link] {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      position: absolute;
    }

    [data-reach-skip-link]:focus {
      padding: 1rem;
      position: fixed;
      top: 10px;
      left: 10px;
      background: white;
      z-index: 100;
      width: auto;
      height: auto;
      clip: auto;
    }

    [data-radix-popper-content-wrapper] {
      min-width: auto !important;
      max-width: 500px !important;
    }

    .d-flex {
      display: flex
    }

    .d-block {
      display: block
    }

    .d-none {
      display: none !important
    }

    @media (min-width: 768px) {
      .d-md-none {
        display: none !important;
      }
      .d-md-block {
        display: block !important;
      }
      .d-md-flex {
        display: flex !important;
      }
      .navbar-expand-md {
        flex-wrap: nowrap;
        justify-content: space-between;
      }
      .navbar-toggler {
        display: none
      }
    }

    ${additionalStyles};
  `;

  return { GlobalStyles };
};

export default injectGlobalStyles;
