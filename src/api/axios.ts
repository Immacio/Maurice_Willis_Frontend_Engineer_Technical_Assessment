import axios from 'axios';
import Config from '../Config';

const instance = axios.create({
  baseURL: Config.baseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': Config.apiKey as string,
  },
});

export default instance;
