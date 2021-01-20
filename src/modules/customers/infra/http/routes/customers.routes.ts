import { Router } from 'express';
import CustomersController from '@modules/customers/infra/http/controllers/CustomersController';

const routes = Router();

const customersControler = new CustomersController();

routes.post('/', customersControler.create);

export default routes;
