import Gallery from "../Gallery";
import styles from "./Detail.module.scss";
import { Image, Product } from "../../../models";
import ProductInfo from "../ProductInfo";

const images: Image[] = [
  {
    product_id: "1",
    image_id: "1",
    src: "https://product.hstatic.net/1000253775/product/img_0794_aaedd98cf82e4615b5360dbc302cb752_master.jpg",
  },
  {
    product_id: "1",
    image_id: "2",
    src: "https://product.hstatic.net/1000253775/product/img_6478_fc15ab6eaefd4236ade573b6ae5e64a9_master.jpg",
  },
  {
    product_id: "1",
    image_id: "3",
    src: "https://product.hstatic.net/1000253775/product/img_0798_24c9248b9eed430b84d5f2596bf97d5c_master.jpg",
  },
];

const product: Product = {
  _id: "62ab30221a01829ee1152cdd",
  brand: "Charlie Super",
  name: "Mắt Kính ICON DENIM Aviator Light-Frame",
  price: 380000,
  image:
    "https://res.cloudinary.com/hanco3x/image/upload/v1648826569/106store/products/kinh-trang_ypx4rp.webp",
  product_link: "mat kinh icon denim aviator light frame",
  description:
    "ICON DENIM Aviator Light-Frame Glasses //\n\nNgoài công dụng bảo vệ mắt khỏi khói bụi và thời tiết, thì thiết kế lần này có sự cải tiến phần gọng kính chắc chắn,form kính ôm vào sống mũi làm nổi bật đường nét trên gương mặt, tăng sự mềm mại bằng miếng đệm mũi cao su nên ae yên tâm về độ thoải mái khi đeo.\n",
  rating: 5.0,
  category: "kinh",
  product_colors: [
    { name: "red", image: "" },
    { name: "white", image: "" },
  ],
  product_code: "KIID0013-01",
  onSale: true,
  salePercent: 20,
  product_sizes: ["S", "M", "L"],
};
export default function Detail() {
  return (
    <div className={styles.detail}>
      <div className={styles.wrapper}>
        <Gallery images={images} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}
