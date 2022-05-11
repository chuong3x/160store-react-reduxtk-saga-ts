import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { name } = useParams();
  return <div>Product Detail Page {name}</div>;
}
