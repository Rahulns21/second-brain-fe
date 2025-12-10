import axios from "axios";
import { API } from "../config/api";
import { useState } from "react";

export function useDeleteContent() {
    const [loading, setLoading] = useState(false);

    const deleteContent = async (contentId: string) => {
        setLoading(true);
        try {
            await axios.delete(API.content.contentUrl, {
                data: {
                    contentId
                }, 
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            })
        } catch (err) {
            console.log(`Failed to delete content: ${err}`)
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { deleteContent, loading };
}