/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { Box, Button, Heading, Modal, Stack, Text } from "../../components";

export default {
  title: "Components/Modals & Overlay/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export const BasicExample = () => {
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
          <Stack textAlign="center">
            <Text scale={"sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Stack>
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
