import { container } from 'tsyringe';

import IHashProvider from '@modules/customers/providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '@modules/customers/providers/HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
