import { BrainIcon } from "../icons/LogoIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"

export const Sidebar = () => {
    return <div className="h-screen bg-white w-72 fixed border-r border-gray-100 
    border-2 left-0 top-0 p-2 flex flex-col min-h-full">
        <div className="flex flex-col items-start py-4">
            <div className="flex items-center gap-2 px-4 py-4">
                <div>
                    <BrainIcon height={40} width={40}/>
                </div>
                <div className="font-semibold text-2xl">
                    Second Brain
                </div>
            </div>
        </div>
        <div className="flex flex-col p-4 min-h-full gap-4">
            <div className="p-4 hover:bg-gray-100 rounded">
                <SidebarItem icon={<TwitterIcon />} title={"Twitter"} />
            </div>

            <div className="p-4 hover:bg-gray-100 rounded">
                <SidebarItem icon={<YoutubeIcon />} title={"YouTube"} />
            </div>
        </div>
    </div>
}