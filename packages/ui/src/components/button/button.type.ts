export type ButtonVariant = "contained" | "outlined" | "ghost" | "link";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonBaseProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export type ButtonProps = ButtonBaseProps;
