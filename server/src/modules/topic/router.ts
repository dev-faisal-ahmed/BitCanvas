import { Router } from 'express';
import { authGuard } from '../../middleware/authGuard';
import { topicController } from './controllers';

export const topicRouter = Router();

topicRouter.post(
  '/',
  authGuard('SUPER_ADMIN', 'ADMIN'),
  topicController.addTopic
);
