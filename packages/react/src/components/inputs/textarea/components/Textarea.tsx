import React from "react";
import styled from "styled-components";
import { XmarkOutline } from "@envio-ui/icons";
import UnstyledTextarea from "./UnstyledTextarea";

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  /** Additional CSS classes to give to the component */
  className?: string;
  style?: React.CSSProperties;
  error?: string;
  label?: string;
  hint?: string;
  required?: boolean;
}

const Wrapper = styled("div")`
  position: relative;
  width: max-content;
  display: flex;
  width: 100%;

  &[aria-invalid="true"] {
    color: var(--nvo-danger);
  }
`;

const Label = styled("label")`
  font-size: 0.85rem;
  line-height: 1.5rem;
`;

const Error = styled("div")`
  font-size: 0.75rem;
  color: var(--nvo-danger);
`;

const Hint = styled("small")`
  font-size: 0.75rem;
  color: var(--nvo-gray-700);
`;

const Input = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, style, error, label, required, hint, ...rest }, ref) => {
    const renderLabel = () => {
      return (
        label && (
          <Label>
            {label}{" "}
            {required && <span style={{ color: "var(--nvo-danger)" }}>*</span>}
          </Label>
        )
      );
    };

    const renderError = () => {
      return error && <Error>{error}</Error>;
    };

    const renderHint = () => {
      return hint && <Hint>{hint}</Hint>;
    };

    return (
      <div className="">
        {renderLabel()}
        <Wrapper aria-invalid={!!error}>
          <div style={{ position: "relative", width: "100%" }}>
            <UnstyledTextarea
              ref={ref}
              aria-invalid={!!error}
              borderTopLeftRadius={4}
              borderBottomLeftRadius={4}
              borderTopRightRadius={4}
              borderBottomRightRadius={4}
              {...rest}
            />
            {error && (
              <XmarkOutline
                style={{
                  position: "absolute",
                  right: 5,
                  top: 5,
                }}
                fill="currentColor"
              />
            )}
          </div>
        </Wrapper>
        {renderHint()}
        {renderError()}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
