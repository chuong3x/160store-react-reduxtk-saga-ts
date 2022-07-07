import { useAppSelector } from "app/hooks";
import Breadcrumb from "components/Common/Breadcrumb";
import Detail from "components/Common/Detail";
import GuideModal from "features/guide/components/GuideModal";
import { selectGuideActive } from "features/guide/guideSlice";
import ScrollToTop from "hooks/useScrollToTop";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const isShowGuideModal = useAppSelector(selectGuideActive);

  useEffect(() => {
    if (!name) navigate("/collection");
  });
  return (
    <ScrollToTop>
      <Breadcrumb />
      <Detail />
      {isShowGuideModal && <GuideModal />}
    </ScrollToTop>
  );
}
