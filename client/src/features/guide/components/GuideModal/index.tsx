import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Button from "components/Common/Button";
import { guideActions, selectGuideActive } from "features/guide/guideSlice";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./GuideModal.module.scss";

const guideList = [
  {
    name: "Áo ba lỗ",
    category: "ao-balo",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994577/106store/guide/aobalo_w7kdra.webp",
  },
  {
    name: "Áo hoodie",
    category: "ao-hoodie",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994577/106store/guide/aohoodie_qe0oug.webp",
  },
  {
    name: "Áo khoác",
    category: "ao-khoac",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994577/106store/guide/aokhoac_rthenl.webp",
  },
  {
    name: "Áo len",
    category: "ao-len",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994577/106store/guide/aolen_od6tbs.webp",
  },
  {
    name: "Áo ni",
    category: "ao-ni",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994577/106store/guide/aoni_mhlsrf.webp",
  },
  {
    name: "Áo polo",
    category: "ao-polo",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994577/106store/guide/aobalo_w7kdra.webp",
  },
  {
    name: "Áo somi",
    category: "ao-somi",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994578/106store/guide/aosomi_cpmxpp.webp",
  },
  {
    name: "Áo thun",
    category: "ao-thun",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994576/106store/guide/aothun_nyqq7s.webp",
  },
  {
    name: "Quan short",
    category: "quan-short",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994577/106store/guide/quanshort_y67ll4.webp",
  },
  {
    name: "Quan tay",
    category: "quan-tay",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994577/106store/guide/quantay_fzgo7c.webp",
  },
  {
    name: "Quan kaki",
    category: "quan-kaki",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994576/106store/guide/quankaki_xel09o.webp",
  },
  {
    name: "Quan jogger",
    category: "quan-jogger",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994576/106store/guide/quanjogger_emnlu5.webp",
  },
  {
    name: "Quan jean",
    category: "quan-jean",
    src: "https://res.cloudinary.com/hanco3x/image/upload/v1655994576/106store/guide/quanjean_awela3.webp",
  },
];

const GuideModal = () => {
  const dispatch = useAppDispatch();
  const activeCatergory = useAppSelector(selectGuideActive);
  const [guideActive, setGuideActive] = useState(0);
  const handleChangeCatergory = (event: ChangeEvent<HTMLSelectElement>) => {
    const newIndex = guideList.findIndex(
      (item) => item.category === event.target.value
    );
    console.log("newIndex", newIndex);
    setGuideActive(newIndex);
  };
  const handleClose = () => {
    dispatch(guideActions.hide());
  };

  useEffect(() => {
    console.log(activeCatergory);
    const startIndex = guideList.findIndex(
      (item) => item.category === activeCatergory
    );
    startIndex >= 0 && setGuideActive(startIndex);
  }, [activeCatergory]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.guide}>
        <div className={styles.control}>
          <h3 className={styles.title}>Hướng dẫn chọn size</h3>
          <Button className={styles.btn} onClick={handleClose}>
            <FontAwesomeIcon icon={faClose} size="1x" />
          </Button>
        </div>
        <div className={styles.content}>
          <select className={styles.select} onChange={handleChangeCatergory}>
            {guideList.map((item) => (
              <option key={item.name} value={item.category}>
                {item.name.toUpperCase()}
              </option>
            ))}
          </select>
          <img className={styles.img} src={guideList[guideActive].src} />
        </div>
      </div>
      <span onClick={handleClose} className={styles.overlay}></span>
    </div>
  );
};

export default GuideModal;
