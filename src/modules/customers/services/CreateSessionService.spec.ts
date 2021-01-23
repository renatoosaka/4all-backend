import CreateSessionService from '@modules/customers/services/CreateSessionService';
import FakeHashProvider from '@modules/customers/providers/HashProvider/fakes/FakeHashProvider';
import FakeCustomersRepository from '@modules/customers/repositories/fakes/FakeCustomersRepository';
import AppError from '@shared/errors/AppError';

let fakeHashProvider: FakeHashProvider;
let fakeCustomersRepository: FakeCustomersRepository;
let createSession: CreateSessionService;

describe('Create Session', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    fakeHashProvider = new FakeHashProvider();
    createSession = new CreateSessionService(
      fakeCustomersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate', async () => {
    const customer = await fakeCustomersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const response = await createSession.execute({
      email: 'email@email.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.customer).toEqual(customer);
  });

  it('should not be able to authenticate with non existing customer', async () => {
    await expect(
      createSession.execute({
        email: 'email@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await fakeCustomersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await expect(
      createSession.execute({
        email: 'email@email.com',
        password: 'wrong-pass',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
