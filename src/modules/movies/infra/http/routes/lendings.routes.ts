import { Router } from 'express';

import LendingsController from '@modules/movies/infra/http/controllers/LendingsController';
import ensureAuthenticated from '@modules/customers/infra/http/middlewares/ensureAuthenticated';

const routes = Router();
const lendingsController = new LendingsController();

routes.post('/', ensureAuthenticated, lendingsController.create);
routes.put('/:id', ensureAuthenticated, lendingsController.update);

export default routes;
