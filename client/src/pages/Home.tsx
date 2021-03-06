import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "app/hooks";
import Slider from "../features/slider";
import { selectSlides, sliderActions } from "features/slider/sliderSlice";
import { Section } from "models";

import Container from "../components/Common/Container";
import Sections from "../components/Common/Section";

const fakeSection: Section[] = [
  {
    id: "1",
    title: "SẢN PHẨM MỚI",
    name: "newproducts",
    haveBanner: false,
    numberOfRow: 2,
    isSwiper: false,
    bannerImage: "",
    path: "/products",
    paramToGetProducts: {
      sort: "createAt",
      limit: 8,
    },
    showMoreMethod: "detail",
  },
  {
    id: "2",
    name: "yearend",
    title: "",
    haveBanner: true,
    numberOfRow: 3,
    isSwiper: true,
    bannerImage:
      "https://res.cloudinary.com/hanco3x/image/upload/v1648826671/106store/slider-background/slideshow_2_xo6fmb.webp",
    path: "",
    paramToGetProducts: {
      limit: 12,
    },
    showMoreMethod: "loadMore",
  },
  {
    id: "3",
    title: "SALE UP TO 70%",
    name: "sale",
    haveBanner: true,
    numberOfRow: 1,
    isSwiper: true,
    bannerImage:
      "https://res.cloudinary.com/hanco3x/image/upload/v1649077332/106store/slider-background/banner-top_l37ar2.webp",
    path: "/collection/sale",
    paramToGetProducts: {
      limit: 8,
    },
    showMoreMethod: "detail",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useAppDispatch();
  const sliderState = useAppSelector(selectSlides);

  useEffect(() => {
    if (param) {
      navigate("/");
    }

    dispatch(sliderActions.getSlides());
  }, [navigate]);

  return (
    <>
      <Slider slides={sliderState} />
      <Container />
      <Sections sections={fakeSection} />
    </>
  );
}
