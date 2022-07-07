import { useAppDispatch, useAppSelector } from "app/hooks";
import clsx from "clsx";
import { useState, useEffect } from "react";

import { galleryActions } from "features/gallery/gallerySlice";
import { Image } from "models";
import styles from "./Gallery.module.scss";

interface GalleryProps {
  images: Image[];
}

export interface GalleryPayload {
  images: Image[];
  currentIndex: number;
}

export default function Gallery({ images }: GalleryProps) {
  const dispatch = useAppDispatch();

  const [active, setActive] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectImage = (e: React.MouseEvent<HTMLDivElement>) => {
    const index = images.findIndex(
      (image) => image.image_id === e.currentTarget.id
    );
    setActive(images[index]);
    setCurrentIndex(index);
  };
  const handleClickImage = () => {
    dispatch(galleryActions.show({ images, currentIndex }));
  };

  useEffect(() => {
    return () => {
      dispatch(galleryActions.hide());
    };
  }, [dispatch]);

  return (
    <div className={styles.gallery}>
      <div className={styles.list}>
        {images &&
          images.map((image) => (
            <div
              key={image.image_id}
              id={image.image_id}
              className={clsx(
                styles.listItem,
                active === image && styles.active
              )}
              onClick={handleSelectImage}
            >
              <img className={styles.listItemImage} src={image.src} alt="" />
            </div>
          ))}
      </div>
      <div className={styles.view}>
        <img
          className={styles.viewImage}
          src={active.src}
          onClick={handleClickImage}
        />
      </div>
    </div>
  );
}
