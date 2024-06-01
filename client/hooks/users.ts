import getAxiosInstance from "@/utils/axiosInstance";

export async function useGetAllUsers() {
  const res = await getAxiosInstance("/users").catch((err) => {
    return {
      data: null,
      statusText: "Error",
    };
  });
  const data = res.data;
  const status = res.statusText;

  return { data, status };
}
