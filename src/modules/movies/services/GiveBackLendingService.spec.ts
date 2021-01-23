import GiveBackLendingService from '@modules/movies/services/GiveBackLendingService';
import FakeLendingsRepository from '@modules/movies/repositories/fakes/FakeLendingsRepository';
import FakeMoviesRepository from '@modules/movies/repositories/fakes/FakeMoviesRepository';
import FakeCustomersRepository from '@modules/customers/repositories/fakes/FakeCustomersRepository';
import AppError from '@shared/errors/AppError';

let fakeLendingsRepository: FakeLendingsRepository;
let fakeMoviesRepository: FakeMoviesRepository;
let fakeCustomersRepository: FakeCustomersRepository;
let giveBackLending: GiveBackLendingService;

describe('Give Back Lending', () => {
  beforeEach(() => {
    fakeLendingsRepository = new FakeLendingsRepository();
    fakeMoviesRepository = new FakeMoviesRepository();
    fakeCustomersRepository = new FakeCustomersRepository();
    giveBackLending = new GiveBackLendingService(fakeLendingsRepository);
  });

  it('should be able give back lending', async () => {
    const moviesData = await fakeMoviesRepository.paginate({
      currentPage: 1,
      rowsPerPage: 1,
    });

    const customer = await fakeCustomersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const lending = await fakeLendingsRepository.create({
      customer_id: customer.id,
      return_date: new Date(2021, 0, 23),
      copies: [moviesData[0][0].copies[0].id],
    });

    expect(lending.is_back).toBe(false);

    await giveBackLending.execute(lending.id);

    const response = await fakeLendingsRepository.findById(lending.id);

    expect(response?.is_back).toBe(true);
  });

  it('should not be able to give back  invalid lending id', async () => {
    expect(giveBackLending.execute('invalid-id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
