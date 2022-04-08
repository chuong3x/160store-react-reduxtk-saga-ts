export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  product_link: string;
  description: string;
  rate: number;
  product_color: [];
}

export interface ProductCategory {
  _id: string;
  name: string;
}
