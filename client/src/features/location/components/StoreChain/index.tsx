import { Location } from "models";
import styles from "./StoreChain.module.scss";

interface StoreChainProps {
  locations: Location[];
}

const StoreChain = ({ locations }: StoreChainProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>HỆ THỐNG CỬA HÀNG</h2>
      <div className={styles.group}>
        {locations.map((location) => (
          <div key={location.location_id} className={styles.location}>
            <div className={styles.col}>
              <div className={styles.name}>{location.name.toUpperCase()}</div>
              {location.stores.map((store) => (
                <div className={styles.store}>
                  <div className={styles.storeName}>
                    {store.name.toUpperCase()}
                  </div>
                  <span className={styles.address}>
                    {store.address.toUpperCase()}
                  </span>
                  <span className={styles.phone}>{store.phone}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StoreChain;
