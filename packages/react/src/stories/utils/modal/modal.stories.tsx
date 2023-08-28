/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { Box, Button, Heading, Modal, Stack, Text } from "../../../components";

export default {
  title: "Components/Utils/Modal",
  component: Modal,
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
    isOpen: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    noBackdrop: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    backdropBlur: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: true },
      },
    },
    disableOverlayClick: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    enableFocusTrap: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    labelledById: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    maxWidth: {
      table: {
        type: {
          summary: `string | number`,
          detail: null,
        },
        defaultValue: { summary: "500px" },
      },
    },
    width: {
      table: {
        type: {
          summary: `string | number`,
          detail: null,
        },
        defaultValue: { summary: "100%" },
      },
    },
    maxHeight: {
      table: {
        type: {
          summary: `string | number`,
          detail: null,
        },
        defaultValue: { summary: "calc(100% - 24vmin)" },
      },
    },
    height: {
      table: {
        type: {
          summary: `string | number`,
          detail: null,
        },
        defaultValue: { summary: "100vh" },
      },
    },
    overflow: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "hidden" },
      },
    },
    onClose: {
      table: {
        type: {
          summary: `function`,
          detail: null,
        },
        defaultValue: { summary: "() => void" },
      },
    },
    children: {
      table: {
        type: {
          summary: `ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    // ================= headers =================
    size: {
      table: {
        type: {
          summary: `sm | md`,
          detail: null,
        },
        defaultValue: { summary: "sm" },
      },
    },
    title: {
      table: {
        type: {
          summary: `ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    centerTitle: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    backButton: {
      table: {
        type: {
          summary: `ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    actions: {
      table: {
        type: {
          summary: `ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    closeButton: {
      table: {
        type: {
          summary: `ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    divider: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },

    // =========== footer =============
    caption: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    fluid: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
  },
};

export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the modal.</Text>
      <Button variant="primary" size="lg" onClick={() => setIsOpen(!isOpen)}>
        Toggle Modal
      </Button>

      <Modal
        labelledById="stories-title"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Modal.Header
          closeButton
          onClose={() => setIsOpen(false)}
          size="sm"
          divider
          title={
            <Heading scale="xxs" id="stories-title" textAlign="center">
              Title
            </Heading>
          }
        />

        <Modal.Body>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text scale={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Modal.Body>

        <Modal.Footer
          size="lg"
          caption="lorem ipsum"
          divider
          actions={
            <Stack direction="horizontal" spacing="xs" flex={1}>
              <Button block size="md" onClick={() => setIsOpen(false)}>
                Close
              </Button>
              <Button block variant="primary" size="md">
                Confirm
              </Button>
            </Stack>
          }
        />
      </Modal>
    </Box>
  );
};
