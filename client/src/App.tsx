import { Routes, Route } from "react-router-dom";
import clsx from "clsx";

import { useAppSelector } from "app/hooks";
import { selectSiteShow } from "features/site/siteSlice";
import { publicRoutes } from "routes";

import styles from "./App.module.scss";

import ScrollButton from "components/Common/ScrollButton";
import Site from "features/site/Site";
import MainLayout from "components/Layout/MainLayout";
import OnlyContentLayout from "components/Layout/OnlyContentLayout";

function App() {
  const siteIsShow = useAppSelector(selectSiteShow);

  return (
    <div className={styles.app}>
      <div
        className={clsx(styles.appContainer, { [styles.transX]: siteIsShow })}
      >
        <div className={styles.main}>
          <Routes>
            {publicRoutes.map((route, index)=>{

              let Layout = MainLayout;
              if( route.layout ){
                Layout = route.layout;
              }else if (route.layout === null){
                Layout = OnlyContentLayout;
              }

              const Page = route.component;

              return <Route key={index} path={route.path} element={<Layout >
                <Page />
              </Layout>} />
            })}
          </Routes>
          <ScrollButton />
        </div>
      </div>
      {siteIsShow && <Site />}
    </div>
  );
}

export default App;
