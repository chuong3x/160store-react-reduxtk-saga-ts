import { useAppDispatch, useAppSelector } from "app/hooks";
import SearchForm from "./components/SearchForm";
import styles from "./Site.module.scss";
import { selectShowFor, selectSiteShow, siteActions } from "./siteSlice";
import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import CartForm from "./components/CartForm";

export default function Site() {
  const dispatch = useAppDispatch();
  const siteIsShow = useAppSelector(selectSiteShow);
  const siteShowFor = useAppSelector(selectShowFor);
  const handleCloseSite = () => {
    dispatch(siteActions.hide());
  };
  return (
    <div className={clsx(styles.site, { [styles.siteTransX]: siteIsShow })}>
      <span
        className={clsx(styles.overlay, { [styles.overlayShow]: siteIsShow })}
        onClick={handleCloseSite}
      ></span>
      <form className={styles.form}>
        <div className={styles.formClose} onClick={handleCloseSite}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </div>
        {siteShowFor === "search" && <SearchForm />}
        {siteShowFor === "cart" && <CartForm />}
      </form>
    </div>
  );
}
