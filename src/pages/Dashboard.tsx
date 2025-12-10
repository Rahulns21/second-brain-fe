import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card, type ContentType } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon, ShareIcon } from "../icons";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { useSearchParams } from "react-router-dom";
import { useShareBrain } from "../hooks/useShareBrain";
import toast from "react-hot-toast";

interface ContentProps {
    _id: string;
    type: ContentType;
    link: string;
    title: string;
    contentId: string;
}

function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const activeFilter = searchParams.get('filter') as ContentType | null;
    const { shareBrain, shareLink, loading } = useShareBrain();

    const { contents, refresh } = useContent();

    useEffect(() => {
        refresh();
    }, [modalOpen]);

    // Filter contents based on URL parameter
    const filteredContents = activeFilter
        ? contents.filter((c: ContentProps) => c.type === activeFilter)
        : contents;

    // Dynamic title based on filter
    const getTitle = () => {
        if (activeFilter === "twitter")
            return "Twitter Posts";

        if (activeFilter === "youtube")
            return "YouTube Posts";

        return "All Notes";
    }

    return (
        <div className="bg-gray-background min-h-screen ">
            <div>
                <Sidebar />
            </div>
            <div className="px-4 ml-72 min-h-screen flex flex-col gap-4">
                <CreateContentModal open={modalOpen} onClose={() => {
                    setModalOpen(false);
                }} />

                <div className="flex items-center justify-between w-full px-2">
                    <div className="text-2xl font-semibold p-4">
                        {getTitle()}
                    </div>

                    <div className="flex items-center gap-2 p-8">
                        <Button variant="secondary" size="md"
                            text={loading ? "Working..." : shareLink ? "Unshare Brain" : "Share Brain"}
                            startIcon={<ShareIcon />} onClick={() => shareBrain(!shareLink)} />
                        <Button variant="primary" size="md" text="Add Content" startIcon={<PlusIcon />} onClick={() => {
                            setModalOpen(true);
                        }} />
                    </div>
                </div>

                {shareLink && (
                    <div className="mt-3 flex items-center gap-2 p-3 rounded">
                        <span className="text-purple-600">{shareLink}</span>
                        <button
                            className="text-purple-600 underline cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText(shareLink);
                                toast.success("Link copied to clipboard.");
                            }}
                        >
                            Copy
                        </button>
                    </div>
                )}

                <div className="flex-1">
                    {contents.length === 0 ? (
                        <div className="h-full flex items-center justify-center text-2xl text-black">
                            Nothing to show here
                        </div>
                    ) : (
                        <div className="grid grid-cols-4 gap-4 py-2">
                            {filteredContents.map((props: ContentProps) => (
                                <Card
                                    key={props.link}
                                    type={props.type}
                                    link={props.link}
                                    title={props.title}
                                    contentId={props._id}
                                    onDelete={() => refresh()}
                                />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Dashboard;
