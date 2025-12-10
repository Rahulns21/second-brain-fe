export const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:3000";
export const SIGNUP_URL = `${BASE_URL}/api/v1/signup`;
export const SIGNIN_URL = `${BASE_URL}/api/v1/signin`;
export const CONTENT_URL = `${BASE_URL}/api/v1/content`;
export const SHARE_URL = `${BASE_URL}/api/v1/brain/share`;
export const VIEW_URL = `${BASE_URL}/api/v1/brain`;