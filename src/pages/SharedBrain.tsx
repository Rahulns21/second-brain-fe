import { Link, useParams } from "react-router-dom";
import { useSharedBrain } from "../hooks/useSharedBrain";
import { SharedCard } from "../components/SharedCard";

export default function SharedBrain() {
    const { shareLink } = useParams<{ shareLink: string }>();
    const { username, content, loading, error } = useSharedBrain(shareLink);
    console.log(content);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div>Loading shared content...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-600">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-background p-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-6 flex items-center justify-between">
                    
                    <div>
                        <div className="text-2xl font-semibold">{username ? `${username}'s Brain` : "Shared Brain"}</div>
                        <div className="text-sm text-gray-600">Public view of shared content</div>
                    </div>

                    <div>
                        <Link to={"/dashboard"} className="text-sm text-blue-600 underline">
                            Back to app
                        </Link>
                    </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                    { content.length === 0 ? (
                        <div className="col-span-3 text-center py-20 text-gray-600">
                            No public content yet
                        </div>
                    ) : (
                        content.map((item: any) => <SharedCard key={item.link} title={item.title} link={item.link} type={item.type} />)
                    )}
                </div>

            </div>
        </div>
    )
}