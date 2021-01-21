import { inject, injectable } from 'tsyringe';

import Movie from '@modules/movies/infra/typeorm/entities/Movie';
import IPaginateMovieDTO from '@modules/movies/dtos/IPaginateMovieDTO';
import IMoviesRepository from '@modules/movies/repositories/IMoviesRepository';

interface IResponse {
  currentPage: number;
  totalPage: number;
  rowsCount: number;
  data: Movie[];
}

@injectable()
class PaginateMoviesService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  public async execute({
    q,
    currentPage,
    rowsPerPage,
  }: IPaginateMovieDTO): Promise<IResponse> {
    const [data, rowsCount] = await this.moviesRepository.paginate({
      q,
      currentPage,
      rowsPerPage,
    });

    const totalPage = Math.ceil(rowsCount / rowsPerPage);

    return {
      currentPage,
      totalPage,
      rowsCount,
      data,
    };
  }
}

export default PaginateMoviesService;
