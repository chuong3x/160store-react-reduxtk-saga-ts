import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./LoginForm.module.scss";

import Button from "components/Common/Button";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  authActions,
  LoginPayload,
  selectLogging,
  selectLoginStatus,
} from "features/auth/authSlice";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const isLoging = useAppSelector(selectLogging);
  const loginStatus = useAppSelector(selectLoginStatus);

  const initialState: LoginPayload = {
    username: "",
    password: "",
  };

  const [loginPayload, setLoginPayload] = useState(initialState);

  function handleLogin(e: ChangeEvent<HTMLButtonElement>) {
    dispatch(authActions.login(loginPayload));
    e.preventDefault();
  }
  function handleForgotPassword() {}
  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setLoginPayload({ ...loginPayload, [e.target.id]: e.target.value });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperBox}>
        <h2 className={styles.title}>Đăng nhập</h2>

        {loginStatus.status && (
          <div className={styles.status}>{loginStatus.message}</div>
        )}

        <form action="" className={styles.form}>
          <input
            id="username"
            type="text"
            className={styles.formInput}
            placeholder="Nhập email hoặc số điện thoại"
            value={loginPayload.username}
            onChange={handleChangeInput}
            required={true}
          />
          <input
            id="password"
            type="password"
            className={styles.formInput}
            placeholder="Mật khẩu"
            value={loginPayload.password}
            onChange={handleChangeInput}
            autoComplete="on"
            required={true}
          />
          <Button
            className={styles.formBtn}
            onClick={handleLogin}
            disabled={isLoging}
          >
            Đăng nhập
          </Button>
          <div className={styles.formForgot} onClick={handleForgotPassword}>
            Quên mật khẩu?
          </div>
          <Link to="/register" className={styles.formRegister}>
            Đăng ký
          </Link>
        </form>
      </div>
    </div>
  );
}
