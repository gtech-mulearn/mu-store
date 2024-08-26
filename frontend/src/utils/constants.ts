export const IN_DEVELOPMENT = import.meta.env.MODE === 'development';
export const VITE_BACKEND_URL = IN_DEVELOPMENT ? 'https://dev.mulearn.org' : import.meta.env.VITE_BACKEND_URL