import CreateLendingService from '@modules/movies/services/CreateLendingService';
import FakeLendingsRepository from '@modules/movies/repositories/fakes/FakeLendingsRepository';
import FakeMoviesRepository from '@modules/movies/repositories/fakes/FakeMoviesRepository';
import FakeCustomersRepository from '@modules/customers/repositories/fakes/FakeCustomersRepository';
import AppError from '@shared/errors/AppError';

let fakeLendingsRepository: FakeLendingsRepository;
let fakeMoviesRepository: FakeMoviesRepository;
let fakeCustomersRepository: FakeCustomersRepository;
let createLending: CreateLendingService;

describe('Create Lending', () => {
  beforeEach(() => {
    fakeLendingsRepository = new FakeLendingsRepository();
    fakeMoviesRepository = new FakeMoviesRepository();
    fakeCustomersRepository = new FakeCustomersRepository();
    createLending = new CreateLendingService(
      fakeCustomersRepository,
      fakeMoviesRepository,
      fakeLendingsRepository,
    );
  });

  it('should be able to create a new lending', async () => {
    const moviesData = await fakeMoviesRepository.paginate({
      currentPage: 1,
      rowsPerPage: 1,
    });

    const customer = await fakeCustomersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const lending = await createLending.execute({
      customer_id: customer.id,
      return_date: new Date(2021, 0, 23),
      copies: [moviesData[0][0].copies[0].id],
    });

    expect(lending).toHaveProperty('id');
  });

  it('should not be able to create a new lending with invalid customer', async () => {
    const moviesData = await fakeMoviesRepository.paginate({
      currentPage: 1,
      rowsPerPage: 1,
    });

    expect(
      createLending.execute({
        customer_id: 'invalid-customer',
        return_date: new Date(2021, 0, 23),
        copies: [moviesData[0][0].copies[0].id],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
