import { LoginPayload, LoginResponse } from "features/auth/authSlice";
import axiosClient from "./axiosClient";

const loginApi = {
  login(payload: LoginPayload): Promise<LoginResponse> {
    const url = "/login";
    return axiosClient.post(url, payload);
  },
};

export default loginApi;
