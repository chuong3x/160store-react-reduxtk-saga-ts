import { MenuItem } from "./menuitem";
export interface Navigation {
  _id: string;
  key: string;
  title: string;
  isDropDown: boolean;
  linkTo: string;
  isActive: boolean;
}

export interface Category {
  _id: string;
  name: string;
  data: MenuItem[];
}
