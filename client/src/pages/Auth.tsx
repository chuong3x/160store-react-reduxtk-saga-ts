import Container from "components/Layout/Container";
import { useEffect, useState } from "react";
import AuthForm from "../features/auth/AuthForm";

export default function Auth() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isToken = localStorage.getItem("access_token");
    if (isToken) setIsLogged(true);
    setIsLogged(false);
  }, [isLogged]);

  return (
    <>
      <AuthForm />;
      <Container />
    </>
  );
}
