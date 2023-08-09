import React from "react";
import { Preview } from "@storybook/react";
import { EnvioProvider } from "../src";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "base",
      values: [
        {
          name: "base",
          value: "#fff",
        },
        {
          name: "dark",
          value: "#b6b2b2",
        },
      ],
    },
    options: {
      storySort: {
        order: [
          "Docs",
          ["Introduction", "Installation"],
          "Getting Started",
          ["Usage", "Provider"],
          "Components",
        ],
      },
    },
  },
  decorators: [
    Story => (
      <EnvioProvider>
        <Story />
      </EnvioProvider>
    ),
  ],
};

export default preview;
