import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import routes from './routes';

import '@shared/infra/typeorm';

const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🏃 Server is running on port ${PORT}`);
});
