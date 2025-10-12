import { axios } from "@/utils";

export const login = (credentials: any) =>
  axios.post("/auth/login", credentials);

export const refreshToken = () => axios.get("/auth/refreshToken");

export const logout = () => axios.get("/auth/logout");
