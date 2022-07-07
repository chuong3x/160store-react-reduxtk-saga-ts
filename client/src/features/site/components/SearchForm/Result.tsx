import { useAppDispatch, useAppSelector } from "app/hooks";
import { siteActions } from "features/site/siteSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchForm.module.scss";
import { selectSearch } from "./searchSlice";

interface PropsResult {
  to: string;
}

export default function Result({ to }: PropsResult) {
  const searchStore = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  const [showResult, setShowResult] = useState(searchStore);

  useEffect(() => {
    if (searchStore && searchStore.length > 5) {
      const term = [...searchStore];
      term.length = 5;
      setShowResult(term);
    } else {
      setShowResult(searchStore);
    }
  }, [searchStore]);

  return showResult && searchStore.length > 0 ? (
    <div className={styles.result}>
      {showResult.map((searchItem) => (
        <div key={searchItem._id} className={styles.resultGroup}>
          <div className={styles.resultGroupInfo}>
            <Link
              className={styles.resultGroupInfoName}
              to={searchItem.product_link}
              onClick={() => dispatch(siteActions.hide())}
            >
              {searchItem.name}
            </Link>
            <div
              className={styles.resultGroupInfoPrice}
            >{`${searchItem.price}đ`}</div>
          </div>
          <div className={styles.resultImage}>
            <img
              src={searchItem.image}
              alt=""
              className={styles.resultImageImg}
              height="40"
              width="40"
            />
          </div>
        </div>
      ))}
      {searchStore.length > 5 && (
        <div className={styles.resultMore}>
          <Link
            to={`/search?_filter=${to}`}
            className={styles.resultMoreLink}
            onClick={() => {
              dispatch(siteActions.hide());
            }}
          >
            Xem thêm {`${searchStore.length - 5}`} sản phẩm
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div className={styles.noResult}>
      <span className={styles.noResultContent}>Không tìm thấy sản phẩm...</span>
    </div>
  );
}
