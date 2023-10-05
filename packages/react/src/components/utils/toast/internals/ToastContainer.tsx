import { Portal } from "@radix-ui/react-portal";
import React from "react";
import Toast from "../Toast";
import { ToastSettings } from "../types";
import ToastContext from "./ToastContext";
import { Box } from "../../../layout";

interface ToastContainerProps {
  toasts?: ToastSettings[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  const { removeToast } = React.useContext(ToastContext);

  return (
    <Portal>
      <Box
        display="block"
        position="fixed"
        bottom={0}
        right={24}
        zIndex={9999999}
      >
        {toasts?.map(
          ({ id, message, onRemove: _onRemove, status, ...rest }) => {
            return (
              <Toast
                key={id}
                id={id}
                message={message}
                variant={status}
                onRemove={() => removeToast(id)}
                {...rest}
              />
            );
          }
        )}
      </Box>
    </Portal>
  );
};

export default ToastContainer;
