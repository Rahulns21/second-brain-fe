import { useDeleteContent } from "../hooks/useDeleteContent";
import { useYoutubeUrl } from "../hooks/useYoutubeUrl";
import { OpenIcon } from "../icons/OpenIcon";
import { TrashIcon } from "../icons/TrashIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

export type ContentType = "twitter" | "youtube";

interface CardProps {
    title: string;
    link: string;
    type: ContentType;
    contentId: string;
    onDelete?: () => void;
}

export function Card(props: CardProps) {
    const youtubeEmbedUrl = useYoutubeUrl(props.link);
    const { deleteContent } = useDeleteContent();

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this content?")) {
            try {
                await deleteContent(props.contentId);
                props.onDelete?.(); // Call refresh if provided
            } catch (error) {
                alert("Failed to delete content");
            }
        }
    }

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
                            <OpenIcon />
                        </a>
                    </div>
                    <div className="text-gray-icon cursor-pointer" onClick={handleDelete}>
                        <TrashIcon />
                    </div>
                </div>
            </div>

            <div className="w-full text-white">

                {props.type === "youtube" && <iframe className="w-full" src={youtubeEmbedUrl} title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {props.type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={props.link.replace("x", "twitter")}></a> 
                </blockquote>}
                
            </div>
        </div>

    </div>
}