import { Router } from 'express';

const routes = Router();

routes.get('/', (_, response) => {
  return response.json({
    message: 'Hello World',
  });
});

export default routes;
