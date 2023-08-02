import React from "react";
import styled from "styled-components";
import {
  allSystemProps,
  AllSystemProps,
  componentStylesMixin,
  pseudoSystemProps,
  PseudoSystemProps,
  shouldForwardProp,
  sxMixin,
  SxProps,
} from "../../../../../system";
import Container from "./Container";
import Header from "./Header";

export interface PageProps extends SxProps, AllSystemProps, PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

const Page = styled("div").withConfig<PageProps>({ shouldForwardProp })(
  componentStylesMixin("page"),
  sxMixin,
  allSystemProps,
  pseudoSystemProps
);

export default Object.assign(Page, {
  Header,
  Container,
});
