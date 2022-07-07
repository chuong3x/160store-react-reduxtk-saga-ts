import { useAppDispatch, useAppSelector } from "app/hooks";
import clsx from "clsx";
import {
  sectionActions,
  selectSectionProducts,
} from "features/section/sectionSlice";
import { Product, Section, SectionProductsPayload } from "models";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Section.module.scss";
import SectionProducts from "./SectionProducts";

interface PropsSection {
  sections: Section[];
}

//fake API
const products: Product[] = [
  {
    _id: "62ab30221a01829ee1152cdd",
    brand: "Charlie Super",
    name: "Mắt Kính ICON DENIM Aviator Light-Frame",
    price: 380000,
    image:
      "https://res.cloudinary.com/hanco3x/image/upload/v1648826569/106store/products/kinh-trang_ypx4rp.webp",
    product_link: "mat kinh icon denim aviator light frame",
    description:
      "ICON DENIM Aviator Light-Frame Glasses //\n\nNgoài công dụng bảo vệ mắt khỏi khói bụi và thời tiết, thì thiết kế lần này có sự cải tiến phần gọng kính chắc chắn,form kính ôm vào sống mũi làm nổi bật đường nét trên gương mặt, tăng sự mềm mại bằng miếng đệm mũi cao su nên ae yên tâm về độ thoải mái khi đeo.\n",
    rating: 5.0,
    category: "kinh",
    product_colors: [{ name: "red", image: "" }],
    product_code: "KIID0013-01",
    onSale: true,
    salePercent: 20,
    product_sizes: ["S"],
  },
];

export default function Sections({ sections }: PropsSection) {
  const dispatch = useAppDispatch();
  const productsStore = useAppSelector(selectSectionProducts);
  const navigate = useNavigate();

  const handleLoadMore = (method: string, path: string) => {
    if (method === "detail") navigate(`${path}`);
    console.log("loadingmore");
  };

  useEffect(() => {
    if (Object.keys(productsStore).length === 0) {
      sections.forEach((section) => {
        const payloadData: SectionProductsPayload = {
          id: section.id,
          name: section.name,
          params: section.paramToGetProducts,
        };
        dispatch(sectionActions.getSectionProducts(payloadData));
      });
    }
  }, []);

  return (
    <>
      {sections.map((section) => (
        <section
          className={clsx(styles.collection, styles.collectionNew)}
          key={section.id}
        >
          {section.title && (
            <h2 className={styles.title}>
              <Link
                to={`collection/${section.name}`}
                className={styles.titleText}
              >
                {section.title.toUpperCase()}
              </Link>
            </h2>
          )}
          {section.haveBanner && (
            <div className={styles.banner}>
              <img
                className={styles.bannerImg}
                src={section.bannerImage}
                alt=""
              />
            </div>
          )}
          <SectionProducts products={products} />
          <div className={styles.expland}>
            <button
              className={styles.explandButton}
              onClick={() =>
                handleLoadMore(section.showMoreMethod, section.path)
              }
            >
              XEM THÊM
            </button>
          </div>
        </section>
      ))}
    </>
  );
}
