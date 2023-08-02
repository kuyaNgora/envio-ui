/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: config => {
    config.resolve.mainFields = ["envio:src", "main"];
    return config;
  },
  babel: async options => {
    options.plugins.push("@babel/plugin-syntax-flow");
    options.presets.push("@babel/preset-typescript");
    return options;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
