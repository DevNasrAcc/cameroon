import { create } from "apisauce";
import { BASE_URL, API_URL_PREFIX } from "../constants/Network";

export const RestClient = create({
  baseURL: `${BASE_URL}${API_URL_PREFIX}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "",
  },
  timeout: 30000,
});

export const RestClientFile = create({
  baseURL: `${BASE_URL}${API_URL_PREFIX}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  timeout: 30000,
});
