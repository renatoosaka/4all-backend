import { Router } from 'express';
import customerRoutes from '@modules/customers/infra/http/routes/customers.routes';

const routes = Router();

routes.get('/', (_, response) => {
  return response.json({
    message: 'Hello World',
  });
});

routes.use('/customers', customerRoutes);

export default routes;
