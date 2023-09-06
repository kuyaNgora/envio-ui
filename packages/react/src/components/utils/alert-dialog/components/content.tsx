import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { contentStyle } from "../utils/styled";
import { Button } from "../../../inputs";

export interface ContentProps
  extends AlertDialogPrimitive.AlertDialogContentProps {
  className?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
  actionText?: string;
  cancelText?: string;
  loading?: boolean;
  cancelDisabled?: boolean;
  actionDisabled?: boolean;
}

const ContentDiv = contentStyle(AlertDialogPrimitive.Content);

const Content: React.FC<ContentProps> = ({
  className,
  children,
  onCancel,
  onSubmit,
  cancelText,
  actionText,
  loading,
  cancelDisabled,
  actionDisabled,
  ...rest
}) => {
  return (
    <ContentDiv {...rest}>
      {children}

      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
        {cancelText && (
          <AlertDialogPrimitive.Cancel asChild>
            <Button
              size="sm"
              loading={loading}
              variant="outline-secondary"
              onClick={onCancel}
              disabled={cancelDisabled}
            >
              {cancelText}
            </Button>
          </AlertDialogPrimitive.Cancel>
        )}

        {actionText && (
          <AlertDialogPrimitive.Action asChild>
            <Button
              size="sm"
              loading={loading}
              variant="outline-danger"
              onClick={onSubmit}
              disabled={actionDisabled}
            >
              {actionText}
            </Button>
          </AlertDialogPrimitive.Action>
        )}
      </div>
    </ContentDiv>
  );
};

export default Content;
