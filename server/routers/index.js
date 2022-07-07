import homeRouter from "./home.js";
import productsRouter from "./products.js";
import collectionRouter from "./collection.js";
import navigationRouter from "./navigation.js";
import categoryRouter from "./category.js";
import slideRouter from "./slide.js";
import registerRouter from "./register.js";
import loginRouter from "./login.js";
import logoutRouter from "./logout.js";
import locationRouter from "./location.js";
import storeRouter from "./store.js";
import refreshTokenRouter from "./refresh.js";

function router(app) {
  app.use("/locations", locationRouter);
  app.use("/stores", storeRouter);
  app.use("/categories", categoryRouter);
  app.use("/slides", slideRouter);
  app.use("/navigations", navigationRouter);
  app.use("/products", productsRouter);
  app.use("/collection", collectionRouter);
  app.use("/", homeRouter);
}

function routerAuth(app) {
  app.use("/register", registerRouter);
  app.use("/login", loginRouter);
  app.use("/logout", logoutRouter);
  app.use("/refresh", refreshTokenRouter);
}
export { routerAuth };
export default router;
