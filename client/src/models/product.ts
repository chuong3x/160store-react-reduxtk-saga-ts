export interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  salePercent: number;
  image: string;
  product_link: string;
  description: string;
  rating: number;
  category: string;
  product_colors: ProductColor[];
  product_code: string;
  onSale: boolean;
  product_sizes: string[];
}

export interface ProductColor {
  name: string;
  image?: string;
}

export interface ProductCategory {
  _id: string;
  name: string;
}
