import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config/api";

export type SharedContentItem = {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube" | string;
};

export function useSharedBrain(hash?: string) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [content, setContent] = useState<SharedContentItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!hash) {
      setUsername(null);
      setContent([]);
      setError("No share link provided");
      return;
    }

    let cancelled = false;
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Build the URL we'll call and log it
        const url = API.brain.view(hash);
        console.debug("[useSharedBrain] fetching", { hash, url });

        const resp = await axios.get(url);
        console.debug("[useSharedBrain] response status:", resp.status, resp.data);

        if (cancelled) return;

        // If backend returned username + content as expected
        if (resp && resp.data) {
          setUsername(resp.data.username ?? null);
          setContent(Array.isArray(resp.data.content) ? resp.data.content : []);
          setError(null);
        } else {
          setUsername(null);
          setContent([]);
          setError("Invalid response from server");
        }
      } catch (err: any) {
        if (cancelled) return;
        console.error("[useSharedBrain] fetch error:", err?.response ?? err);
        const status = err?.response?.status;
        if (status === 404) {
          setError("Link not found or has been removed.");
        } else {
          setError(err?.response?.data?.message ?? "Failed to fetch shared content.");
        }
        setUsername(null);
        setContent([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [hash]);

  return { username, content, loading, error };
}
