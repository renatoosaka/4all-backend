import ShowCustomerService from '@modules/customers/services/ShowCustomerService';
import FakeCustomersRepository from '@modules/customers/repositories/fakes/FakeCustomersRepository';
import AppError from '@shared/errors/AppError';

let fakeCustomersRepository: FakeCustomersRepository;
let showCustomer: ShowCustomerService;

describe('Show Customer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    showCustomer = new ShowCustomerService(fakeCustomersRepository);
  });

  it('should be able to show customer', async () => {
    const customer = await fakeCustomersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const response = await showCustomer.execute(customer.id);

    expect(response).toHaveProperty('id');
    expect(response).toEqual(customer);
  });

  it('should not be able to show customer', async () => {
    expect(showCustomer.execute('invalid-id')).rejects.toBeInstanceOf(AppError);
  });
});
