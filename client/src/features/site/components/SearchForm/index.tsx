import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "app/hooks";
import { useDebounce } from "hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Result from "./Result";

import styles from "./SearchForm.module.scss";
import { searchActions } from "./searchSlice";

export default function SearchForm() {
  const dispatch = useAppDispatch();

  const [searchState, setSearchState] = useState("");
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchState(e.target.value);
  };
  const debounce = useDebounce(searchState, 600);

  useEffect(() => {
    if (searchState) {
      dispatch(
        searchActions.getSearch({ _filter: encodeURIComponent(debounce) })
      );
    }
  }, [debounce]);

  return (
    <div className={styles.group}>
      <div className={styles.groupTitle}>TÌM KIẾM</div>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          placeholder="Tìm kiếm sản phẩm..."
          onChange={handleSearchChange}
          value={searchState}
        ></input>
        <Link
          className={styles.searchBtn}
          to={`/search?_filter=${encodeURIComponent(searchState)}`}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
        </Link>
      </div>
      {searchState && <Result to={searchState} />}
    </div>
  );
}
