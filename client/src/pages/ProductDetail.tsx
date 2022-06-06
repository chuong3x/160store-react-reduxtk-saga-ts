import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { name } = useParams();
  const navigate = useNavigate()
  useEffect(()=>{
    if(!name) navigate('/collection')
  })
  return <div>Product Detail Page {name}</div>;
}
