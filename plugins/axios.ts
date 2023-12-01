import axios from 'axios';

export default defineNuxtPlugin(() => {
  const {
    public: { apiUrl },
  } = useRuntimeConfig();
  const $axios = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    xsrfHeaderName: 'X-XSRF-TOKEN',
    xsrfCookieName: 'XSRF-TOKEN',
    headers: {
      Accept: 'application/json',
    },
  });

  return {
    provide: {
      axios: $axios,
    },
  };
});
