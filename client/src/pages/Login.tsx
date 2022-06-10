import { useAppSelector } from "app/hooks";
import { selectIsLoggedIn } from "features/auth/authSlice";
import { Navigate } from "react-router-dom";
import LoginForm from "../features/auth/components/LoginForm";

export default function Login() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/dashboard" /> : <LoginForm />;
}
