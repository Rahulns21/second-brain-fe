import { cloneElement, type ReactElement } from "react";
import type { IconProps } from "../icons";

type Variants = "primary" | "secondary";
type Sizes = "sm" | "md" | "lg";

interface ButtonProps {
  variant: Variants;
  size: Sizes;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const base = "rounded-md font-light flex items-center gap-2 justify-center transition-all active:scale-[0.98]";
const enabledCursor = "cursor-pointer";
const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

const variantClasses: Record<Variants, string> = {
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-purple-200 text-purple-600",
};

const sizeClasses: Record<Sizes, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3",
  lg: "px-8 py-4 text-lg",
};

export const Button = (props: ButtonProps) => {
  const { variant, size, fullWidth, disabled } = props;

  return (
    <button
      type="button"
      disabled={disabled} // <-- actual disabled attribute
      onClick={disabled ? undefined : props.onClick} // extra safety
      aria-disabled={disabled}
      className={`
        ${base}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? disabledStyles : enabledCursor}
      `}
    >
      {props.startIcon && cloneElement(props.startIcon as ReactElement<IconProps>, { size: props.size })}
      {props.text}
      {props.endIcon && cloneElement(props.endIcon as ReactElement<IconProps>, { size: props.size })}
    </button>
  );
};
