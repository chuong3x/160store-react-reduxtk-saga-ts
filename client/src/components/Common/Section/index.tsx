import { useAppDispatch, useAppSelector } from "app/hooks";
import clsx from "clsx";
import {
  sectionActions,
  selectSectionProducts,
} from "features/section/sectionSlice";
import { Section, SectionProductsPayload } from "models";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Section.module.scss";
import SectionProducts from "./SectionProducts";

interface PropsSection {
  sections: Section[];
}

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
  }, [productsStore, sections]);

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
          <SectionProducts products={productsStore[section.name]} />
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
