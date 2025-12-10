import { useNavigate, useSearchParams } from "react-router-dom"
import { BrainIcon } from "../icons/LogoIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"
import { DashboardIcon } from "../icons/DashboardIcon"

export const Sidebar = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const activeFilter = searchParams.get('filter') ?? 'all';

    const itemClass = (isActive: boolean) => `p-4 rounded cursor-pointer transition ${isActive ? "bg-purple-100 text-purple-600" : "hover:bg-gray-100"}`
 
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
            {/* All content */}
            <div className={itemClass(activeFilter === "all")}>
                <SidebarItem icon={<DashboardIcon />} 
                title={"All Content"} 
                onClick={() => {
                    navigate('/dashboard'); 
                }} />
            </div>

            <div className={itemClass(activeFilter === "twitter")}>
                <SidebarItem icon={<TwitterIcon />} 
                title={"Twitter"} 
                onClick={() => {
                    navigate('/dashboard?filter=twitter');
                }} />
            </div>

            <div className={itemClass(activeFilter === "youtube")}>
                <SidebarItem icon={<YoutubeIcon />} 
                title={"YouTube"} 
                onClick={() => {
                    navigate('/dashboard?filter=youtube');
                }} />
            </div>
        </div>
    </div>
}