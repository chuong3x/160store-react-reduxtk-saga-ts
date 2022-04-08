import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSwiper } from "swiper/react";
import styles from "../Slider.module.scss";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className={clsx(styles.swiperButton, styles.swiperButtonNext)}
      onClick={() => swiper.slideNext()}
    >
      <FontAwesomeIcon icon={faRightLong} size="2x" />
    </button>
  );
}
