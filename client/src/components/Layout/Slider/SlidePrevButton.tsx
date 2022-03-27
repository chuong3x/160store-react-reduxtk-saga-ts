import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useSwiper } from "swiper/react";
import styles from "./Slider.module.scss";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className={clsx(styles.swiperButton, styles.swiperButtonPrev)}
      onClick={() => swiper.slidePrev()}
    >
      <FontAwesomeIcon icon={faLeftLong} size="2x" />
    </button>
  );
}
