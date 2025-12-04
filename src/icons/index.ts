type Sizes = "sm" | "md" | "lg";

export interface IconProps {
    size?: Sizes;
}

export const iconSizeVariants = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6"
}

export interface IconSizeProps {
    fill?: string;
    height: number;
    width: number;
}

export { PlusIcon } from "./PlusIcon";
export { ShareIcon } from "./ShareIcon";