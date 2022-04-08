import axiosClient from "./axiosClient";

import { ListResponse, Slide } from "models";

const getSlidesApi = {
  getSlides(): Promise<ListResponse<Slide>> {
    const url = "/slides";
    return axiosClient.get(url);
  },
};

export default getSlidesApi;
