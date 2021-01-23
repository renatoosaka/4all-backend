import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import ShowCustomerService from '@modules/customers/services/ShowCustomerService';

class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createCustomer = container.resolve(CreateCustomerService);

    const customer = await createCustomer.execute({ name, email, password });

    return response.status(201).json(classToClass(customer));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.customer;

    const showCustomer = container.resolve(ShowCustomerService);

    const customer = await showCustomer.execute(id);

    return response.json(classToClass(customer));
  }
}

export default CustomersController;
