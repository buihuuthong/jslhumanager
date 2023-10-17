import axios from "axios";
const API_ENDPOINT = "https://sheet.best/api/sheets/23fcb502-835a-4db3-a919-2b0e493eff85";

const AxiosClient = axios.create({
  baseURL: API_ENDPOINT,
  responseType: "json",
  timeout: 50000,
});

AxiosClient.interceptors.response.use(
  function (response) {
    return response.data ?? response;
  },
  function (error) {
    console.log("Error:", error.response);
    return Promise.reject(error);
  }
);

export default AxiosClient;
