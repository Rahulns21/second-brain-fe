import { CONTENT_URL, SIGNIN_URL, SIGNUP_URL } from "./env";

export const API = {
    auth: {
        signup: SIGNUP_URL,
        signin: SIGNIN_URL
    },
    content: {
        contentUrl: CONTENT_URL,
    }
}