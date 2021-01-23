import PaginateMoviesService from '@modules/movies/services/PaginateMoviesService';
import FakeMoviesRepository from '@modules/movies/repositories/fakes/FakeMoviesRepository';
import AppError from '@shared/errors/AppError';

let fakeMoviesRepository: FakeMoviesRepository;
let paginateMovie: PaginateMoviesService;

describe('Paginate Movie', () => {
  beforeEach(() => {
    fakeMoviesRepository = new FakeMoviesRepository();
    paginateMovie = new PaginateMoviesService(fakeMoviesRepository);
  });

  it('should be able to show movie`s page 1', async () => {
    const response = await paginateMovie.execute({
      currentPage: 1,
      rowsPerPage: 2,
    });

    expect(response.currentPage).toBe(1);
    expect(response.data.length).toBe(2);
  });

  it('should be able to show movie`s page 3', async () => {
    const response = await paginateMovie.execute({
      currentPage: 3,
      rowsPerPage: 2,
    });

    expect(response.currentPage).toBe(3);
    expect(response.data.length).toBe(2);
  });
});
