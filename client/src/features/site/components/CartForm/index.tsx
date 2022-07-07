import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./CartForm.module.scss";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { cartActions, selectCartProducts } from "features/cart/cartSlice";
import Button from "components/Common/Button";
import { formater } from "utils/formater";
import { siteActions } from "features/site/siteSlice";

export default function CartForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectCartProducts);

  const totalPrice = products.reduce(
    (acc, current) => acc + current.price * current.amount,
    0
  );

  const handleRemoveProduct = (event: React.MouseEvent) => {
    const id = event.currentTarget.id;
    dispatch(cartActions.remove(id));
    event.preventDefault();
  };
  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {};
  const handleClose = () => {
    dispatch(siteActions.hide());
  };
  const handleCheckout = (event: React.MouseEvent) => {
    if (products.length > 0) {
      dispatch(siteActions.hide());
      navigate("/checkouts");
    } else {
      toast("Vui lòng thêm sản phẩm vào giỏ hàng để mua");
    }
    event.preventDefault();
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartTitle}>GIỎ HÀNG</div>
      <div className={styles.cartGroup}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.product_id} className={styles.cartItem}>
              <div className={styles.cartItemImage}>
                <img
                  src={product.image}
                  alt=""
                  className={styles.cartItemImageImg}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.infoName}>{product.name}</div>
                <div className={styles.infoSize}>{product.product_id}</div>
                <div className={styles.infoGroup}>
                  <input
                    type="text"
                    className={styles.infoGroupCount}
                    min="1"
                    onChange={handleChangeAmount}
                    value={product.amount}
                  />
                  <span className={styles.infoGroupPrice}>
                    {formater.format(product.price)}
                  </span>
                </div>
              </div>
              <div className={styles.cartItemRemove}>
                <Button
                  id={product.product_id}
                  onClick={handleRemoveProduct}
                  className={styles.cartItemRemoveBtn}
                >
                  <FontAwesomeIcon icon={faTrashCan} size="1x" />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.cartItemEmpty}>Giỏ hàng trống</div>
        )}
        <div className={styles.cartTotal}>
          <div className={styles.cartTotalName}>TỔNG TIỀN:</div>
          <div className={styles.cartTotalPrice}>
            {formater.format(Number(totalPrice))}
          </div>
        </div>
        <div className={styles.cartCheckout}>
          <Button className={styles.cartCheckoutBtn} onClick={handleClose}>
            TIẾP TỤC MUA HÀNG
          </Button>
          <Button onClick={handleCheckout} className={styles.cartCheckoutBtn}>
            THANH TOÁN
          </Button>
        </div>
      </div>
    </div>
  );
}
