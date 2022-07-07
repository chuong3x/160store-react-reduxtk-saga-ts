import axiosClient from "./axiosClient";

import { ListResponse, Navigation, ProductCategory } from "models";

const getLocationApi = {
  getAll(): Promise<ListResponse<Navigation>> {
    const url = "/locations";
    return axiosClient.get(url);
  },
};

export default getLocationApi;
