import { User } from "models";
import axiosAuth from "./axiosAuth";

const logoutApi = {
  logout(payload: User): Promise<any> {
    const url = "/logout";
    return axiosAuth.post(url, payload);
  },
};

export default logoutApi;
