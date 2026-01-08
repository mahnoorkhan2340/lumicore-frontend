const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const BACKEND_RENDER_URL = process.env.NEXT_PUBLIC_BACKEND_RENDER_URL;

export const API_ENDPOINTS = {
  FETCH: `${BACKEND_URL}/api/data`,
  NORMALIZE: `${BACKEND_RENDER_URL}/api/normalize/`,
  SUBMIT: `${BACKEND_URL}/api/submit/`,
} as const;

export default API_ENDPOINTS;
