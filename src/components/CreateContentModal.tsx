import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

interface CreateContentProps {
    open: boolean;
    onClose?: () => void;
    onClick?: () => void;
}

export function CreateContentModal(props: CreateContentProps) {
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
                        <Input type="text" placeholder={"Title"} />
                        <Input type="text" placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" size="sm" text="Submit" onClick={props.onClick} />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}
