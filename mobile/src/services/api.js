import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.11.104:3333'
});

export default api;