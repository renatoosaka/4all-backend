import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';
import IHashProvider from '@modules/customers/providers/HashProvider/models/IHashProvider';

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(data: ICreateCustomerDTO): Promise<Customer> {
    const alreadyExists = await this.customersRepository.findByEmail(
      data.email,
    );

    if (alreadyExists) {
      throw new AppError(`Customer with email ${data.email} already exists`);
    }

    const password = await this.hashProvider.generateHash(data.password);

    return this.customersRepository.create({
      ...data,
      password,
    });
  }
}

export default CreateCustomerService;
