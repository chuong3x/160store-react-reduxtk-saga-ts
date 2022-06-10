import {
  LoginPayload,
  RefreshPayload,
  SuccessResponse,
} from "features/auth/authSlice";
import axiosAuth from "./axiosAuth";

const loginApi = {
  login(payload: LoginPayload): Promise<SuccessResponse> {
    const url = "/login";
    return axiosAuth.post(url, payload);
  },
  refreshToken(payload: RefreshPayload): Promise<SuccessResponse> {
    const url = "/refresh";
    return axiosAuth.post(url, payload);
  },
};

export default loginApi;
