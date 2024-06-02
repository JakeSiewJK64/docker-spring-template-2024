"use server";

import getAxiosInstance from "@/utils/axiosInstance";
import { setCookie } from "@/utils/cookiesUtils";
import { loginFormSchema } from "../hooks/form/useLoginForm";
import { z } from "zod";

export const loginFormAction = async (
  loginValues: z.infer<typeof loginFormSchema>
) => {
  const axios = getAxiosInstance();
  const res = await axios.post("/auth/authenticate", loginValues);
  const data: { token: string; email: string } = res.data;

  setCookie({ key: "token", value: data.token });

  return null;
};
