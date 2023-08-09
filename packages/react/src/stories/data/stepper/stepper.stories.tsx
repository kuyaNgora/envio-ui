import { StoryFn } from "@storybook/react";
import React from "react";
import { Stepper } from "../../../components";

export default {
  title: "Components/Data & Display/Stepper",
  argTypes: {
    className: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    style: {
      table: {
        type: {
          summary: "CSSProperties",
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    activeColor: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    inactiveColor: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    title: {
      table: {
        type: {
          summary: `string | ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    subtitle: {
      table: {
        type: {
          summary: `string | ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    content: {
      table: {
        type: {
          summary: `string | ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
  },
};

export const ListLog: StoryFn<{}> = () => {
  return (
    <Stepper>
      <Stepper.Item
        title="Delivery status (Active)"
        subtitle="DD/MM/YYYY"
        content={<div>Copy text that supporting delivery status</div>}
      />
      <Stepper.Item
        title="Delivery status"
        subtitle="DD/MM/YYYY"
        content={<div>Copy text that supporting delivery status</div>}
      />
      <Stepper.Item
        title="Delivery status"
        subtitle="DD/MM/YYYY"
        content={<div>Copy text that supporting delivery status</div>}
      />
      <Stepper.Item
        title="Delivery status"
        subtitle="DD/MM/YYYY"
        content={<div>Copy text that supporting delivery status</div>}
      />
    </Stepper>
  );
};
