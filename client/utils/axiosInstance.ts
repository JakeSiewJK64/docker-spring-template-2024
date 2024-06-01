import axios from "axios";
import { getCookie } from "./cookiesUtils";

export default function getAxiosInstance() {
  const bearerToken = getCookie("token");

  return axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
      Authorization: `Bearer ${bearerToken?.value}`,
    },
  });
}
