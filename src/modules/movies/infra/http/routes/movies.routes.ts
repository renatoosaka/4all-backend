import { Router } from 'express';

import MoviesController from '@modules/movies/infra/http/controllers/MoviesController';
import ensureAuthenticated from '@modules/customers/infra/http/middlewares/ensureAuthenticated';

const routes = Router();
const moviesController = new MoviesController();

routes.get('/', ensureAuthenticated, moviesController.index);

export default routes;
