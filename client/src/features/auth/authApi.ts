import axiosInstance from "@/lib/axiosInstance";

const BASE_URL = "/api/auth";

export const googleAuth = async (token: any) => {
  return (await axiosInstance.post(`${BASE_URL}/google`, token)).data;
};

export const logout = async () => {
  return (await axiosInstance.post(`${BASE_URL}/logout`)).data;
};
