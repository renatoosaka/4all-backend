import { compare, hash } from 'bcrypt';

import IHashProvider from '@modules/customers/providers/HashProvider/models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }

  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 10);
  }
}

export default BCryptHashProvider;
