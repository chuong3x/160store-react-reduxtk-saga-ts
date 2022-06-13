import { Product } from "models";
import { Link } from "react-router-dom";

import styles from "./Section.module.scss";

interface PropsSectionProducts {
  products: Product[];
}

export default function SectionProducts({ products }: PropsSectionProducts) {
  return (
    <div className={styles.product}>
      {products ? (
        products.map((product) => (
          <Link
            key={product._id}
            className={styles.productItem}
            to={`/products/${product.product_link}`}
          >
            <div className={styles.productItemMedia}>
              <img
                className={styles.productItemImage}
                src={product.image}
                alt=""
              ></img>
            </div>
            <div className={styles.productItemInfo}>
              <div className={styles.productItemInfoName}>{product.name}</div>
              <span
                className={styles.productItemInfoPrice}
              >{`${product.price}đ`}</span>
            </div>
          </Link>
        ))
      ) : (
        <div className={styles.productFailed}>Có lỗi khi lấy sản phẩm</div>
      )}
    </div>
  );
}
