import axios, { AxiosRequestConfig } from 'axios';
import { apiDomain } from '../common/config';

axios.defaults.baseURL = apiDomain;

axios.interceptors.request.use((request) => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    request.headers.Authorization = `Basic ${authToken}`;
  }

  return request;
}, (error) => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) => response, (error) => Promise.reject(error));

class HTTPService {
  sendMessage(method: string, url: string, body = {}, options?: AxiosRequestConfig) {
    const request = method.toLowerCase();
    const error = 'The first sendMessage() parameter must have one of the following values: get, post, put or delete!';
    const extraOptions = options;

    switch (request) {
      case 'get':
        return this.get(url, extraOptions);
      case 'post':
        return this.post(url, body, extraOptions);
      case 'put':
        return this.put(url, body, extraOptions);
      case 'delete':
        return this.delete(url, extraOptions);
      default:
        throw new Error(error);
    }
  }

  private get = (url: string, options?: AxiosRequestConfig) => axios.get(url, options)

  private post = (url: string, body: object, options?: AxiosRequestConfig) => axios.post(url, body, options)

  private put = (url: string, body: object, options?: AxiosRequestConfig) => axios.put(url, body, options)

  private delete = (url: string, options?: AxiosRequestConfig) => axios.delete(url, options)
}

const httpService = new HTTPService();
export default httpService;
