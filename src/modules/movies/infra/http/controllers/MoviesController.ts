import { Request, Response } from 'express';
import { container } from 'tsyringe';

import PaginateMoviesService from '@modules/movies/services/PaginateMoviesService';

class MoviesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { q, page = 1 } = request.query;

    const paginateMovies = container.resolve(PaginateMoviesService);

    const rowsPerPage = 5;
    const currentPage = (page as number) || 1;

    const movies = await paginateMovies.execute({
      currentPage,
      rowsPerPage,
      q: q as string,
    });

    return response.json(movies);
  }
}

export default MoviesController;
