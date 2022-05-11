import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import styles from "./AuthForm.module.scss";

export default function AuthForm() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperBox}>
        <h2 className={styles.title}>Đăng nhập</h2>
        <div className={styles.social}>
          <a href="" className={styles.socialBtn}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <span className={styles.socialBtnText}>FACEBOOK</span>
          </a>
          <a href="" className={styles.socialBtn}>
            <FontAwesomeIcon icon={faGoogle} size="2x" />
            <span className={styles.socialBtnText}>GOOGLE</span>
          </a>
        </div>
        <form action="" className={styles.form}>
          <p className={styles.formTitle}>HOẶC ĐĂNG NHẬP VỚI...</p>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Nhập email hoặc số điện thoại"
          />
          <input
            type="password"
            className={styles.formInput}
            placeholder="Mật khẩu"
          />
          <a href="" className={styles.formBtn}>
            Đăng nhập
          </a>
          <a href="" className={styles.formForgot}>
            Quên mật khẩu?
          </a>
          <a href="" className={styles.formRegister}>
            Đăng ký
          </a>
        </form>
      </div>
    </div>
  );
}
