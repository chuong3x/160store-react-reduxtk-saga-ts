import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import Button from "components/Common/Button";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  authActions,
  RegisterPayload,
  RegisterData,
  selectRegistering,
  selectRegisterStatus,
} from "features/auth/authSlice";
import { validateRegisterData } from "utils/validation";

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isRegistering = useAppSelector(selectRegistering);
  const registerStatus = useAppSelector(selectRegisterStatus);

  const initRegisterData: RegisterData = {
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    phone: "",
  };
  const initRegisterPayload: RegisterPayload = {
    method: "email",
    registerData: initRegisterData,
  };

  const [registerMethod, setRegisterMethod] = useState("email");
  const [registerData, setRegisterData] = useState(initRegisterData);
  const [registerPayload, setRegisterPayload] = useState(initRegisterPayload);

  const handleChecked = (name: string) => {
    setRegisterMethod(name);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleRegister = (e: ChangeEvent<HTMLButtonElement>) => {
    const validateRegister = validateRegisterData(registerPayload);
    if (validateRegister) {
      dispatch(authActions.register(registerPayload));
    } else {
      dispatch(authActions.registerFailed("Vui lòng điền đầy đủ thông tin!"));
    }
    e.preventDefault();
  };

  useEffect(() => {
    setRegisterPayload({ method: registerMethod, registerData: registerData });
  }, [registerMethod, registerData]);

  useEffect(() => {
    const isAccessToken = localStorage.getItem("accessToken");
    if (registerStatus.status === "success" && isAccessToken)
      navigate("/admin");
  }, [registerStatus]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperBox}>
        <h2 className={styles.title}>TẠO TÀI KHOẢN</h2>
        <div className={styles.method}>
          <div className={styles.methodBtn}>
            <input
              type="radio"
              value="email"
              id="emailCheck"
              name="register"
              onChange={() => handleChecked("email")}
              checked={registerMethod === "email"}
            />
            <label htmlFor="emailCheck" className={styles.methodBtnText}>
              Đăng ký bằng email
            </label>
          </div>
          <div className={styles.methodBtn}>
            <input
              type="radio"
              value="phone"
              id="phoneCheck"
              name="register"
              checked={registerMethod === "phone"}
              onChange={() => handleChecked("phone")}
            />
            <label htmlFor="phoneCheck" className={styles.methodBtnText}>
              Đăng ký bằng số điện thoại
            </label>
          </div>
        </div>
        {registerStatus.status && (
          <div className={styles.status}>{registerStatus.message}</div>
        )}
        <form className={styles.form}>
          {registerMethod === "email" ? (
            <>
              <input
                type="text"
                id="lastName"
                className={styles.formInput}
                placeholder="Họ"
                value={registerData.lastName}
                onChange={handleChange}
                required={true}
              />
              <input
                type="text"
                id="firstName"
                className={styles.formInput}
                placeholder="Tên"
                value={registerData.firstName}
                onChange={handleChange}
                required={true}
              />
              <input
                type="email"
                id="email"
                className={styles.formInput}
                placeholder="Email"
                value={registerData.email}
                onChange={handleChange}
                required={true}
              />
              <input
                type="password"
                id="password"
                className={styles.formInput}
                placeholder="Mật khẩu"
                value={registerData.password}
                onChange={handleChange}
                required={true}
                autoComplete="on"
              />
            </>
          ) : (
            <input
              type="tel"
              id="phone"
              className={styles.formInput}
              placeholder="Số điện thoại"
              value={registerData.phone}
              onChange={handleChange}
              required={true}
            />
          )}

          <Button
            className={styles.formBtn}
            onClick={handleRegister}
            disabled={isRegistering}
          >
            Đăng ký
          </Button>
          <Link to="/login" className={styles.formBack}>
            Quay về
          </Link>
        </form>
      </div>
    </div>
  );
}
