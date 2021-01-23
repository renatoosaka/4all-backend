import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import FakeHashProvider from '@modules/customers/providers/HashProvider/fakes/FakeHashProvider';
import FakeCustomersRepository from '@modules/customers/repositories/fakes/FakeCustomersRepository';
import AppError from '@shared/errors/AppError';

let fakeHashProvider: FakeHashProvider;
let fakeCustomersRepository: FakeCustomersRepository;
let createCustomer: CreateCustomerService;

describe('Create Customer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    fakeHashProvider = new FakeHashProvider();
    createCustomer = new CreateCustomerService(
      fakeCustomersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to create a new customer', async () => {
    const customer = await createCustomer.execute({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    expect(customer).toHaveProperty('id');
  });

  it('shoud not be able to create a new customer whit same email', async () => {
    await createCustomer.execute({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await expect(
      createCustomer.execute({
        name: 'John Doe',
        email: 'email@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
