import { CONTENT_URL, SHARE_URL, SIGNIN_URL, SIGNUP_URL } from "./env";

export const API = {
    auth: {
        signup: SIGNUP_URL,
        signin: SIGNIN_URL
    },
    content: {
        contentUrl: CONTENT_URL,
    },
    brain: {
        shareUrl: SHARE_URL,
        view: (hash: string) => {
            // safe derivation: remove a trailing '/share' if present
            const base = typeof SHARE_URL === "string" ? SHARE_URL.replace(/\/share$/, "") : SHARE_URL;
            return `${base}/${hash}`;
        },
    }
}