import 'reflect-metadata';

import express from 'express';

import routes from './routes';

import '@shared/infra/typeorm';

const app = express();

app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🏃 Server is running on port ${PORT}`);
});
