import clsx from "clsx";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./GalleryModal.module.scss";
import {
  galleryActions,
  selectGalleryCurrentImage,
  selectGalleryImages,
} from "../gallerySlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

export default function GalleryModal() {
  const dispatch = useAppDispatch();

  const images = useAppSelector(selectGalleryImages);
  const current = useAppSelector(selectGalleryCurrentImage);
  console.log(current);

  const handleClickClose = () => {
    dispatch(galleryActions.hide());
  };

  return (
    <div className={styles.modal}>
      <label className={styles.button} onClick={handleClickClose}>
        <i className={styles.icon}></i>
      </label>
      <Swiper
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className={clsx("mySwiper", styles.swiper)}
        initialSlide={current}
      >
        {images.map((image) => (
          <SwiperSlide key={image.image_id}>
            <div className="swiper-zoom-container">
              <img src={image.src} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
