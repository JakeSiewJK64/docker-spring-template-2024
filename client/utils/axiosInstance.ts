import axios from "axios";
import { getCookie } from "./cookiesUtils";

export default function getAxiosInstance(url: string) {
  const bearerToken = getCookie("token");

  return axios.get(url, {
    baseURL: "http://localhost:8080/api/v1",
    headers: {
      Authorization: `Bearer ${bearerToken?.value}`,
    },
  });
}
