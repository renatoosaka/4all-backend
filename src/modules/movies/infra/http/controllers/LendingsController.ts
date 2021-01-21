import { Request, Response } from 'express';

class LendingsController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }
}

export default LendingsController;
