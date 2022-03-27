import axiosClient from "./axiosClient";

import { ListResponse, Product, ListParams, ProductCategory } from "models";

const getProductApi = {
  getAll(): Promise<ListResponse<Product>> {
    const url = "/products";
    return axiosClient.get(url);
  },
};

export default getProductApi;

