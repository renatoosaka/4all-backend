import { Router } from 'express';

import customerRoutes from '@modules/customers/infra/http/routes/customers.routes';
import sessionsRoutes from '@modules/customers/infra/http/routes/sessions.routes';
import moviesRoutes from '@modules/movies/infra/http/routes/movies.routes';
import lendingsRoutes from '@modules/movies/infra/http/routes/lendings.routes';

const routes = Router();

routes.get('/', (_, response) => {
  return response.json({
    message: 'Hello World',
  });
});

routes.use('/customers', customerRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/movies', moviesRoutes);
routes.use('/lendings', lendingsRoutes);

export default routes;
