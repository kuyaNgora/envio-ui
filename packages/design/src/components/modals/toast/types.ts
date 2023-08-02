export type ToastVariants =
  | "default"
  | "error"
  | "success"
  | "info"
  | "warning";

export interface ToastSettings {
  id?: string;
  title?: string;
  message: string;
  status?: ToastVariants;
  leftIcon?: React.ReactNode;
  dismissible?: boolean;
  dismissAfter?: number;
  actionText?: string;
  onAction?: () => void;
  onRemove?: () => void;
  allowHTML?: boolean;
}

export interface ToastContextType {
  toasts?: ToastSettings[];
  addToast: (settings: ToastSettings) => ToastSettings;
  removeToast: (id?: string) => void;
}
