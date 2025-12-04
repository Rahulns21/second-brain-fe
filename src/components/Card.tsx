import { ShareIcon } from "../icons";
import { TrashIcon } from "../icons/TrashIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

type ContentType = "twitter" | "youtube";

interface CardProps {
    title: string;
    link: string;
    type: ContentType
}

export function Card(props: CardProps) {
    return <div className="px-8 py-4 bg-white rounded-md 
    border-gray-outline max-w-96 border">
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="text-gray-500 pr-4">
                        {props.type === "youtube" && <YoutubeIcon />}
                        {props.type === "twitter" && <TwitterIcon />}
                    </div>
                    <div className="font-medium">
                        {props.title.toSentenceCase()}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="pr-2 text-gray-icon cursor-pointer">
                        <a href={props.link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div className="text-gray-icon cursor-pointer">
                        <TrashIcon />
                    </div>
                </div>
            </div>

            <div className="w-full text-white">

                {props.type === "youtube" && <iframe className="w-full" src={props.link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {props.type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={props.link.replace("x", "twitter")}></a> 
                </blockquote>}
                
            </div>
        </div>

    </div>
}