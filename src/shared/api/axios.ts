import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  },
});

axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 201 && response.config.method === 'post') {
      console.log('Успешно создан!');
    }
    if (response.status === 200 && response.config.method === 'put') {
      console.log('Успешно сохранено!');
    }

    return response;
  },
  async function (error) {
    if (error.response.status >= 500) {
      console.log('Произошла ошибка на сервере');
    }
    if (error.response.status === 409) {
      error?.response?.data?.detail && console.log(error.response.data.detail);
    }
    if (error.response.status === 404) {
      error?.response?.data?.detail &&
        typeof error?.response?.data?.detail === 'string' &&
        console.log('[404]', error.response.data.detail);
    } else {
      return Promise.reject(error);
    }
  },
);
