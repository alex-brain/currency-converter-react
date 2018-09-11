import CONFIG from '../config.js';
import axios from 'axios';

const http = axios.create({
  baseURL: CONFIG.baseUrl
});

export default http;
