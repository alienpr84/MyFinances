import express, { Express, Request, Response } from 'express';
import routes from './routes';

const app: Express = express();

// middlewares
app.use(express.json());

// routes
app.use('/api', routes);

// default response
app.get('/', (req: Request, res: Response) => res.send('My Life API'));

export default app;
