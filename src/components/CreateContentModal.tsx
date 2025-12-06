import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { API } from "../config/api";
import axios from "axios";
import { Dropdown } from "./DropdownMenu";

interface CreateContentProps {
    open: boolean;
    onClose?: () => void;
}

type ContentType = "youtube" | "twitter";

const contentTypeOptions = [
    { value: "youtube", label: "YouTube" },
    { value: "twitter", label: "Twitter" },
];

export function CreateContentModal(props: CreateContentProps) {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState<ContentType | undefined>(undefined);
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);

    const trimmedTitle = title.trim();
    const trimmedLink = link.trim();
    const contentType = type;
    const isDisabled = !trimmedTitle || !trimmedLink || !contentType;

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(API.content.addContent, {
            title,
            link,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
        alert("Content added successfully");
    }

    return <div>
        {props.open && <div className="w-screen h-screen fixed backdrop-blur-sm
        top-0 left-0 bg-black/10 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded flex flex-col gap-4">
                    <div className="inline-flex items-end cursor-pointer self-end"
                        onClick={props.onClose}>
                        <CrossIcon />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Input ref={titleRef} type="text" placeholder={"Title"} value={title} onChange={(e) => setTitle(e.target.value)} />
                        <Input ref={linkRef} type="text" placeholder={"Link"} value={link} onChange={(e) => setLink(e.target.value)} />
                        <Dropdown placeholder="Select content type" 
                        options={contentTypeOptions} 
                        onChange={(value) => setType(value as ContentType)}
                        value={type} />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" size="sm" text="Submit" fullWidth={true} onClick={addContent} disabled={isDisabled} />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}
