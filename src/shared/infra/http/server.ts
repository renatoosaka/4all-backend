import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';

import 'express-async-errors';

import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import AppError from '@shared/errors/AppError';
import routes from '@shared/infra/http/routes';

import specs from '@shared/infra/docs/specs.json';

import '@shared/container';
import '@shared/infra/typeorm';

const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
    customSiteTitle: '4all - API documentation',
  }),
);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🏃 Server is running on port ${PORT}`);
});
