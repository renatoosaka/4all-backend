import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICustomersRepository from '../repositories/ICustomersRepository';

@injectable()
class ShowCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customerRepository: ICustomersRepository,
  ) {}

  public async execute(id: string): Promise<Customer> {
    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new AppError(`Customer with id ${id} not found`, 404);
    }

    return customer;
  }
}

export default ShowCustomerService;
