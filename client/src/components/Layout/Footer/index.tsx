import clsx from "clsx";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";
import { faHouseChimney, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.block}>
        <div className={clsx(styles.blockLocation, styles.blockLocation2row)}>
          <h3 className={styles.blockLocationName}>TP. Hồ Chí Minh</h3>
          <div
            className={clsx(
              styles.blockLocationDetail,
              styles.blockLocationDetail2col
            )}
          >
            <div className={styles.blockLocationDetailStore}>
              <h4 className={styles.blockLocationDetailStoreName}>STORE 1</h4>
              <div className={styles.blockLocationDetailStoreAddress}>
                <FontAwesomeIcon icon={faHouseChimney} size="sm" />
                <p className={styles.blockLocationDetailStoreAddressText}>
                  11 ĐƯỜNG 3, PHƯỚC LONG C, TP. THỦ ĐỨC
                </p>
              </div>
              <div className={styles.blockLocationDetailStorePhone}>
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <a
                  href="tel:0798328798"
                  className={styles.blockLocationDetailStorePhoneNumber}
                >
                  079.832.8798
                </a>
              </div>
            </div>
            <div
              className={clsx(
                styles.blockLocationDetailStore,
                styles.blockLocationDetailStoreBorderright
              )}
            >
              <h4 className={styles.blockLocationDetailStoreName}>STORE 1</h4>
              <div className={styles.blockLocationDetailStoreAddress}>
                <FontAwesomeIcon icon={faHouseChimney} size="sm" />

                <p className={styles.blockLocationDetailStoreAddressText}>
                  11 ĐƯỜNG 3, PHƯỚC LONG C, TP. THỦ ĐỨC
                </p>
              </div>
              <div className={styles.blockLocationDetailStorePhone}>
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <a
                  href="tel:0798328798"
                  className={styles.blockLocationDetailStorePhoneNumber}
                >
                  079.832.8798
                </a>
              </div>
            </div>
            <div className={styles.blockLocationDetailStore}>
              <h4 className={styles.blockLocationDetailStoreName}>STORE 1</h4>
              <div className={styles.blockLocationDetailStoreAddress}>
                <FontAwesomeIcon icon={faHouseChimney} size="sm" />

                <p className={styles.blockLocationDetailStoreAddressText}>
                  11 ĐƯỜNG 3, PHƯỚC LONG C, TP. THỦ ĐỨC
                </p>
              </div>
              <div className={styles.blockLocationDetailStorePhone}>
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <a
                  href="tel:0798328798"
                  className={styles.blockLocationDetailStorePhoneNumber}
                >
                  079.832.8798
                </a>
              </div>
            </div>
            <div
              className={clsx(
                styles.blockLocationDetailStore,
                styles.blockLocationDetailStoreBorderright
              )}
            >
              <h4 className={styles.blockLocationDetailStoreName}>STORE 1</h4>
              <div className={styles.blockLocationDetailStoreAddress}>
                <FontAwesomeIcon icon={faHouseChimney} size="sm" />

                <p className={styles.blockLocationDetailStoreAddressText}>
                  11 ĐƯỜNG 3, PHƯỚC LONG C, TP. THỦ ĐỨC
                </p>
              </div>
              <div className={styles.blockLocationDetailStorePhone}>
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <a
                  href="tel:0798328798"
                  className={styles.blockLocationDetailStorePhoneNumber}
                >
                  079.832.8798
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="block-location">
          <h3 className={styles.blockLocationName}>TP. Biên Hòa</h3>
          <div
            className={clsx(
              styles.blockLocationDetail,
              styles.blockLocationDetail1col
            )}
          >
            <div className={styles.blockLocationDetailStore}>
              <h4 className={styles.blockLocationDetailStoreName}>STORE 1</h4>
              <div className={styles.blockLocationDetailStoreAddress}>
                <FontAwesomeIcon icon={faHouseChimney} size="sm" />

                <p className={styles.blockLocationDetailStoreAddressText}>
                  11 ĐƯỜNG 3, PHƯỚC LONG C, TP. THỦ ĐỨC
                </p>
              </div>
              <div className={styles.blockLocationDetailStorePhone}>
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <a
                  href="tel:0798328798"
                  className={styles.blockLocationDetailStorePhoneNumber}
                >
                  079.832.8798
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <div
          className={clsx(styles.blockLocation, styles.blockLocationBordertop)}
        >
          <h3 className={styles.blockLocationName}>TP. Hà Nội</h3>
          <div
            className={clsx(
              styles.blockLocationDetail,
              styles.blockLocationDetail2col
            )}
          >
            <div className={styles.blockLocationDetailStore}>
              <h4 className={styles.blockLocationDetailStoreName}>STORE 1</h4>
              <div className={styles.blockLocationDetailStoreAddress}>
                <FontAwesomeIcon icon={faHouseChimney} size="sm" />

                <p className={styles.blockLocationDetailStoreAddressText}>
                  11 ĐƯỜNG 3, PHƯỚC LONG C, TP. THỦ ĐỨC
                </p>
              </div>
              <div className={styles.blockLocationDetailStorePhone}>
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <a
                  href="tel:0798328798"
                  className={styles.blockLocationDetailStorePhoneNumber}
                >
                  079.832.8798
                </a>
              </div>
            </div>
            <div
              className={clsx(
                styles.blockLocationDetailStore,
                styles.blockLocationDetailStoreBorderright
              )}
            >
              <h4 className={styles.blockLocationDetailStoreName}>STORE 1</h4>
              <div className={styles.blockLocationDetailStoreAddress}>
                <FontAwesomeIcon icon={faHouseChimney} size="sm" />

                <p className={styles.blockLocationDetailStoreAddressText}>
                  11 ĐƯỜNG 3, PHƯỚC LONG C, TP. THỦ ĐỨC
                </p>
              </div>
              <div className={styles.blockLocationDetailStorePhone}>
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <a
                  href="tel:0798328798"
                  className={styles.blockLocationDetailStorePhoneNumber}
                >
                  079.832.8798
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(styles.blockLocation, styles.blockLocationBordertop)}
        >
          <h3 className={styles.blockLocationName}>TP. Đà Nẵng</h3>
          <div
            className={clsx(
              styles.blockLocationDetail,
              styles.blockLocationDetail1col
            )}
          >
            <div className={styles.blockLocationDetailStore}>
              <h4 className={styles.blockLocationDetailStoreName}>STORE 1</h4>
              <div className={styles.blockLocationDetailStoreAddress}>
                <FontAwesomeIcon icon={faHouseChimney} size="sm" />

                <p className={styles.blockLocationDetailStoreAddressText}>
                  11 ĐƯỜNG 3, PHƯỚC LONG C, TP. THỦ ĐỨC
                </p>
              </div>
              <div className={styles.blockLocationDetailStorePhone}>
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <a
                  href="tel:0798328798"
                  className={styles.blockLocationDetailStorePhoneNumber}
                >
                  079.832.8798
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.blockSocial}>
          <h5 className={styles.blockSocialText}>
            LIKE 106STORE TREN MANG XA HOI
          </h5>
          <div className={styles.blockSocialList}>
            <div className={styles.blockSocialListIcon}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </div>
            <div className={styles.blockSocialListIcon}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </div>
          </div>
        </div>
        <div className={styles.blockPolicy}>
          <h5 className={styles.blockPolicyTitle}>CHÍNH SÁCH</h5>
          <div className={styles.blockPolicyList}>
            <p className={styles.blockPolicyListItem}>Hướng dẫn đặt hàng</p>
            <p className={styles.blockPolicyListItem}>Chính sách đổi trả</p>
            <p className={styles.blockPolicyListItem}>Thông tin chuyển khoản</p>
            <p className={styles.blockPolicyListItem}>Kiểm tra đơn hàng</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>2022 106 STORE</div>
    </footer>
  );
}
