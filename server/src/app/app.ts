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
app.get('/', async (_, res) => {
  res.status(200).json({ message: 'Hi from Bit-Canvas Server' });
});

app.all('*', async (_, res) => {
  res.status(400).json({ ok: false, message: 'This Path Does Not Exist' });
});

app.use(globalErrorHandler);
