import clsx from "clsx";
import styles from "./Collection.module.scss";

export default function Content() {
  return (
    <section className={clsx(styles.collection, styles.collectionNew)}>
      <h2 className={styles.title}>
        <a href="a" className={styles.titleText}>
          SẢN PHẨM MỚI
        </a>
      </h2>
      <div className={styles.product}>
        <div className={styles.productItem}>
          <img
            className={styles.productItemImage}
            src="./assets/images/products/img_0786_038bb2e6476f4bd1bbe74e58d711f66a_large.webp"
          ></img>
          <a className={styles.productItemName} href="a">
            Quần Short Jeans ICON DENIM Cargo
          </a>
          <span className={styles.productItemPrice}>380,000đ</span>
        </div>
        <div className={styles.productItem}>
          <img
            className={styles.productItemImage}
            src="./assets/images/products/img_4695_17d1e759b71442d09348a1df7e9d9f7c_large.webp"
          ></img>
          <a className={styles.productItemName} href="a">
            Quần Short Jeans ICON DENIM Cargo
          </a>
          <span className={styles.productItemPrice}>380,000đ</span>
        </div>
        <div className={styles.productItem}>
          <img
            className={styles.productItemImage}
            src="./assets/images/products/img_1070_164b5d47bb954ff5865fb4ac422e4be3_large.webp"
          ></img>
          <a className={styles.productItemName} href="a">
            Quần Short Jeans ICON DENIM Cargo
          </a>
          <span className={styles.productItemPrice}>380,000đ</span>
        </div>
        <div className={styles.productItem}>
          <img
            className={styles.productItemImage}
            src="./assets/images/products/img_1166_d0e7ae9064a643728f1c07e4b4f159da_large.webp"
          ></img>
          <a className={styles.productItemName} href="a">
            Quần Short Jeans ICON DENIM Cargo
          </a>
          <span className={styles.productItemPrice}>380,000đ</span>
        </div>
        <div className={styles.productItem}>
          <img
            className={styles.productItemImage}
            src="./assets/images/products/img_7198_8451c90a2b1c4113b92364e4237ec04d_large.webp"
          ></img>
          <a className={styles.productItemName} href="a">
            Quần Short Jeans ICON DENIM Cargo
          </a>
          <span className={styles.productItemPrice}>380,000đ</span>
        </div>
        <div className={styles.productItem}>
          <img
            className={styles.productItemImage}
            src="./assets/images/products/img_8488_8b680000fcaf456ab3c6dde53ba81186_large.webp"
          ></img>
          <a className={styles.productItemName} href="a">
            Quần Short Jeans ICON DENIM Cargo
          </a>
          <span className={styles.productItemPrice}>380,000đ</span>
        </div>
      </div>
      <div className={styles.expland}>
        <a className={styles.explandButton} href="/">
          XEM THÊM
        </a>
      </div>
    </section>
  );
}
