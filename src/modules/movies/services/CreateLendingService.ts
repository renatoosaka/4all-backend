import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Lending from '@modules/movies/infra/typeorm/entities/Lending';
import ILendingsRepository from '@modules/movies/repositories/ILendingsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import ICreateLendingDTO from '@modules/movies/dtos/ICreateLendingDTO';
import IMoviesRepository from '../repositories/IMoviesRepository';
import Item from '../infra/typeorm/entities/Item';

@injectable()
class CreateLendingService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,

    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,

    @inject('LendingsRepository')
    private lendingsRepository: ILendingsRepository,
  ) {}

  public async execute({
    copies,
    customer_id,
    return_date,
  }: ICreateLendingDTO): Promise<Lending> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer not found', 404);
    }

    await Promise.all(
      copies.map(async item => {
        const copy = await this.moviesRepository.findByCopyId(item);

        if (!copy) {
          throw new AppError(`Copy with id ${item} not found`, 404);
        }

        return copy;
      }),
    );

    return this.lendingsRepository.create({ copies, customer_id, return_date });
  }
}

export default CreateLendingService;
