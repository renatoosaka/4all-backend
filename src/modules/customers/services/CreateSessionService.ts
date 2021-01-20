import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import ICreateSessionDTO from '@modules/customers/dtos/ICreateSessionDTO';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import IHashProvider from '@modules/customers/providers/HashProvider/models/IHashProvider';

interface IResponse {
  customer: Customer;
  token: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(data: ICreateSessionDTO): Promise<IResponse> {
    const customer = await this.customersRepository.findByEmail(data.email);

    if (!customer) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    if (!customer.active) {
      throw new AppError(
        `The customer with email ${customer.email} is inactive.`,
        401,
      );
    }

    const passwordMatched = await this.hashProvider.compareHash(
      data.password,
      customer.password,
    );

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: customer.id,
      expiresIn,
    });

    return {
      customer,
      token,
    };
  }
}

export default CreateSessionService;
