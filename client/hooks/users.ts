import getAxiosInstance from "@/utils/axiosInstance";

export async function useGetAllUsers() {
  const res = await getAxiosInstance("/users");
  const data = res.data;
  const status = res.statusText;

  return { data, status };
}
