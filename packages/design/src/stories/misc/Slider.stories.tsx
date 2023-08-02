import { StoryFn } from "@storybook/react";
import React from "react";
import { Slider, SliderProps } from "../../components";

export default {
  title: "Components/Misc/Slider",
  component: Slider,
  tags: ["autodocs"],
};

const Template: StoryFn<SliderProps> = () => {
  return <Slider />;
};

export const Example = Template.bind({});
