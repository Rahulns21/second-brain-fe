import { cloneElement, type ReactElement } from "react"
import type { IconProps } from "../icons";

type Variants = "primary" | "secondary";

type Sizes = "sm" | "md" | "lg";

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center gap-2 cursor-pointer";

interface ButtonProps {
    variant: Variants,
    size: Sizes,
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void
}

const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
};

const sizeClasses = {
    "sm": "px-4 py-2",
    "md": "px-6 py-3",
    "lg": "px-8 py-4"
};

export const Button = (props: ButtonProps) => {
    return <button className={`${defaultStyles} ${variantClasses[props.variant]} ${sizeClasses[props.size]}`}>
        {props.startIcon && cloneElement(props.startIcon as ReactElement<IconProps>, { size: props.size })}
        {props.text}
        {props.endIcon && cloneElement(props.endIcon as ReactElement<IconProps>, { size: props.size })}
    </button>
};