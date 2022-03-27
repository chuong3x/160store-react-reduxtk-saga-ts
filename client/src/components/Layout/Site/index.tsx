import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Site.module.scss";

export default function Site() {
  return (
    <div className={styles.site}>
      <span className={styles.overlay}></span>
      <form className={styles.form}>
        <div className={styles.formClose}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </div>
        //{" "}
        <div className="site-form-group">
          // <div className="site-form-group__title">TÌM KIẾM</div>
          //{" "}
          <div className="form-search">
            //{" "}
            <input
              className="form-search__input"
              placeholder="Tìm kiếm sản phẩm..."
            ></input>
            //{" "}
            <button className="form-search__btn" type="submit">
              // <i className="fa-solid fa-magnifying-glass fa-xl"></i>
              //{" "}
            </button>
            //{" "}
          </div>
          //{" "}
          <div className="form-result">
            //{" "}
            <div className="form-result-group">
              //{" "}
              <div className="form-result-group-info">
                //{" "}
                <div className="form-result-group-info__name">ÁO THUN ICON</div>
                // <div className="form-result-group-info__price">380,000đ</div>
                //{" "}
              </div>
              //{" "}
              <div className="form-result-image">
                //{" "}
                <img
                  src="./assets/images/products/img_9029_422fb7e320174b3db96533ca190fc5ab_compact.jpg"
                  alt=""
                  className="form-result-image__img"
                />
                //{" "}
              </div>
              //{" "}
            </div>
            //{" "}
            <div className="form-result__more">
              //{" "}
              <a href="" className="form-result__more-link">
                Xem thêm 35 sản phẩm
              </a>
              //{" "}
            </div>
            //{" "}
          </div>
          //{" "}
        </div>
        <div className={styles.cart}>
          <div className={styles.Title}>GIỎ HÀNG</div>
          <div className={styles.cartGroup}>
            <div className={styles.cartItem}>
              <div className={styles.cartItemImage}>
                <img
                  src="./assets/images/products/img_9029_422fb7e320174b3db96533ca190fc5ab_compact.jpg"
                  alt=""
                  className={styles.cartItemImageImg}
                />
              </div>
              <div className={styles.cartItemInfo}>
                <div className={styles.cartItemInfoName}>
                  Áo Thun ICON DENIM Skateboard Printed
                </div>
                <div className={styles.cartItemInfoSize}>ĐEN-0088 / S</div>
                <div className={styles.infoGroup}>
                  <input
                    type="text"
                    className={styles.infoGroupCount}
                    min="1"
                    value="1"
                  />
                  <span className={styles.infoGroupPrice}>280,000đ</span>
                </div>
              </div>
              <a href="/" className={styles.cartItemRemove}>
                <FontAwesomeIcon icon={faTrashCan} size="1x" />
              </a>
            </div>
            <div className={styles.cartTotal}>
              <div className={styles.cartTotalName}>TỔNG TIỀN:</div>
              <div className={styles.cartTotalPrice}>280,000đ</div>
            </div>
            <div className={styles.cartCheckout}>
              <a href="/" className={styles.cartCheckoutBtn}>
                TIẾP TỤC MUA HÀNG
              </a>
              <a href="/" className={styles.cartCheckoutBtn}>
                THANH TOÁN
              </a>
            </div>
            <div className={styles.cartNote}>
              <textarea
                name="note"
                cols={30}
                rows={10}
                className={styles.cartNoteText}
                placeholder="Ghi chú"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
