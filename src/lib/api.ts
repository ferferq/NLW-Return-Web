import axios from 'axios';
import { config } from '../config/common';

const { URL_API } = config;

export const api = axios.create({
  baseURL: URL_API,
});
