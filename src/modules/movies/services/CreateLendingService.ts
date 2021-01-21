import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Lending from '@modules/movies/infra/typeorm/entities/Lending';
import ILendingsRepository from '@modules/movies/repositories/ILendingsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import ICreateLendingDTO from '@modules/movies/dtos/ICreateLendingDTO';

@injectable()
class CreateLendingService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,

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

    return this.lendingsRepository.create({ copies, customer_id, return_date });
  }
}

export default CreateLendingService;
