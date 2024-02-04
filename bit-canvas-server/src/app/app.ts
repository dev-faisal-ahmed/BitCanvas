import express from 'express';
import cors from 'cors';
import { router } from '../routes/routes';
import { globalErrorHandler } from '../middleware/global-error-handler';

// creating app
export const app = express();

// parser
app.use(express.json());
app.use(cors());

// router
app.use('/api/v1', router);

// greater
app.get('/', async (_req, res) => {
  res.status(200).json({ message: 'Hi from Bit-Canvas Server' });
});

app.use(globalErrorHandler);
