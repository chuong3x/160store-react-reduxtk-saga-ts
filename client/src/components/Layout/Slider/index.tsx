import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import styles from "./Slider.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Slide from "./Slide";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>Slider2</SwiperSlide>
          <SwiperSlide>Slider3</SwiperSlide>
          <SwiperSlide>Slider4</SwiperSlide>

          <SlideNextButton />
          <SlidePrevButton />
        </Swiper>
      </div>
    </div>
  );
}
