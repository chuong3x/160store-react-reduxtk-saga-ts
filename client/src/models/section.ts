import { ListParams } from "./common";

export interface Section {
  id: string;
  name: string;
  title: string;
  haveBanner: boolean;
  bannerImage: string;
  numberOfRow: number;
  isSwiper: boolean;
  path: string;
  paramToGetProducts: ListParams;
  showMoreMethod: "loadMore" | "detail";
}

export interface SectionProductsPayload {
  id: string;
  name: string;
  params: ListParams;
}
