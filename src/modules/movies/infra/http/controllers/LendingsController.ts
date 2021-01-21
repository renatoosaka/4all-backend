import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateLendingService from '@modules/movies/services/CreateLendingService';
import GiveBackLendingService from '@modules/movies/services/GiveBackLendingService';

class LendingsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { return_date, copies } = request.body;
    const { id: customer_id } = request.customer;

    const createLending = container.resolve(CreateLendingService);

    const lending = await createLending.execute({
      copies,
      customer_id,
      return_date,
    });

    return response.status(201).json(lending);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const giveBackLending = container.resolve(GiveBackLendingService);

    await giveBackLending.execute(id);

    return response.status(204).send();
  }
}

export default LendingsController;
