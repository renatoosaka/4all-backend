import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ILendingsRepository from '@modules/movies/repositories/ILendingsRepository';

@injectable()
class GiveBackLendingService {
  constructor(
    @inject('LendingsRepository')
    private lendingsRepository: ILendingsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const lending = await this.lendingsRepository.findById(id);

    if (!lending) {
      throw new AppError(`Lending with id ${id} not found`, 404);
    }

    lending.is_back = true;

    await this.lendingsRepository.save(lending);
  }
}

export default GiveBackLendingService;
