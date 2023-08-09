import React from "react";
import type { CSSProperties } from "styled-components";
import styled from "styled-components";
import { IconXmarkOutline } from "@envio-ui/icons";

export interface DrawerProps {
  open: boolean;
  onClose?: VoidFunction;
  direction: "left" | "right" | "top" | "bottom";
  children?: React.ReactNode;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  style?: React.CSSProperties;
  zIndex?: number;
  size?: number | string;
  className?: string;
  customIdSuffix?: string;
  lockBackgroundScroll?: boolean;
}

const Wrapper = styled("div")`
  .checkbox {
    display: none;

    &:checked {
      & ~ .overlay {
        display: block;
        opacity: 1;
      }

      & ~ .container {
        visibility: visible;
        transform: translate3d(0, 0, 0) !important;
      }
    }
  }

  .overlay {
    display: none;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .container {
    position: fixed;
    visibility: hidden;
    background: white;
    transition: all;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  }
`;

const getDirection = (
  direction: string,
  size?: number | string
): {} | React.CSSProperties => {
  switch (direction) {
    case "left":
      return {
        top: 0,
        left: 0,
        transform: "translate3d(-100%, 0, 0)",
        width: size,
        height: "100vh",
      };
    case "right":
      return {
        top: 0,
        right: 0,
        transform: "translate3d(100%, 0, 0)",
        width: size,
        height: "100vh",
      };
    case "bottom":
      return {
        left: 0,
        right: 0,
        bottom: 0,
        transform: "translate3d(0, 100%, 0)",
        width: "100%",
        height: size,
      };
    case "top":
      return {
        left: 0,
        right: 0,
        top: 0,
        transform: "translate3d(0, -100%, 0)",
        width: "100%",
        height: size,
      };

    default:
      return {};
  }
};

const Drawer: React.FC<DrawerProps> = ({
  direction = "top",
  open,
  children,
  className,
  customIdSuffix,
  onClose,
  overlay = true,
  overlayColor = "#000",
  overlayOpacity = 0.1,
  size = 250,
  style,
  zIndex = 100,
  lockBackgroundScroll = false,
}) => {
  const bodyRef = React.useRef<HTMLBodyElement | null>(null);

  React.useEffect(() => {
    const updatePageScroll = () => {
      bodyRef.current = window.document.querySelector("body");

      if (bodyRef.current && lockBackgroundScroll) {
        if (open) {
          bodyRef.current.style.overflow = "hidden";
        } else {
          bodyRef.current.style.overflow = "";
        }
      }
    };

    updatePageScroll();
  }, []);

  const idSuffix = React.useMemo(() => {
    return customIdSuffix || (Math.random() + 1).toString(36).substring(7);
  }, [customIdSuffix]);

  const overlayStyles: CSSProperties = {
    backgroundColor: `${overlayColor}`,
    opacity: `${overlayOpacity}`,
    zIndex,
  };

  const drawerStyles: CSSProperties = {
    zIndex: zIndex + 1,
    transitionDuration: `500ms`,
    ...getDirection(direction, size),
    ...style,
  };

  return (
    <Wrapper>
      <input
        type="checkbox"
        className="checkbox"
        id={`checkbox${idSuffix}`}
        onChange={onClose}
        checked={open}
      />

      <div
        style={drawerStyles}
        className={`container ${className}`}
        id={`container${idSuffix}`}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              right: 20,
              top: 20,
              cursor: "pointer",
            }}
            role="presentation"
            onClick={onClose}
          >
            <IconXmarkOutline size={20} fill={"#000"} />
          </div>
        </div>
        {children}
      </div>

      {overlay && (
        <label
          htmlFor={`checkbox${idSuffix}`}
          style={overlayStyles}
          className="overlay"
          id={`overlay${idSuffix}`}
        />
      )}
    </Wrapper>
  );
};

Drawer.displayName = "Drawer";

export default Drawer;
