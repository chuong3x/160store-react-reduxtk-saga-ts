import axiosClient from "./axiosClient";

import { ListResponse, Navigation, ProductCategory } from "models";

const getNavigationApi = {
  getAll(): Promise<ListResponse<Navigation>> {
    const url = "/navigations";
    return axiosClient.get(url);
  },
  getCategory(): Promise<ListResponse<ProductCategory>> {
    const url = "/categories";
    return axiosClient.get(url);
  },
};

export default getNavigationApi;
