import styles from "./ProductInfo.module.scss";

export default function ProductInfo() {
  return (
    <div className="product-detail-wrapper-info">
      <div className="product-detail-wrapper-info__title">
        <h2 className="product-title__name">Áo Sơmi ICON DENIM SLim Fit</h2>
        <div className="product-title__id">
          <strong className="product-title__id-prefix">SKU:</strong>
          <span className="product-title__id-number">SMID0017-01</span>
        </div>
      </div>
      <div className="product-detail-wrapper-info__price">
        <span className="product-price">320,000đ</span>
      </div>
      <div className="product-detail-wrapper-info__color">
        <div className="product-color">
          <span className="product-color__title">Màu sắc</span>
          <div className="product-color-item">
            <img
              className="product-color-item__img"
              src="./assets/images/products/img_9082_7481c26ee8524a119c1b687b54a4aeeb_small.webp"
              alt=""
            />
            <span className="product-color-item__color">Đen</span>
          </div>
        </div>
      </div>
      <div className="product-detail-wrapper-info__size">
        <div className="product-size">
          <span className="product-size__title">Kích thước</span>
          <div className="product-size-item">
            <label className="product-size-item__color">S</label>
          </div>
        </div>
      </div>
      <div className="product-detail-wrapper-info__tutor">
        <a href="" className="product-tutor">
          Hướng dẫn chọn size
        </a>
      </div>
      <div className="product-detail-wrapper-info__qty">
        <input type="button" className="product-qty__minus" value="-" />
        <input type="text" className="product-qty__count" value="1" />
        <input type="button" className="product-qty__plus" value="+" />
      </div>
      <div className="product-detail-wrapper-info__checkout">
        <a href="" className="product-checkout">
          Đặt Hàng
        </a>
      </div>
      <div className="product-detail-wrapper-info__banner">
        <div className="product-banner-item">
          <div className="product-banner-item__icon">
            <i className="fa-solid fa-gift fa-2x"></i>
          </div>
          <span className="product-banner-item__text">
            FREESHIP đơn hàng trên 500K
          </span>
        </div>
        <div className="product-banner-item">
          <div className="product-banner-item__icon">
            <i className="fa-regular fa-circle-check fa-2x"></i>
          </div>
          <span className="product-banner-item__text">
            Kiểm tra hàng trước khi thanh toán
          </span>
        </div>
        <div className="product-banner-item">
          <div className="product-banner-item__icon">
            <i className="fa-solid fa-arrows-rotate fa-2x"></i>
          </div>
          <span className="product-banner-item__text">
            Đổi trả trong vòng 7 ngày
          </span>
        </div>
      </div>
      <div className="product-detail-wrapper-info__inventory">
        <a href="" className="inventory">
          <h2 className="inventory__title">11 Cửa hàng còn sản phẩm này</h2>
          <div className="inventory__expland">
            <i className="fa-solid fa-angles-down"></i>
          </div>
        </a>
      </div>
      <div className="product-detail-wrapper-info__moreinfo">
        <div className="product-moreinfo">
          <h3 className="product-moreinfo__title">Thông tin sản phẩm</h3>
          <div className="product-moreinfo-group"></div>
        </div>
      </div>
    </div>
  );
}
