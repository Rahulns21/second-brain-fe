import axios from "axios";
import { useState } from "react";
import { API } from "../config/api";
import toast from "react-hot-toast";

export function useShareBrain() {
    const [loading, setLoading] = useState(false);
    const [shareLink, setShareLink] = useState<string | null>(null);

    const shareBrain = async (share: boolean) => {
        setLoading(true);

        try {
            const token = localStorage.getItem("token") || "";

            const response = await axios.post(API.brain.shareUrl, {
                share,
            }, {
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json"
                },
                validateStatus: () => true,
            });

            // CASE 1: Backend says "you already have a link"
            if (response.data?.link) {
                setShareLink(response.data.link);
                return { existing: true, data: response.data };
            }

            // CASE 2: New link was created (message contains link)
            if (typeof response.data?.message === "string" && response.data.message.startsWith("http")) {
                setShareLink(response.data.message);
                toast.success("Link generated.")
                return { created: true, data: response.data };
            }

            // CASE 3: deletion happened (share = false)
            if (share === false) {
                setShareLink(null);
                toast.success("Share link was deleted.")
                return { deleted: true, data: response.data };
            }

            return { data: response.data };
        } catch (err: any) {
            console.log(`Error sharing brain: ${err.response?.data ?? err.message ?? err}`);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { shareBrain, shareLink, loading };
}