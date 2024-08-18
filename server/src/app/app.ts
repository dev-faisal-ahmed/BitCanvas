import express from 'express';
import cors from 'cors';
import { appRouter } from './router';
import { globalErrorHandler } from '../middleware';

// creating app
export const app = express();

// parser
app.use(express.json());
app.use(cors());

// router
app.use('/api/v1', appRouter);

// greater
app.get('/', async (_req, res) => {
  res.status(200).json({ message: 'Hi from Bit-Canvas Server' });
});

app.use(globalErrorHandler);
