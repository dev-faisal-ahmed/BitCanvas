import { Router } from 'express';
import { authRouter } from '../modules/auth/router';
import { articleRouter } from '../modules/article/router';
import { topicRouter, topicsRouter } from '../modules/topic/router';

export const appRouter = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/topic', topicRouter);
appRouter.use('/topics', topicsRouter);
appRouter.use('/article', articleRouter);
