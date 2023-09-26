import { Eye, EyeSlash, XmarkOutline } from "@envio-ui/icons";
import React from "react";
import styled from "styled-components";
import UnstyledInput from "./UnstyledInput";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  /** Additional CSS classes to give to the component */
  className?: string;
  style?: React.CSSProperties;
  error?: string;
  label?: string;
  hint?: string;
  required?: boolean;
  _prefix?: React.ComponentType<any> | string;
  _surfix?: React.ComponentType<any> | string;
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

const Prefix = styled("span")`
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--nvo-button-default-border);
  border-right: 0;
  color: var(--nvo-gray-500);
  padding: 0 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: var(--nvo-light);
`;

const Surfix = styled("span")`
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--nvo-button-default-border);
  border-left: 0;
  color: var(--nvo-gray-500);
  padding: 0 10px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: var(--nvo-light);
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      style,
      error,
      label,
      required,
      hint,
      _prefix,
      _surfix,
      type,
      ...rest
    },
    ref
  ) => {
    const [secured, setSecured] = React.useState("password");

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

    const renderPrefix = () => {
      if (_prefix) {
        if (typeof _prefix === "string") {
          return (
            <Prefix>
              <div className="">{_prefix}</div>
            </Prefix>
          );
        }

        return (
          <Prefix>
            {React.createElement(_prefix, {
              fill: "currentColor",
              size: 20,
            })}
          </Prefix>
        );
      }
      return null;
    };

    const renderSurfix = () => {
      if (_surfix) {
        if (typeof _surfix === "string") {
          return (
            <Surfix>
              <div className="">{_surfix}</div>
            </Surfix>
          );
        }

        return (
          <Surfix>
            {React.createElement(_surfix, {
              fill: "currentColor",
              size: 20,
            })}
          </Surfix>
        );
      }
      return null;
    };

    return (
      <div>
        {renderLabel()}
        <Wrapper aria-invalid={!!error}>
          {_prefix && renderPrefix()}
          <div style={{ position: "relative", width: "100%" }}>
            <UnstyledInput
              ref={ref}
              aria-invalid={!!error}
              borderTopLeftRadius={_prefix ? 0 : 4}
              borderBottomLeftRadius={_prefix ? 0 : 4}
              borderTopRightRadius={_surfix ? 0 : 4}
              borderBottomRightRadius={_surfix ? 0 : 4}
              {...rest}
              type={type === "password" ? secured : type}
            />
            {type === "password" ? (
              <span
                style={{
                  position: "absolute",
                  right: 0,
                  marginRight: error ? 25 : 8,
                  cursor: "pointer",
                  top: "50%",
                  transform: "translateY(-50%)",
                  marginTop: 1.5,
                }}
              >
                {secured === "password" ? (
                  <Eye
                    size={20}
                    fill="#656d77"
                    onClick={() => setSecured("text")}
                  />
                ) : (
                  <EyeSlash
                    size={20}
                    fill="#656d77"
                    onClick={() => setSecured("password")}
                  />
                )}
              </span>
            ) : null}

            {error && (
              <XmarkOutline
                style={{
                  position: "absolute",
                  right: 5,
                  top: "50% ",
                  transform: "translateY(-50%)",
                }}
                fill="currentColor"
              />
            )}
          </div>
          {renderSurfix()}
        </Wrapper>
        {renderHint()}
        {renderError()}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
