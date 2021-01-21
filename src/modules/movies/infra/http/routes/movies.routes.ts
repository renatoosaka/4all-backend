import { Router } from 'express';

import MoviesController from '@modules/movies/infra/http/controllers/MoviesController';

const routes = Router();
const moviesController = new MoviesController();

routes.get('/', moviesController.index);

export default routes;
