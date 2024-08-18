import { Router } from 'express';
import { authGuard } from '../../middleware/authGuard';
import { topicController } from './controllers';

export const topicRouter = Router();
export const topicsRouter = Router();

// topic
topicRouter.post(
  '/',
  authGuard('SUPER_ADMIN', 'ADMIN'),
  topicController.addTopic
);

// topics
topicsRouter.get('/', topicController.getAllTopics);
