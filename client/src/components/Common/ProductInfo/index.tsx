import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import { toast } from "react-toastify";

import { useAppDispatch } from "app/hooks";
import { cartActions } from "features/cart/cartSlice";
import { guideActions } from "features/guide/guideSlice";
import { Product } from "models";
import { formater } from "utils/formater";

import styles from "./ProductInfo.module.scss";
import "react-toastify/dist/ReactToastify.css";

import Button from "../Button";
import Banner from "./Banner";
import InstockStore from "./InstockStore";
import Selected from "./Selected";
import { siteActions } from "features/site/siteSlice";

interface ProductInfoProps {
  product: Product;
}

export interface ProductPayload {
  product_id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
  amount: number;
}

const initialState: ProductPayload = {
  product_id: "",
  name: "",
  color: "",
  size: "",
  image: "",
  price: 0,
  amount: 1,
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const dispatch = useAppDispatch();
  const [productState, setProductState] = useState({
    ...initialState,
    product_id: product.product_code,
    price: product.price,
    name: product.name,
    image: product.image,
  });

  const handleSelectColor = (event: React.MouseEvent<HTMLDivElement>) => {
    const color = event.currentTarget.id;
    setProductState({ ...productState, color: color });
  };
  const handleSelectSize = (event: React.MouseEvent<HTMLDivElement>) => {
    const size = event.currentTarget.id;
    setProductState({ ...productState, size: size });
  };

  const handleClickAmount = (event: React.MouseEvent<HTMLLabelElement>) => {
    const target = event.currentTarget.id;
    if (productState.amount < 2) {
      target === "plus" &&
        setProductState({ ...productState, amount: productState.amount + 1 });
    } else {
      target === "minus"
        ? setProductState({ ...productState, amount: productState.amount - 1 })
        : setProductState({ ...productState, amount: productState.amount + 1 });
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    if (inputValue < 1) {
      setProductState({ ...productState, amount: 1 });
    } else {
      setProductState({ ...productState, amount: inputValue });
    }
  };

  const handleClickGuide = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(guideActions.show(event.currentTarget.name));
  };

  const notify = (message: string) => toast(message);

  const handleAddCart = () => {
    const { color, size } = productState;
    let message = "";
    if (!color) {
      message = "Vui lòng chọn màu sản phẩm";
    } else if (!size) {
      message = "Vui lòng chọn size";
    }
    if (!message) {
      dispatch(cartActions.add(productState));
      dispatch(siteActions.show("cart"));
    } else {
      notify(message);
    }
  };

  return (
    <div className={styles.info}>
      <div className={clsx(styles.group, clsx(styles["flex-column"]))}>
        <h2 className={styles.name}>{product.name}</h2>
        <div className={styles.id}>
          <strong className="">SKU:</strong>
          <span className={styles.idText}>{productState.product_id}</span>
        </div>
      </div>

      <div className={clsx(styles.group, clsx(styles["group--price"]))}>
        <span
          className={clsx(styles["group--price-current"])}
        >{`${formater.format(product.price)}`}</span>
        <span className={clsx(styles["group--price-old"])}>{`${formater.format(
          (100 * product.price) / (100 - product.salePercent)
        )}`}</span>
      </div>

      <div className={clsx(styles.group)}>
        <div className={styles.wrapper}>
          <span className={styles.title}>Màu sắc</span>
          <div className={styles.list}>
            {product.product_colors.map((color) => (
              <div
                key={color.name}
                id={color.name}
                className={styles.item}
                onClick={handleSelectColor}
              >
                <img className={styles.itemImg} src={color.image} alt="" />
                {productState.color === color.name && <Selected />}
                <span className={styles.itemColor}>{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.group}>
        <div className={styles.size}>
          <span className={styles.sizeTitle}>Kích thước</span>
          <div className={styles.sizeList}>
            {product.product_sizes.map((size) => (
              <div
                key={size}
                id={size}
                className={styles.sizeListItem}
                onClick={handleSelectSize}
              >
                <label className={styles.sizeListItemText}>
                  {size.toUpperCase()}
                </label>
                {productState.size === size && <Selected />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button
        className={styles.tutor}
        onClick={handleClickGuide}
        name={product.category}
      >
        Hướng dẫn chọn size
      </Button>
      <div className={styles.amount}>
        <Button className={styles.minus} id="minus" onClick={handleClickAmount}>
          -
        </Button>
        <input
          type="number"
          className={styles.count}
          value={productState.amount}
          onChange={handleChange}
        />
        <Button className={styles.plus} id="plus" onClick={handleClickAmount}>
          +
        </Button>
      </div>

      <Button className={styles.checkout} onClick={handleAddCart}>
        Đặt Hàng
      </Button>
      <Banner />
      <InstockStore />

      <div className={styles.productinfo}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Thông tin sản phẩm</h3>
          <div className={styles.infoGroup}>{product.description}</div>
        </div>
      </div>
    </div>
  );
}
