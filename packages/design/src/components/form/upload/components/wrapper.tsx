import React from "react";
import Picture from "./picture";
import Result from "./result";

export interface UploaderProps {
  children?: React.ReactNode;
}

const Uploader: React.FC<UploaderProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Object.assign(Uploader, {
  Image: Picture,
  Result,
});
