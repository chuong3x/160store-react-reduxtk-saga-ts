import { useAppDispatch, useAppSelector } from "app/hooks";
import { authActions, selectIsLoggedIn } from "features/auth/authSlice";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import VerifyAccessToken from "utils/verifyAccessToken";

interface PrivateRouteProps {
  children: JSX.Element;
}
export default function PrivateRoute({ children }: PrivateRouteProps) {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const [isValidToken, setIsValidToken] = useState(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsValidToken(false);
    } else {
      const token = localStorage.getItem("accessToken");
      setIsValidToken(true);
      const checkedToken = VerifyAccessToken(token);
      if (!checkedToken) {
        token && dispatch(authActions.refreshToken({ token }));
      }
    }
  }, [isLoggedIn]);

  return isValidToken ? children : <Navigate to="/login" />;
}
