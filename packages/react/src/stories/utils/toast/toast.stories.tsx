import { action } from "@storybook/addon-actions";
import React from "react";
import { Box, Button, useToast } from "../../../components";

export default {
  title: "Components/Utils/Toast",
};

export const Example = () => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { addToast } = useToast();

  return (
    <Box sx={{ "> :not([hidden]) ~ :not([hidden])": { marginLeft: "md" } }}>
      <Button
        ref={ref}
        onClick={() => {
          addToast({
            title: "Default",
            message: "Single line",
            status: "warning",
          });
        }}
      >
        Single line
      </Button>

      <Button
        onClick={() =>
          addToast({
            message: "Single line with action",
            actionText: "Action",
            onAction: () => action("click"),
          })
        }
      >
        Single line with action
      </Button>

      <Button
        onClick={() =>
          addToast({
            message: "Single line",
            dismissible: true,
          })
        }
      >
        Single line dismissable
      </Button>

      <Button
        onClick={() =>
          addToast({
            message:
              "Multiple line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi enim, nisl in.",
          })
        }
      >
        Multiple line
      </Button>

      <Button
        onClick={() =>
          addToast({
            message:
              "Multiple line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi enim, nisl in.",
            actionText: "Action",
            onAction: () => action("click"),
          })
        }
      >
        Multiple line with action
      </Button>

      <Button
        onClick={() =>
          addToast({
            message: "Error",
            status: "error",
            dismissAfter: 5000,
          })
        }
      >
        Error with action
      </Button>
    </Box>
  );
};
