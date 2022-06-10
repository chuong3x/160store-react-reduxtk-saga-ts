import { useAppSelector } from "app/hooks";
import { selectIsLoggedIn } from "features/auth/authSlice";
import RegisterForm from "features/auth/components/RegisterForm";
import { Navigate } from "react-router-dom";

export default function Register() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/dashboard" /> : <RegisterForm />;
}
