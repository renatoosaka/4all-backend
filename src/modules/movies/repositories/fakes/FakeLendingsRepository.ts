import { v4 } from 'uuid';

import ICreateLendingDTO from '@modules/movies/dtos/ICreateLendingDTO';
import Lending from '@modules/movies/infra/typeorm/entities/Lending';
import ILendingsRepository from '@modules/movies/repositories/ILendingsRepository';
import Item from '@modules/movies/infra/typeorm/entities/Item';

class FakeLendingsRepository implements ILendingsRepository {
  private lendings: Lending[] = [];

  public async create(data: ICreateLendingDTO): Promise<Lending> {
    const lending = new Lending();
    const items: Item[] = [];
    const id = v4();

    lending.id = id;
    lending.customer_id = data.customer_id;
    lending.is_back = false;
    lending.return_date = data.return_date;

    data.copies.forEach(copy => {
      const item = new Item();

      item.lending_id = id;
      item.copy_id = copy;

      items.push(item);
    });

    lending.items = items;

    this.lendings.push(lending);
    return lending;
  }

  public async save(lending: Lending): Promise<Lending> {
    const findIndex = this.lendings.findIndex(
      findLending => findLending.id === lending.id,
    );

    this.lendings[findIndex] = lending;

    return lending;
  }

  public async findById(id: string): Promise<Lending | undefined> {
    return this.lendings.find(lending => lending.id === id);
  }
}

export default FakeLendingsRepository;
