import { Router } from 'express';

import CustomersController from '@modules/customers/infra/http/controllers/CustomersController';
import ensureAuthenticated from '@modules/customers/infra/http/middlewares/ensureAuthenticated';

const routes = Router();

const customersControler = new CustomersController();

routes.post('/', customersControler.create);

routes.get('/me', ensureAuthenticated, customersControler.show);

export default routes;
