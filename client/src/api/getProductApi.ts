import axiosClient from "./axiosClient";

import {
  ListResponse,
  Product,
  ListParams,
  SectionProductsPayload,
} from "models";

const getProductApi = {
  getAll(params: ListParams): Promise<ListResponse<Product>> {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  getByCategory({
    name,
    params,
  }: SectionProductsPayload): Promise<ListResponse<Product>> {
    const url = `/collection/${name}`;
    return axiosClient.get(url, { params });
  },
};
export default getProductApi;
