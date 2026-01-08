const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

export const API_ENDPOINTS = {
  FETCH: `${BACKEND_URL}/api/fetch/`,
  NORMALIZE: `${BACKEND_URL}/api/normalize/`,
  SUBMIT: `${BACKEND_URL}/api/submit/`,
} as const;

export default API_ENDPOINTS;
