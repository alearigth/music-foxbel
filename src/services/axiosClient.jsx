import axios from "axios";

import apiConfig from "./axiosConfig";

import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify({ ...params }),
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      console.log(response.data);
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
