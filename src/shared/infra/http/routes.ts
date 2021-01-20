import { Router } from 'express';

import customerRoutes from '@modules/customers/infra/http/routes/customers.routes';
import sessionsRoutes from '@modules/customers/infra/http/routes/sessions.routes';

const routes = Router();

routes.get('/', (_, response) => {
  return response.json({
    message: 'Hello World',
  });
});

routes.use('/customers', customerRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
