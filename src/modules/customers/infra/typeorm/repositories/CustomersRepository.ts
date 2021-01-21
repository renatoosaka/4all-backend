import { getRepository, Repository } from 'typeorm';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';

class CustomersRepository implements ICustomersRepository {
  private db: Repository<Customer>;

  constructor() {
    this.db = getRepository(Customer);
  }

  public async create(data: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.db.create({
      ...data,
    });

    return this.db.save(customer);
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    return this.db.findOne({
      where: {
        email,
      },
    });
  }

  public async findById(id: string): Promise<Customer | undefined> {
    return this.db.findOne(id);
  }
}

export default CustomersRepository;
