
import RegisterForm from "features/auth/components/RegisterForm";
import { useEffect, useState } from "react";
import LoginForm from "../features/auth/components/LoginForm";


export default function Login() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isToken = localStorage.getItem("access_token");
    if (isToken) setIsLogged(true);
    setIsLogged(false);
  }, [isLogged]);

  return <LoginForm />;
    
}
