import { RegisterPayload } from "features/auth/authSlice";
import { User } from "models/user";
import axiosClient from "./axiosClient";

const registerApi = {
  register(payload: RegisterPayload): Promise<User> {
    const url = "/register";
    return axiosClient.post(url, payload);
  },
};

export default registerApi;
