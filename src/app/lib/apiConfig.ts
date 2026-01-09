const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
// const LOCAL_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_ENDPOINTS = {
  FETCH: `${BACKEND_URL}/api/data`,
  NORMALIZE: `${BACKEND_URL}/api/normalize/`,
  SUBMIT: `${BACKEND_URL}/api/submit/`,
} as const;

export default API_ENDPOINTS;

// export const API_ENDPOINTS = {
//   FETCH: `${LOCAL_API_URL}/api/data`,
//   NORMALIZE: `${LOCAL_API_URL}/api/normalize/`,
//   SUBMIT: `${LOCAL_API_URL}/api/submit/`,
// } as const;
// export default API_ENDPOINTS;