import { container } from 'tsyringe';

import '@modules/customers/providers';

import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';

import IMoviesRepository from '@modules/movies/repositories/IMoviesRepository';
import MoviesRepository from '@modules/movies/infra/typeorm/repositories/MoviesRepository';

import ILendingsRepository from '@modules/movies/repositories/ILendingsRepository';
import LendingsRepository from '@modules/movies/infra/typeorm/repositories/LendingsRepository';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

container.registerSingleton<IMoviesRepository>(
  'MoviesRepository',
  MoviesRepository,
);

container.registerSingleton<ILendingsRepository>(
  'LendingsRepository',
  LendingsRepository,
);
