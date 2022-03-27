import homeRouter from './home.js';
import productsRouter from './products.js';
import navigationRouter from './navigation.js';
import categoryRouter from './category.js';

function router(app) {
  app.use('/categories', categoryRouter);
  app.use('/navigations', navigationRouter);
  app.use('/products', productsRouter);
  app.use('/', homeRouter);
}
export default router;
