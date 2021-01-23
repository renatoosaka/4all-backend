import IHashProvider from '@modules/customers/providers/HashProvider/models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }

  public async generateHash(payload: string): Promise<string> {
    return payload;
  }
}

export default FakeHashProvider;
