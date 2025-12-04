import type { ReactElement } from "react"

interface SidebarItemProps {
    icon: ReactElement;
    title: string;
}

export const SidebarItem = (props: SidebarItemProps) => {
    return <div className="flex items-center gap-2 cursor-pointer">
        {props.icon} {props.title}
    </div>
}