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
        viewUrl: (hash: string) => `${API.brain.viewUrl}/${hash}`
    }
}