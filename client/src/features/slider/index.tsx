import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import styles from "./Slider.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SlideNextButton from "./compoments/SlideNextButton";
import SlidePrevButton from "./compoments/SlidePrevButton";
import { Slide } from "models";
import { Link } from "react-router-dom";

interface PropsSlider {
  slides: Slide[];
}

export default function Slider({ slides }: PropsSlider) {
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
          className={styles.swiper}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide._id}>
              <Link className={styles.swiperSliderItem} to={slide.linkTo}>
                <img
                  className={styles.swiperSliderItemImg}
                  src={slide.image}
                  alt=""
                />
              </Link>
            </SwiperSlide>
          ))}
          <SlideNextButton />
          <SlidePrevButton />
        </Swiper>
      </div>
    </div>
  );
}
