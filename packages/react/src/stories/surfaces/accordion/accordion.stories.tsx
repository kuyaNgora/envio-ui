import { StoryFn } from "@storybook/react";
import React from "react";
import { Accordion } from "../../../components";

export default {
  title: "Components/Surfaces/Accordion",
  parameters: {
    backgrounds: {
      default: "dark",
      value: [
        {
          name: "dark",
          value: "#b6b2b2",
        },
      ],
    },
  },
  component: Accordion,
  argTypes: {
    type: {
      table: {
        type: {
          summary: `single | multiple`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Determines whether one or multiple items can be opened at the same time.",
    },
    defaultValue: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "The value of the item to expand when initially rendered and `type` is `single`. Use when you do not need to control the state of the items.",
    },
    value: {
      table: {
        type: {
          summary: `string | string[]`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "The controlled value of the item to expand when type is `single`. Must be used in conjunction with `onValueChange`.",
    },
    onValueChange: {
      table: {
        type: {
          summary: `function`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Event handler called when the expanded state of an item changes and type is `multiple`.",
    },
    collapsible: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "false" },
      },
      description:
        "When type is `single`, allows closing content when clicking trigger for an open item.",
    },
    disabled: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "false" },
      },
      description:
        "When `true`, prevents the user from interacting with the accordion and all its items.",
    },
  },
};

export const SingleAccordion: StoryFn<{}> = () => {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible
      style={{
        backgroundColor: "var(--nvo-white)",
      }}
    >
      <Accordion.Item value="item-1">
        <Accordion.Header>Title</Accordion.Header>
        <Accordion.Content>This is content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          This is Long Title , Very veeeery veeeeeeeery long title
        </Accordion.Header>
        <Accordion.Content>
          This is content is also very long, very very very long very very very
          long very very very long very very very long
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Header>Nested Accordion</Accordion.Header>
        <Accordion.Content>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            style={{
              width: "100%",
              backgroundColor: "var(--nvo-white)",
            }}
          >
            <Accordion.Item value="item-1">
              <Accordion.Header>Title</Accordion.Header>
              <Accordion.Content>This is content</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Header>
                This is Long Title , Very veeeery veeeeeeeery long title
              </Accordion.Header>
              <Accordion.Content>
                This is content is also very long, very very very long
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export const MultipleAccordion: StoryFn<{}> = () => {
  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1"]}
      style={{
        backgroundColor: "var(--nvo-white)",
      }}
    >
      <Accordion.Item value="item-1">
        <Accordion.Header>Title</Accordion.Header>
        <Accordion.Content>This is content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          This is Long Title , Very veeeery veeeeeeeery long title
        </Accordion.Header>
        <Accordion.Content>
          This is content is also very long, very very very long very very very
          long very very very long very very very long
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Header>Nested Accordion</Accordion.Header>
        <Accordion.Content>
          <Accordion
            type="multiple"
            defaultValue={["item-1"]}
            style={{
              width: "100%",
              backgroundColor: "var(--nvo-white)",
            }}
          >
            <Accordion.Item value="item-1">
              <Accordion.Header>Title</Accordion.Header>
              <Accordion.Content>This is content</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Header>
                This is Long Title , Very veeeery veeeeeeeery long title
              </Accordion.Header>
              <Accordion.Content>
                This is content is also very long, very very very long
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};
