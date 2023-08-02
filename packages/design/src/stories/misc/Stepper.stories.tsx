import { StoryFn } from "@storybook/react";
import React from "react";
import { Stepper } from "../../components";

export default {
  title: "Components/Misc/Stepper",
  tags: ["autodocs"],
};

export const ListLog: StoryFn<{}> = () => {
  return (
    <Stepper>
      <Stepper.Container>
        <Stepper.Content
          title="Delivery status (Active)"
          subtitle="DD/MM/YYYY"
          content={<div>Copy text that supporting delivery status</div>}
        />
        <Stepper.Content
          title="Delivery status"
          subtitle="DD/MM/YYYY"
          content={<div>Copy text that supporting delivery status</div>}
        />
        <Stepper.Content
          title="Delivery status"
          subtitle="DD/MM/YYYY"
          content={<div>Copy text that supporting delivery status</div>}
        />
        <Stepper.Content
          title="Delivery status"
          subtitle="DD/MM/YYYY"
          content={<div>Copy text that supporting delivery status</div>}
        />
      </Stepper.Container>
    </Stepper>
  );
};
