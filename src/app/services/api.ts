import axios from 'axios';

import { localStorageKeys } from '../config/local-storage-keys';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (accessToken && !config.url?.includes('/auth/')) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export { api };
