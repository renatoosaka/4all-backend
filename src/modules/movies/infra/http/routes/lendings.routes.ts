import { Router } from 'express';

import LendingsController from '@modules/movies/infra/http/controllers/LendingsController';

const routes = Router();
const lendingsController = new LendingsController();

routes.post('/', lendingsController.create);

export default routes;
