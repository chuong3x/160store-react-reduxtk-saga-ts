import { RegisterPayload } from "features/auth/authSlice";
import { User } from "models/user";
import axiosAuth from "./axiosAuth";

const registerApi = {
  register(payload: RegisterPayload): Promise<User> {
    const url = "/register";
    return axiosAuth.post(url, payload);
  },
};

export default registerApi;
