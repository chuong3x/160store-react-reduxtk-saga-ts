import homeRouter from './home.js';
import registerRouter from './register.js';
import loginRouter from './login.js';
import productsRouter from './products.js';
import collectionRouter from './collection.js';
import navigationRouter from './navigation.js';
import categoryRouter from './category.js';
import slideRouter from './slide.js';

function router(app) {
  app.use('/register', registerRouter);
  app.use('/login', loginRouter);
  app.use('/categories', categoryRouter);
  app.use('/slides', slideRouter);
  app.use('/navigations', navigationRouter);
  app.use('/products', productsRouter);
  app.use('/collection', collectionRouter);
  app.use('/', homeRouter);
}
export default router;
