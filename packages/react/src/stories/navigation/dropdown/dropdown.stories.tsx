import type { Meta, StoryObj } from "@storybook/react";
import { DropdownExample } from "./example";

const meta = {
  title: "Components/Navigation/Dropdown",
  component: DropdownExample,
  argTypes: {
    // root
    defaultOpen: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.",
    },
    open: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "The controlled open state of the dropdown menu. Must be used in conjunction with `onOpenChange`.",
    },
    onOpenChange: {
      table: {
        type: {
          summary: `function`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Event handler called when the open state of the dropdown menu changes.",
    },
    modal: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "true" },
      },
      description:
        "The modality of the dropdown menu. When set to `true`, interaction with outside elements will be disabled and only menu content will be visible to screen readers.",
    },
    dir: {
      table: {
        type: {
          summary: `ltr | rtl`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "The reading direction of submenus when applicable. If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.",
    },

    // trigger
    asChild: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "false" },
      },
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },

    // portal
    forceMount: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by `Dropdown.Content` and `Dropdown.SubContent` respectively.",
    },
    container: {
      table: {
        type: {
          summary: `React.ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description: "Specify a container element to portal the content into.",
    },

    // content
    loop: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "When `true`, keyboard navigation will loop from last item to first, and vice versa.",
    },
    onCloseAutoFocus: {
      table: {
        type: {
          summary: `function | (e: Event) => void`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.",
    },
    onEscapeKeyDown: {
      table: {
        type: {
          summary: `function | (e: Event) => void`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.",
    },
    onPointerDownOutside: {
      table: {
        type: {
          summary: `function | (e: Event) => void`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.",
    },
    onFocusOutside: {
      table: {
        type: {
          summary: `function | (e: Event) => void`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Event handler called when focus moves outside the bounds of the component. It can be prevented by calling `event.preventDefault`.",
    },
    onInteractOutside: {
      table: {
        type: {
          summary: `function | (e: Event) => void`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`.",
    },
    side: {
      table: {
        type: {
          summary: `top | bottom | left | right`,
          detail: null,
        },
        defaultValue: { summary: "bottom" },
      },
      description:
        "The preferred side of the trigger to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled.",
    },
    sideOffset: {
      table: {
        type: {
          summary: `number`,
          detail: null,
        },
        defaultValue: { summary: 0 },
      },
      description: "The distance in pixels from the trigger.",
    },
    align: {
      table: {
        type: {
          summary: `start | end | center`,
          detail: null,
        },
        defaultValue: { summary: "center" },
      },
      description:
        "The preferred alignment against the trigger. May change when collisions occur.",
    },
    alignOffset: {
      table: {
        type: {
          summary: `number`,
          detail: null,
        },
        defaultValue: { summary: 0 },
      },
      description:
        "An offset in pixels from the `start` or `end` alignment options.",
    },
    avoidCollisions: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: true },
      },
      description:
        "When `true`, overrides the side and `align` preferences to prevent collisions with boundary edges.",
    },
    collisionBoundary: {
      table: {
        type: {
          summary: `Element | null | Array<Element | null>`,
          detail: null,
        },
        defaultValue: { summary: [] },
      },
      description:
        "The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.",
    },
    collisionPadding: {
      table: {
        type: {
          summary: `number | Partial<Record<Side, number>>`,
          detail: null,
        },
        defaultValue: { summary: 0 },
      },
      description:
        "The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, left: 20 }`.",
    },
    arrowPadding: {
      table: {
        type: {
          summary: `number`,
          detail: null,
        },
        defaultValue: { summary: 0 },
      },
      description:
        "The padding between the arrow and the edges of the content. If your content has `border-radius`, this will prevent it from overflowing the corners.",
    },
    sticky: {
      table: {
        type: {
          summary: `partial | always`,
          detail: null,
        },
        defaultValue: { summary: "partial" },
      },
      description:
        "The sticky behavior on the align axis. `partial` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `always` will keep the content in the boundary regardless.",
    },
    hideWhenDetached: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: true },
      },
      description:
        "Whether to hide the content when the trigger becomes fully occluded.",
    },

    // item
    disabled: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "When true, prevents the user from interacting with the item.",
    },
    onSelect: {
      table: {
        type: {
          summary: `function | (e: Event) => void`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Event handler called when the user selects an item (via mouse or keyboard). Calling `event.preventDefault` in this handler will prevent the dropdown menu from closing when selecting that item.",
    },
    textValue: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. Use this when the content is complex, or you have non-textual content inside.",
    },
    // CheckboxItem
    checked: {
      table: {
        type: {
          summary: `boolean | 'indeterminate'`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description:
        "The controlled checked state of the item. Must be used in conjunction with `onCheckedChange`.",
    },
    onCheckedChange: {
      table: {
        type: {
          summary: `function | (e: Event) => void`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description: "Event handler called when the checked state changes.",
    },

    // RadioGroup
    values: {
      name: "value",
      type: {
        summary: `string`,
        required: true,
      },
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description: "The value of the selected item in the group.",
    },
    onValueChange: {
      table: {
        type: {
          summary: `function | (v: string) => void`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description: "Event handler called when the value changes.",
    },

    // RadioItems
  },
} satisfies Meta<typeof DropdownExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
