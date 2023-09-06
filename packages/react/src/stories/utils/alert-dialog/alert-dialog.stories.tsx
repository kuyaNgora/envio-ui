/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { AlertDialog, Button } from "../../../components";

export default {
  title: "Components/Utils/Alert Dialog",
  component: AlertDialog,
};

export const Example = () => {
  const [show, setShow] = React.useState(false);
  return (
    <AlertDialog open={show}>
      <AlertDialog.Trigger asChild>
        <Button onClick={() => setShow(true)}>action</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content
          cancelText="Cancel"
          actionText="Yes, delete account"
          onCancel={() => setShow(false)}
          onSubmit={() => console.log("aksi")}
        >
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Description>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
};
