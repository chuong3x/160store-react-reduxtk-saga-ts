import Check from "components/Common/Check";
import NotFound from "components/Common/Check/NotFound";
import Refund from "components/Common/Refund";
import Size from "components/Common/Size";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GuidePage = () => {
  const param = useParams();
  const [stateComp, setStateComp] = useState(<></>);
  const par = param["*"];
  useEffect(() => {
    if (par !== "size" && par !== "refund" && par !== "check") {
      setStateComp(<NotFound />);
    } else {
      if (par === "size") setStateComp(<Size />);
      if (par === "refund") setStateComp(<Refund />);
      if (par === "check") setStateComp(<Check />);
    }
  }, [param]);
  return <div>{par ? stateComp : <NotFound />}</div>;
};
export default GuidePage;
