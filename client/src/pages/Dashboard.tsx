import { Navigate } from "react-router-dom";

import { useAppSelector } from "app/hooks";
import { selectIsLoggedIn } from "features/auth/authSlice";

export default function Dashboard() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <div>Dashboard Page</div> : <Navigate to="/login" />;
}
