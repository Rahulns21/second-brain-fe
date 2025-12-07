import type { ReactElement } from "react"

interface SidebarItemProps {
    icon: ReactElement;
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

export const SidebarItem = (props: SidebarItemProps) => {
    return <div className={`flex items-center gap-2 cursor-pointer`} onClick={props.onClick}>
        {props.icon} <span>{props.title}</span>
    </div>
}