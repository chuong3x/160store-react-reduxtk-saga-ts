import styles from "./Gallery.module.scss";
export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.list}>
        <div className="gallery-list-item">
          <a href="" className="gallery-list-item__link">
            <img
              className="gallery-list-item__link-image"
              src="./assets/images/products/img_9073_7163f41dafb74edc85e2bd76bbd59f7d_compact.webp"
              alt=""
            />
          </a>
        </div>
        <div className="gallery-list-item">
          <a href="" className="gallery-list-item__link">
            <img
              className="gallery-list-item__link-image"
              src="./assets/images/products/img_9077_06f4f49a16ba4d038d55d7b5088bd9b1_compact.webp"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="gallery-view">
        <div className="gallery-view-item">
          <img
            className="gallery-view-item__image"
            src="./assets/images/products/img_9071_304bc41a913647c8acc7c9a3fe8a841c_master.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
