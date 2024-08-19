import { Router } from 'express';
import { authGuard } from '../../middleware/authGuard';
import { articleController } from './controllers';

export const articleRouter = Router();

articleRouter.post('/', authGuard('USER'), articleController.addArticle);

articleRouter.patch(
  '/:articleId',
  authGuard('USER'),
  articleController.updateArticle
);
