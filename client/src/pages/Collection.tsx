import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Collection() {
  const { param } = useParams();
  useEffect(() => {
    console.log(param);
  }, [param]);
  return <div>Collection Page</div>;
}
