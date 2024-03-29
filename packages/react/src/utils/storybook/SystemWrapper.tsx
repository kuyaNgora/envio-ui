/* eslint-disable import/no-extraneous-dependencies */
import { Decorator } from "@storybook/react";
import React from "react";
import "@fontsource/inter";
import { EnvioProvider } from "../../provider";

const SystemWrapper: Decorator = storyFn => (
  <EnvioProvider>{storyFn()}</EnvioProvider>
);

export default SystemWrapper;
