import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateSessionService from '@modules/customers/services/CreateSessionService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSession = container.resolve(CreateSessionService);

    const { customer, token } = await createSession.execute({
      email,
      password,
    });

    return response.json({
      customer: classToClass(customer),
      token,
    });
  }
}

export default SessionsController;
