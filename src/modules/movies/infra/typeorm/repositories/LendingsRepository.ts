import { getRepository, Repository } from 'typeorm';

import ICreateLendingDTO from '@modules/movies/dtos/ICreateLendingDTO';
import ILendingsRepository from '@modules/movies/repositories/ILendingsRepository';
import Lending from '@modules/movies/infra/typeorm/entities/Lending';

class LendingsRepository implements ILendingsRepository {
  private db: Repository<Lending>;

  constructor() {
    this.db = getRepository(Lending);
  }

  public async create({
    copies,
    customer_id,
    return_date,
  }: ICreateLendingDTO): Promise<Lending> {
    const lending = this.db.create({
      customer_id,
      return_date,
      items: copies.map(item => ({ copy_id: item })),
    });

    return this.db.save(lending);
  }
}

export default LendingsRepository;
