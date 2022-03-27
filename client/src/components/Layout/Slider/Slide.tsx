import styles from "./Slider.module.scss";
import slideImg from "./slideshow_3.webp";
export default function Slide() {
  return (
    <div className={styles.swiperSliderItem}>
      <img className={styles.swiperSliderItemImg} src={slideImg} alt="" />
    </div>
  );
}
