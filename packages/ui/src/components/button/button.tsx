import { ButtonBaseProps } from "./button.type";

const Button = (props: ButtonBaseProps) => {
  const {
    variant = "contained",
    color = "primary",
    size = "medium",
    fullWidth = false,
    disabled = false,
    loading = false,
    startIcon,
    endIcon,
    children,
    ...restProps
  } = props;

  return (
    <button
      {...restProps}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
