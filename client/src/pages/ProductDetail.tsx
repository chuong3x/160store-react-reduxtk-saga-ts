import Breadcrumb from "components/Common/Breadcrumb";
import Detail from "components/Common/Detail";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) navigate("/collection");
  });
  return (
    <div>
      <Breadcrumb />
      <Detail />
    </div>
  );
}
