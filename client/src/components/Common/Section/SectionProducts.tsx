import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  sectionActions,
  selectSectionProducts,
} from "features/section/sectionSlice";
import { Product, Section, SectionProductsPayload } from "models";
import { useEffect } from "react";
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
          <div key={product._id} className={styles.productItem}>
            <img
              className={styles.productItemImage}
              src={product.image}
              alt=""
            ></img>
            <div className={styles.productItemInfo}>
              <Link
                className={styles.productItemInfoName}
                to={product.product_link}
              >
                {product.name}
              </Link>
              <span
                className={styles.productItemInfoPrice}
              >{`${product.price}đ`}</span>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.productFailed}>Có lỗi khi lấy sản phẩm</div>
      )}
    </div>
  );
}
