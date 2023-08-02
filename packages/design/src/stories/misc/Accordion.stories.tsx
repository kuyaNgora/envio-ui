import { StoryFn } from "@storybook/react";
import React from "react";
import { Accordion } from "../../components";

export default {
  title: "Components/Misc/Accordion",
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
};

export const SingleAccordion: StoryFn<{}> = () => {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible
      style={{
        // width: 400,
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
SingleAccordion.args = {
  size: "md",
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
MultipleAccordion.args = {
  size: "md",
};
