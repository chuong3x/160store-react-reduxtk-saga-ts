import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CartForm.module.scss";
export default function CartForm() {
  return (
    <div className={styles.cart}>
      <div className={styles.cartTitle}>GIỎ HÀNG</div>
      <div className={styles.cartGroup}>
        <div className={styles.cartItem}>
          <div className={styles.cartItemImage}>
            <img
              src="./assets/images/products/img_9029_422fb7e320174b3db96533ca190fc5ab_compact.jpg"
              alt=""
              className={styles.cartItemImageImg}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoName}>
              Áo Thun ICON DENIM Skateboard Printed
            </div>
            <div className={styles.infoSize}>ĐEN-0088 / S</div>
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
  );
}
