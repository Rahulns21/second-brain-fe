import { ADD_CONTENT_URL, SIGNIN_URL, SIGNUP_URL } from "./env";

export const API = {
    auth: {
        signup: SIGNUP_URL,
        signin: SIGNIN_URL
    },
    content: {
        addContent: ADD_CONTENT_URL
    }
}