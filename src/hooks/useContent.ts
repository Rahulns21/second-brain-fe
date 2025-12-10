import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../config/api";

export function useContent() {
    const [contents, setContents] = useState([]);

    function refresh() {
        axios.get(`${API.content.contentUrl}`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => {
            setContents(response.data.content);
        });
    }

    useEffect(() => {
        refresh();
        let interval = setInterval(() => {
            refresh();
        }, 10 * 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return {contents, refresh}  ;
}